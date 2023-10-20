import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import endpoints from '../../services/endpoints';

const initialState = {
  listCategory: [],
  status: null,
};

export const fetchCategory = createAsyncThunk('listCategory', async () => {
  const {listCategory} = endpoints;
  const response = await listCategory();
  return response;
});

export const ListCategory = createSlice({
  name: 'listCategory',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCategory.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchCategory.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.listCategory = action.listCategory;
    },
    [fetchCategory.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});
export default ListCategory.reducer;
