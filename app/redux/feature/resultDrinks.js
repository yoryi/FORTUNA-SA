import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import endpoints from '../../services/endpoints';
const initialState = {
  drinks: [],
  status: null,
};

export const fetchResultDrinks = createAsyncThunk(
  'resultDrinks',
  async payload => {
    const {searchCoctel} = endpoints;
    const response = await searchCoctel(payload);
    return response.data;
  },
);

export const ListDrinks = createSlice({
  name: 'resultDrinks',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchResultDrinks.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchResultDrinks.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.drinks = action.payload;
    },
    [fetchResultDrinks.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});
export default ListDrinks.reducer;
