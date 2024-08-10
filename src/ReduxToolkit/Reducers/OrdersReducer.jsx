import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getAPIURL, getVendorID } from "../../services/helper";

const api_url = getAPIURL();
const vendor_id = getVendorID();

// Fetch order statuses from the API
export const fetchOrderStatuses = createAsyncThunk(
  "orders/fetchOrderStatuses",
  async () => {
    const response = await axios.get(`${api_url}/get-order-statuses`);
    return response.data;
  }
);

// Fetch orders from the API
export const fetchOrders = createAsyncThunk("orders/fetchOrders", async () => {
  const response = await axios.get(
    `${api_url}/get-orders?vendor_id=${vendor_id}`
  );
  return response.data;
});

const initialState = { allOrders: [], allOrderStatuses: [], isLoading: false };

const OrdersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setOrders: (state, action) => {
      state.allOrders = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setOrderStatus: (state, action) => {
      const { orderId, status } = action.payload;
      const order = state.allOrders.find((order) => order.id === orderId);
      if (order) {
        order.status = status;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchOrders.fulfilled, (state, action) => {
      state.allOrders = action.payload.data;
    });
    builder.addCase(fetchOrderStatuses.fulfilled, (state, action) => {
      state.allOrderStatuses = action.payload;
    });
  },
});

export const { setOrders, setOrderStatus, setLoading } = OrdersSlice.actions;
export default OrdersSlice.reducer;
