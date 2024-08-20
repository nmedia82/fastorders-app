import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getAPIURL, getVendorID } from "../../services/helper";

const api_url = getAPIURL();
const vendor_id = getVendorID();

// Fetch products from the API
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get(
      `${api_url}/products?vendor_id=${vendor_id}`
    );
    return response.data;
  }
);

// Fetch categories from the API
export const fetchCategories = createAsyncThunk(
  "products/fetchCategories",
  async () => {
    const response = await axios.get(
      `${api_url}/categories?vendor_id=${vendor_id}`
    );
    return response.data;
  }
);

// Add a new product
export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (productData) => {
    const response = await axios.post(`${api_url}/save-product`, {
      ...productData,
      vendor_id,
    });
    return response.data;
  }
);

// Add a new category
export const addCategory = createAsyncThunk(
  "products/addCategory",
  async (categoryData) => {
    const response = await axios.post(`${api_url}/add-category`, {
      ...categoryData,
      vendor_id,
    });
    return response.data;
  }
);

// Delete a product
export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (productId) => {
    const response = await axios.post(`${api_url}/delete-product`, {
      id: productId,
    });
    return response.data;
  }
);

// Delete a category
export const deleteCategory = createAsyncThunk(
  "products/deleteCategory",
  async (categoryId) => {
    const response = await axios.delete(
      `${api_url}/delete-category/${categoryId}?vendor_id=${vendor_id}`
    );
    return response.data;
  }
);

// Update a product
export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async ({ productId, updatedData }) => {
    const response = await axios.put(`${api_url}/update-product/${productId}`, {
      ...updatedData,
      vendor_id,
    });
    return response.data;
  }
);

// Update a category
export const updateCategory = createAsyncThunk(
  "products/updateCategory",
  async ({ categoryId, updatedData }) => {
    const response = await axios.put(
      `${api_url}/update-category/${categoryId}`,
      {
        ...updatedData,
        vendor_id,
      }
    );
    return response.data;
  }
);

const initialState = {
  products: [],
  categories: [],
  isLoading: false,
};

const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle fetch products
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload.data;
        state.isLoading = false;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.isLoading = false;
      })
      // Handle fetch categories
      .addCase(fetchCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload.data;
        state.isLoading = false;
      })
      .addCase(fetchCategories.rejected, (state) => {
        state.isLoading = false;
      })
      // Handle add product
      .addCase(addProduct.fulfilled, (state, action) => {
        state.products.push(action.payload.data); // Add the new product to the state
      })
      // Handle add category
      .addCase(addCategory.fulfilled, (state, action) => {
        state.categories.push(action.payload.data); // Add the new category to the state
      })
      // Handle delete product
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter(
          (product) => product.id !== action.meta.arg
        ); // Remove the deleted product from the state
      })
      // Handle delete category
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.categories = state.categories.filter(
          (category) => category.id !== action.meta.arg
        ); // Remove the deleted category from the state
      })
      // Handle update product
      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.products.findIndex(
          (product) => product.id === action.meta.arg.productId
        );
        if (index !== -1) {
          state.products[index] = action.payload.data; // Update the product in the state
        }
      })
      // Handle update category
      .addCase(updateCategory.fulfilled, (state, action) => {
        const index = state.categories.findIndex(
          (category) => category.id === action.meta.arg.categoryId
        );
        if (index !== -1) {
          state.categories[index] = action.payload.data; // Update the category in the state
        }
      });
  },
});

export const { setProducts, setCategories, setLoading } = ProductsSlice.actions;
export default ProductsSlice.reducer;
