import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../services/http";
import { getAPIURL, getUserID, getVendorID } from "../../services/helper";

const api_url = getAPIURL();
const vendor_id = getVendorID();
const biller_id = getUserID();

// Helper functions to interact with localStorage
const saveCartToLocalStorage = (cart) => {
  const { cartItems, total, discount, amountPaid, isPaying, cartId } = cart;
  localStorage.setItem(
    "getorder_cart",
    JSON.stringify({ cartItems, total, discount, amountPaid, isPaying, cartId })
  );
};

const loadCartFromLocalStorage = () => {
  const cart = localStorage.getItem("getorder_cart");
  return cart
    ? JSON.parse(cart)
    : {
        cartItems: [],
        total: 0,
        discount: 0,
        amountPaid: 0,
        isPaying: false,
        cartId: nanoid(),
      };
};

const saveHoldCartsToLocalStorage = (holdCarts) => {
  localStorage.setItem("getorder_holdCarts", JSON.stringify(holdCarts));
};

const loadHoldCartsFromLocalStorage = () => {
  const holdCarts = localStorage.getItem("getorder_holdCarts");
  return holdCarts ? JSON.parse(holdCarts) : [];
};

const saveOrdersToLocalStorage = (orders) => {
  localStorage.setItem("getorders_pos_orders", JSON.stringify(orders));
};

const loadOrdersFromLocalStorage = () => {
  const orders = localStorage.getItem("getorders_pos_orders");
  return orders ? JSON.parse(orders) : [];
};

// Thunk to fetch products
export const fetchProducts = createAsyncThunk(
  "cart/fetchProducts",
  async () => {
    const response = await http.get(
      `${api_url}/products?vendor_id=${vendor_id}`
    );
    return response.data.data;
  }
);

// Thunk to fetch registers
export const fetchRegisters = createAsyncThunk(
  "registers/fetchRegisters",
  async () => {
    const { data: registers } = await http.get(
      `${api_url}/get-registers?biller_id=${biller_id}`
    );
    return registers;
  }
);

const initialState = {
  ...loadCartFromLocalStorage(),
  holdCarts: loadHoldCartsFromLocalStorage(),
  products: [],
  status: "idle",
  order_type: "pos",
  order_id: null,
  error: null,
  register_id: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.cartItems.push(action.payload);
      }
      state.total += action.payload.price * action.payload.quantity;
      saveCartToLocalStorage(state);
    },
    removeItem: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload
      );
      if (itemIndex >= 0) {
        const item = state.cartItems[itemIndex];
        state.total -= item.price * item.quantity;
        state.cartItems.splice(itemIndex, 1);
      }
      saveCartToLocalStorage(state);
    },
    updateQuantity: (state, action) => {
      const item = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (item) {
        const difference = action.payload.quantity - item.quantity;
        item.quantity = action.payload.quantity;
        state.total += item.price * difference;
      }
      saveCartToLocalStorage(state);
    },
    applyDiscount: (state, action) => {
      const discountInput = action.payload;
      const subtotal = state.cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );

      if (!discountInput) {
        state.discount = 0;
      } else if (
        typeof discountInput === "string" &&
        discountInput.includes("%")
      ) {
        const percentage = parseFloat(discountInput.replace("%", ""));
        if (isNaN(percentage)) {
          state.discount = 0;
        } else {
          state.discount = (subtotal * percentage) / 100;
        }
      } else {
        const parsedDiscount = parseFloat(discountInput);
        state.discount = isNaN(parsedDiscount) ? 0 : parsedDiscount;
      }

      state.total = subtotal - state.discount;
      saveCartToLocalStorage(state);
    },
    setOpenRegister: (state, action) => {
      state.register_id = action.payload;
    },
    holdCart: (state) => {
      state.holdCarts.push({
        id: state.cartId,
        cartItems: [...state.cartItems],
        total: state.total,
        discount: state.discount,
      });
      state.cartItems = [];
      state.total = 0;
      state.discount = 0;
      state.amountPaid = 0;
      state.isPaying = false;
      state.cartId = nanoid();
      saveCartToLocalStorage(state);
      saveHoldCartsToLocalStorage(state.holdCarts);
    },
    payingCart: (state, action) => {
      state.amountPaid = action.payload;
      state.isPaying = true;
      saveCartToLocalStorage(state);
    },
    backToCart: (state) => {
      state.isPaying = false;
      saveCartToLocalStorage(state);
    },
    cartPaid: (state) => {
      let pending_orders = loadOrdersFromLocalStorage() || []; // Ensure it's an array, fallback to an empty array

      state.isPaying = false;
      const amount_paid =
        state.amountPaid === 0 ? state.total : state.amountPaid;

      // Create the new order object
      const newOrder = {
        id: state.cartId,
        items: [...state.cartItems], // Copy items
        sale_amount: parseFloat(state.total),
        discount: parseFloat(state.discount),
        paid: parseFloat(amount_paid),
        register_id: state.register_id,
      };

      // Add the new order to pending orders (without directly mutating the array)
      pending_orders = [...pending_orders, newOrder];

      // Reset cart state
      state.cartItems = [];
      state.total = 0;
      state.discount = 0;
      state.amountPaid = 0;
      state.cartId = nanoid(); // Generate new cart ID

      // Save updated cart and pending orders back to localStorage
      saveCartToLocalStorage({
        cartItems: state.cartItems,
        total: state.total,
        discount: state.discount,
        amountPaid: state.amountPaid,
        cartId: state.cartId,
      });

      saveOrdersToLocalStorage(pending_orders);
    },
    retrieveCart: (state, action) => {
      const holdCart = state.holdCarts.find(
        (cart) => cart.id === action.payload
      );
      if (holdCart) {
        state.cartItems = holdCart.cartItems;
        state.total = holdCart.total;
        state.discount = holdCart.discount;
        state.amountPaid = 0;
        state.cartId = holdCart.id;
        state.holdCarts = state.holdCarts.filter(
          (cart) => cart.id !== action.payload
        );
        saveCartToLocalStorage(state);
        saveHoldCartsToLocalStorage(state.holdCarts);
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.total = 0;
      state.discount = 0;
      state.amountPaid = 0;
      state.isPaying = false;
      state.cartId = nanoid();
      state.order_id = null;
      state.order_type = "pos";
      saveCartToLocalStorage(state);
    },
    orderToCart: (state, action) => {
      const { id, items, order_type } = action.payload;
      state.order_id = id;
      state.order_type = order_type;
      state.cartItems = [...items];
      state.total = items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      state.isPaying = false;
      saveCartToLocalStorage(state);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchRegisters.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRegisters.fulfilled, (state, action) => {
        state.status = "succeeded";
        const registers = action.payload;
        const open_registers = registers.filter((r) => r.status === "open");
        if (open_registers.length > 1) {
          state.error =
            "More than one registered is opend, plz contact admin to resolve this issue";
        } else if (open_registers.length === 1) {
          state.register_id = open_registers[0].id;
        }
      });
  },
});

export const {
  addItem,
  removeItem,
  updateQuantity,
  applyDiscount,
  setOpenRegister,
  holdCart,
  retrieveCart,
  clearCart,
  payingCart,
  backToCart,
  cartPaid,
  orderToCart,
} = cartSlice.actions;
export default cartSlice.reducer;
