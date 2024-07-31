import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../services/http";
import data from "../../services/config";
const { api_url, vendor_id } = data;

// Helper functions to interact with localStorage
const saveCartToLocalStorage = (cart) => {
  const { cartItems, total, discount, amountPaid, isPaying, cartId } = cart;
  localStorage.setItem(
    "cart",
    JSON.stringify({ cartItems, total, discount, amountPaid, isPaying, cartId })
  );
};

const loadCartFromLocalStorage = () => {
  const cart = localStorage.getItem("cart");
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
  localStorage.setItem("holdCarts", JSON.stringify(holdCarts));
};

const loadHoldCartsFromLocalStorage = () => {
  const holdCarts = localStorage.getItem("holdCarts");
  return holdCarts ? JSON.parse(holdCarts) : [];
};

const saveOrdersToLocalStorage = (orders) => {
  localStorage.setItem("orders", JSON.stringify(orders));
};

const loadOrdersFromLocalStorage = () => {
  const orders = localStorage.getItem("orders");
  return orders ? JSON.parse(orders) : [];
};

// Thunk to fetch products
export const fetchProducts = createAsyncThunk(
  "cart/fetchProducts",
  async () => {
    const response = await http.get(
      `${api_url}/get-products?vendor_id=${vendor_id}`
    );
    return response.data.data;
  }
);

const initialState = {
  ...loadCartFromLocalStorage(),
  holdCarts: loadHoldCartsFromLocalStorage(),
  orders: loadOrdersFromLocalStorage(),
  products: [],
  status: "idle",
  error: null,
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
      state.isPaying = false;
      state.orders.push({
        id: state.cartId,
        cartItems: [...state.cartItems],
        total: state.total,
        discount: state.discount,
        paid: state.amountPaid,
      });
      state.cartItems = [];
      state.total = 0;
      state.discount = 0;
      state.amountPaid = 0;
      state.cartId = nanoid();
      saveCartToLocalStorage(state);
      saveOrdersToLocalStorage(state.orders);
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
      });
  },
});

export const {
  addItem,
  removeItem,
  updateQuantity,
  applyDiscount,
  holdCart,
  retrieveCart,
  clearCart,
  payingCart,
  backToCart,
  cartPaid,
} = cartSlice.actions;
export default cartSlice.reducer;
