import { createSlice } from "@reduxjs/toolkit";

// Helper functions to interact with localStorage
const saveCartToLocalStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const saveOrdersToLocalStorage = (orders) => {
  localStorage.setItem("orders", JSON.stringify(orders));
};

const loadCartFromLocalStorage = () => {
  const cart = localStorage.getItem("cart");
  return cart
    ? JSON.parse(cart)
    : { cartItems: [], total: 0, discount: 0, isPaying: false };
};

const saveHoldCartsToLocalStorage = (holdCarts) => {
  localStorage.setItem("holdCarts", JSON.stringify(holdCarts));
};

const loadHoldCartsFromLocalStorage = () => {
  const holdCarts = localStorage.getItem("holdCarts");
  return holdCarts ? JSON.parse(holdCarts) : [];
};

const loadOrdersFromLocalStorage = () => {
  const orders = localStorage.getItem("orders");
  return orders ? JSON.parse(orders) : [];
};

const initialState = {
  ...loadCartFromLocalStorage(),
  holdCarts: loadHoldCartsFromLocalStorage(),
  localOrders: loadOrdersFromLocalStorage(),
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
        cartItems: [...state.cartItems],
        total: state.total,
        discount: state.discount,
      });
      state.cartItems = [];
      state.total = 0;
      state.discount = 0;
      state.isPaying = false;
      saveCartToLocalStorage(state);
      saveHoldCartsToLocalStorage(state.holdCarts);
    },
    payingCart: (state) => {
      state.isPaying = true;
    },
    cartPaid: (state) => {
      state.isPaying = false;
      state.localOrders.push({
        cartItems: [...state.cartItems],
        total: state.total,
        discount: state.discount,
      });
      state.cartItems = [];
      state.total = 0;
      state.discount = 0;
      saveCartToLocalStorage(state);
      saveOrdersToLocalStorage(state.localOrders);
    },
    retrieveCart: (state, action) => {
      const holdCart = state.holdCarts[action.payload];
      if (holdCart) {
        state.cartItems = holdCart.cartItems;
        state.total = holdCart.total;
        state.discount = holdCart.discount;
        state.holdCarts.splice(action.payload, 1);
        saveCartToLocalStorage(state);
        saveHoldCartsToLocalStorage(state.holdCarts);
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.total = 0;
      state.discount = 0;
      state.isPaying = false;
      saveCartToLocalStorage(state);
    },
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
  cartPaid,
} = cartSlice.actions;
export default cartSlice.reducer;
