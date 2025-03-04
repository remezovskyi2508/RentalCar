// Auth selectors
export const selectBrands = state => state.cars.brands;
export const selectCars = state => state.cars.cars;
export const selectTotalCars = state => state.cars.totalCars;
export const selectTotalPages = state => state.cars.totalPages;
export const selectCurrentPage = state => state.cars.page;

// export const selectUser = state => state.auth.user;
// export const selectToken = state => state.auth.token;
// export const selectError = state => state.auth.error;
// export const selectLoading = state => state.auth.loading;
// export const selectIsLoggedIn = state => state.auth.isLoggedIn;
// export const selectIsRefreshing = state => state.auth.isRefreshing;
