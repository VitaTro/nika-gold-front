export const applyFilters = createAsyncThunk(
  "filters/apply",
  async (filters, thunkAPI) => {
    try {
      const { data } = await axios.get(`/api/products`, {
        params: filters, // Передача фільтрів у запит
      });
      return data.products || [];
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
