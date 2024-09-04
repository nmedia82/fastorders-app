import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getAPIURL, getVendorID } from "../../services/helper";

const api_url = getAPIURL();
const vendor_id = getVendorID();

// Fetch widget reports
export const fetchDashboardReports = createAsyncThunk(
  "dashboard_reports",
  async (range) => {
    // const range = time === "24" ? "last_24_hours" : `last_${time}_days`;
    const payload = { range };

    const response = await axios.post(
      `${api_url}/reports/${vendor_id}`,
      payload
    );

    return { range, data: response.data };
  }
);

// Add a activity
export const addActivityLog = createAsyncThunk("activity", async (payload) => {
  const response = await axios.post(`${api_url}/activit`, {
    ...payload,
    vendor_id,
  });
  return response.data;
});

const initialState = {
  dashoardReports: [],
  allActivities: [],
  allEmployees: [],
  registers: [],
  discounts: [],
  allRanges: [
    { key: "last_24_hours", label: "Last 24 Hours" },
    { key: "last_30_days", label: "Last 30 Days" },
    { key: "last_60_days", label: "Last 60 Days" },
    { key: "last_90_days", label: "Last 90 Days" },
  ],
  currentRange: "Last 24 Hours",
  isLoading: false,
  isBackgroundWorking: false,
};
export const addDiscount = createAsyncThunk(
  "products/addDiscount",
  async (data) => {
    const response = await axios.post(`${api_url}/vendor-coupon`, data);
    return response;
  }
);
export const deleteDiscount = createAsyncThunk(
  "products/deleteDiscount",
  async (data) => {
    console.log(data);
    const response = await axios.delete(`${api_url}/vendor-coupon`, data);
    console.log(response);
    return response.data;
  }
);
export const fetchDiscounts = createAsyncThunk(
  "products/fetchDiscounts",
  async () => {
    const response = await axios.get(
      `${api_url}/vendor-coupons?vendor_id=${vendor_id}`
    );

    return response.data;
  }
);
export const fetchRegisters = createAsyncThunk(
  "products/fetchRegisters",
  async () => {
    const response = await axios.get(
      `${api_url}/get-registers?vendor_id=${vendor_id}`
    );
    return response.data;
  }
);

export const addRegister = createAsyncThunk(
  "products/addRegister",
  async (data) => {
    const response = await axios.post(`${api_url}/open-register`, data);
    return response.data;
  }
);
export const fetchEmployees = createAsyncThunk(
  "products/fetchEmployees",
  async () => {
    const response = await axios.get(
      `${api_url}/employees?vendor_id=12`
      // `${api_url}/employees?vendor_id=${vendor_id}`
    );
    return response.data;
  }
);
const AppSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setBackgroundSyncing: (state, action) => {
      state.isBackgroundWorking = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle fetch products
      .addCase(fetchDashboardReports.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchDashboardReports.fulfilled, (state, action) => {
        state.dashoardReports = action.payload.data;
        const current_range = state.allRanges.find(
          (r) => r.key === action.payload.range
        );
        state.currentRange = current_range.label;
        state.isLoading = false;
      })
      .addCase(fetchDashboardReports.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(addActivityLog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addActivityLog.fulfilled, (state, action) => {
        state.allActivities = [action.payload, ...state.allActivities];
        state.isLoading = false;
      })
      // handle fetch registers
      .addCase(fetchRegisters.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchRegisters.fulfilled, (state, action) => {
        state.registers = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchRegisters.rejected, (state) => {
        state.isLoading = false;
      })
      // add register
      .addCase(addRegister.fulfilled, (state, action) => {
        state.registers.push(action.payload); // Add the new product to the state
      })
      // handle fetch employees
      .addCase(fetchEmployees.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.allEmployees = action.payload.data;
        state.isLoading = false;
      })
      .addCase(fetchEmployees.rejected, (state) => {
        state.isLoading = false;
      })
      // handle fetch discounts
      .addCase(fetchDiscounts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchDiscounts.fulfilled, (state, action) => {
        state.discounts = action.payload.data;
        state.isLoading = false;
      })
      .addCase(fetchDiscounts.rejected, (state) => {
        state.isLoading = false;
      })
      // add discount
      .addCase(addDiscount.fulfilled, (state, action) => {
        state.discounts.push(action.payload.data); // Add the new product to the state
      })
      .addCase(deleteDiscount.fulfilled, (state, action) => {
        state.discounts = state.discounts.filter(
          (discount) => discount.cupon !== action.meta.arg
        ); // Add the new product to the state
      });
  },
});

export const { setLoading, setBackgroundSyncing } = AppSlice.actions;
export default AppSlice.reducer;
