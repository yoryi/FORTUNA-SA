import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import endpoints from '../../services/endpoints';

const initialState = {
  list: [],
  status: null,
};

export const fetchCategory = createAsyncThunk('listCategory', async () => {
  const {listCategory} = endpoints;
  const response = await listCategory();
  return response.data;
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
      state.list = action.payload;
    },
    [fetchCategory.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});
export default ListCategory.reducer;
