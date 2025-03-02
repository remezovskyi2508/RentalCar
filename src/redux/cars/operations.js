import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const authInstance = axios.create({
  baseURL: 'https://car-rental-api.goit.global',
});

export const fetchBrands = createAsyncThunk('brands', async (_, thunkAPI) => {
  try {
    const { data } = await authInstance.get('/brands');
    return data;
  } catch (error) {
    console.error('Error response: ', error.response);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchCars = createAsyncThunk('cars', async (params, thunkAPI) => {
  try {
    const { brand, rentalPrice, minMileage, maxMileage } = params;
    const { data } = await authInstance.get('/cars', {
      params: {
        brand,
        rentalPrice,
        minMileage,
        maxMileage,
        limit: 10,
        page: 1,
      },
    });
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error response: ', error.response);
    return thunkAPI.rejectWithValue(error.message);
  }
});

// export const login = createAsyncThunk(
//   'auth/login',
//   async (formData, thunkAPI) => {
//     // {
//     //     //     "name": "Adrian Cross",
//     //     //     "email": "across@mail.com",
//     // }
//     try {
//       const { data } = await authInstance.post('/users/login', formData);
//       console.log('Data: ', data);
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
//   try {
//     const { data } = await authInstance.post('/users/logout');

//     return data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

// //add functio to autoLogin
// export const refreshUser = createAsyncThunk(
//   'auth/refresh',
//   async (_, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const token = state.auth.token;

//     if (!token) {
//       return thunkAPI.rejectWithValue('No token providen to refresh user data');
//     }

//     try {
//       const { data } = await authInstance.get('/users/current');
//       console.log('Data: ', data);
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
