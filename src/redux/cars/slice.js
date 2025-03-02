import { createSlice } from '@reduxjs/toolkit';
import { fetchBrands, fetchCars } from './operations';

const initialState = {
  cars: [],
  filters: {
    brand: null,
    price: null,
    mileage: { min: '', max: '' },
  },
  brands: [],
  totalCars: null,
  isFavourite: false,
  error: null,
  loading: false,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    setBrand: (state, action) => {
      state.filters.brand = action.payload; // Зберігаємо вибраний бренд
    },
    setPrice: (state, action) => {
      state.filters.price = action.payload; // Зберігаємо вибрану ціну
    },
  },
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
        state.cars = action.payload;
        state.totalCars = action.payload.totalCars;
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

export const { setBrand, setPrice, setMileageFilter } = carsSlice.actions;

export default carsSlice.reducer;
