import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from '../../api/userApi';

export const register = createAsyncThunk('user/register', async (payload) => {
    // call Api to register
    const data = await userApi.register(payload);

    // save data to local storage
    localStorage.setItem('access_token', data.jwt);
    localStorage.setItem('user', JSON.stringify(data.jwt));

    // return user data
    return data.user;
});

export const login = createAsyncThunk('user/login', async (payload) => {
    // call Api to login
    const data = await userApi.login(payload);

    // save data to local storage
    localStorage.setItem('access_token', data.jwt);
    localStorage.setItem('user', JSON.stringify(data.jwt));

    // return user data
    return data.user;
});

const userSlice = createSlice({
    name: 'user',
    initialState: {
        current: {},
        settings: {},
    },
    reducers: {},
    extraReducers: {
        [register.fulfilled]: (state, action) => {
            state.current = action.payload;
        },
    },

    extraReducers: {
        [login.fulfilled]: (state, action) => {
            state.current = action.payload;
        },
    },
});

const { reducer } = userSlice;
export default reducer; // default export
