import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getAPIURL, getVendorID } from "../../services/helper";

const api_url = getAPIURL();
const vendor_id = getVendorID();

// Fetch widget reports
export const fetchDashboardReports = createAsyncThunk(
  "dashboard_reports",
  async (range: string) => {
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
  allRanges: [
    { key: "last_24_hours", label: "Last 24 Hours" },
    { key: "last_30_days", label: "Last 30 Days" },
    { key: "last_60_days", label: "Last 60 Days" },
    { key: "last_90_days", label: "Last 90 Days" },
  ],
  currentRange: "Last 24 Hours",
  isLoading: false,
};

const AppSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
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
      });
  },
});

export const { setLoading } = AppSlice.actions;
export default AppSlice.reducer;
