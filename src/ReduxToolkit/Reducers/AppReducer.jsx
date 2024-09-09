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

// Fetch activities by vendor
export const fetchActivityLog = createAsyncThunk(
  "fetchActivityLog",
  async () => {
    const { data: activities } = await axios.get(
      `${api_url}/activities/${vendor_id}`
    );
    return activities.data;
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
  vendorCustomers: [],
  registers: [],
  discounts: [],
  paymentTypes: [],
  expenseTypes: [],
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
export const addEmployee = createAsyncThunk(
  "products/addEmployee",
  async (data) => {
    const response = await axios.post(`${api_url}/employees`, data);
    return response.data;
  }
);
export const fetchCustomers = createAsyncThunk(
  "app/fetchCustomers",
  async () => {
    const response = await axios.get(`${api_url}/customers/${vendor_id}`);
    return response.data;
  }
);
// Delete a category
export const deleteCustomer = createAsyncThunk(
  "app/deleteCustomer",
  async (id) => {
    const response = await axios.delete(`${api_url}/customers/${id}`);
    return response.data;
  }
);

export const fetchPaymentTypes = createAsyncThunk(
  "products/fetchPaymentTypes",
  async () => {
    const response = await axios.get(`${api_url}/payment-types`);
    return response.data;
  }
);
export const addPaymentType = createAsyncThunk(
  "products/addPaymentType",
  async (data) => {
    const response = await axios.post(`${api_url}/payment-types`, data);
    return response.data;
  }
);
export const updatePaymentType = createAsyncThunk(
  "products/updatePaymentType",
  async (data) => {
    const response = await axios.put(
      `${api_url}/payment-types/${data.id}`,
      data
    );
    return response.data;
  }
);
export const deletePaymentType = createAsyncThunk(
  "products/deletePaymentType",
  async (id) => {
    const response = await axios.delete(`${api_url}/payment-types/${id}`);
    return response.data;
  }
);
export const fetchExpenseTypes = createAsyncThunk(
  "products/fetchExpenseTypes",
  async () => {
    const response = await axios.get(`${api_url}/expense-types`);
    return response.data;
  }
);

export const addExpenseType = createAsyncThunk(
  "products/addExpenseType",
  async (data) => {
    const response = await axios.post(`${api_url}/expense-types`, data);
    return response.data;
  }
);

export const updateExpenseType = createAsyncThunk(
  "products/updateExpenseType",
  async (data) => {
    const response = await axios.put(
      `${api_url}/expense-types/${data.id}`,
      data
    );
    return response.data;
  }
);

export const deleteExpenseType = createAsyncThunk(
  "products/deleteExpenseType",
  async (id) => {
    const response = await axios.delete(`${api_url}/expense-types/${id}`);
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
    addNewCustomer: (state, action) => {
      state.vendorCustomers = [action.payload, ...state.vendorCustomers];
      state.isLoading = false;
    },
    updateCustomer: (state, action) => {
      const index = state.vendorCustomers.findIndex(
        (c) => c.id === parseInt(action.payload.id)
      );
      if (index !== -1) {
        state.vendorCustomers[index] = action.payload;
      }
      state.isLoading = false;
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
      .addCase(fetchActivityLog.fulfilled, (state, action) => {
        state.allActivities = action.payload;
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
      // add Employee
      .addCase(addEmployee.fulfilled, (state, action) => {
        state.vendorCustomers.push(action.payload); // Add the new product to the state
      })
      // handle fetch employees
      .addCase(fetchCustomers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCustomers.fulfilled, (state, action) => {
        state.vendorCustomers = action.payload.data;
        state.isLoading = false;
      })
      .addCase(fetchCustomers.rejected, (state) => {
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
      })
      // Handle delete category
      .addCase(deleteCustomer.fulfilled, (state, action) => {
        state.vendorCustomers = state.vendorCustomers.filter(
          (customer) => customer.id !== action.meta.arg
        ); // Remove the deleted customer from the state
      })
      // handle fetch paymentTypes
      .addCase(fetchPaymentTypes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPaymentTypes.fulfilled, (state, action) => {
        state.paymentTypes = action.payload.data;
        state.isLoading = false;
      })
      .addCase(fetchPaymentTypes.rejected, (state) => {
        state.isLoading = false;
      })
      // add discount
      .addCase(addPaymentType.fulfilled, (state, action) => {
        state.paymentTypes.push(action.payload.data);
      })
      .addCase(updatePaymentType.fulfilled, (state, action) => {
        const index = state.paymentTypes.findIndex(
          (payment) => payment.id === action.payload.data.id
        );
        if (index !== -1) {
          state.paymentTypes[index] = action.payload.data; // Update the product in the state
        }
      })
      .addCase(deletePaymentType.fulfilled, (state, action) => {
        state.paymentTypes = state.paymentTypes.filter(
          (paymentType) => paymentType.id !== action.meta.arg
        );
      })
      // handle fetch expenseTypes
      .addCase(fetchExpenseTypes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchExpenseTypes.fulfilled, (state, action) => {
        state.expenseTypes = action.payload.data;
        state.isLoading = false;
      })
      .addCase(fetchExpenseTypes.rejected, (state) => {
        state.isLoading = false;
      })
      // add expense type
      .addCase(addExpenseType.fulfilled, (state, action) => {
        state.expenseTypes.push(action.payload.data);
      })
      .addCase(updateExpenseType.fulfilled, (state, action) => {
        const index = state.expenseTypes.findIndex(
          (expense) => expense.id === action.payload.data.id
        );
        if (index !== -1) {
          state.expenseTypes[index] = action.payload.data;
        }
      })
      .addCase(deleteExpenseType.fulfilled, (state, action) => {
        state.expenseTypes = state.expenseTypes.filter(
          (expenseType) => expenseType.id !== action.meta.arg
        );
      });
  },
});

export const {
  setLoading,
  setBackgroundSyncing,
  addNewCustomer,
  updateCustomer,
} = AppSlice.actions;
export default AppSlice.reducer;
