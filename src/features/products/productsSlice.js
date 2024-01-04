import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (productsURL) => {
    const response = await fetch(productsURL);
    const { data } = await response.json()
    return data.products.edges;
  }
);

export default productsSlice.reducer;
