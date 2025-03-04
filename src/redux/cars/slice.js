import { createSlice } from '@reduxjs/toolkit';
import { fetchBrands, fetchCars } from './operations';

const initialState = {
  cars: [],
  brands: [],
  totalCars: null,
  totalPages: null,
  page: null,
  isFavourite: false,
  error: null,
  loading: false,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchBrands.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBrands.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.brands = action.payload;
      })
      .addCase(fetchBrands.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchCars.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.totalCars = action.payload.totalCars;
        state.totalPages = action.payload.totalPages;
        state.page = Number(action.payload.page);
        state.cars = action.payload;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    // .addCase(logout.pending, state => {
    //   state.loading = true;
    //   state.isRefreshing = true;
    //   state.error = null;
    // })
    // .addCase(logout.fulfilled, () => {
    //   return initialState;
    // })
    // .addCase(logout.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload;
    // })
    // .addCase(refreshUser.pending, state => {
    //   state.isRefreshing = true;
    //   state.loading = true;
    //   state.error = null;
    // })
    // .addCase(refreshUser.fulfilled, (state, action) => {
    //   state.isRefreshing = false;
    //   state.isLoggedIn = true;
    //   state.loading = false;
    //   state.user = action.payload;
    // })
    // .addCase(refreshUser.rejected, (state, action) => {
    //   state.isRefreshing = false;
    //   state.loading = false;
    //   state.error = action.payload;
    // });
  },
});

export default carsSlice.reducer;
