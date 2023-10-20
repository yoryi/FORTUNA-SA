import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import endpoints from '../../services/endpoints';
const initialState = {
  category: [],
  status: null,
};

export const fetchResultCategory = createAsyncThunk(
  'resultCategory',
  async payload => {
    const {resultCategory} = endpoints;
    const response = await resultCategory(payload || '');
    return response.data;
  },
);

export const ListCategory = createSlice({
  name: 'resultCategory',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchResultCategory.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchResultCategory.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.category = action.payload;
    },
    [fetchResultCategory.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});
export default ListCategory.reducer;
