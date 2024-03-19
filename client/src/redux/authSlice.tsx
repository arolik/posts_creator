import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import instance from "../axios/instance";
import { IUser, IUserState } from "../interfaces/common";

export const registerUserThunk = createAsyncThunk<IUser, {username: string, password: string}, {rejectValue: string}> (
    'auth/registerUserThunk',
    async function ({username, password}, {rejectWithValue}){
        try {
            const response = await instance.post('/auth/register', {
                username,
                password
            })
            if(response.data.token){
                window.localStorage.setItem('token', response.data.token)
            }
            const data = response.data;
            return data;
           
        } catch (error) {
            return rejectWithValue('opps')
        }
    }
);

export const loginUserThunk = createAsyncThunk<IUser, {username: string, password: string}, {rejectValue: string}> (
    'auth/loginUserThunk',
    async function ({username, password}, {rejectWithValue}) {
        try {
            const response = await instance.post('/auth/login', {
                username,
                password
            })
            if(response.data.token){
                window.localStorage.setItem('token', response.data.token)
            }
            const data = response.data;
            return data;
        } catch (error) {
            return rejectWithValue('can not login, try again')
        }
    }
);

export const getMe = createAsyncThunk<IUser, undefined, {rejectValue: string}> (
    'auth/getMe',
    async function (undefined, {rejectWithValue}) {
        try {
            const response = await instance.get('/auth/me');
            const data = response.data;
            return data;
        } catch (error) {
            return rejectWithValue('can not get data about user')
        }
    }
)

const initialState: IUserState = {
    username: '',
    token: null,
    status: null,
    loading: false
}

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        logout (state){
            state.username = '';
            state.status = '';
            state.token = '';
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(registerUserThunk.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(registerUserThunk.fulfilled, (state, action) => {
            console.log(action.payload);
            state.username = action.payload.user.username;
            state.token = action.payload.token;
            state.status = action.payload.message;
            state.loading = false;
        })
        .addCase(registerUserThunk.rejected, (state, action) => {
            console.log(action.payload)
        })
        .addCase(loginUserThunk.pending, (state, action) => {

        })
        .addCase(loginUserThunk.fulfilled, (state, action) => {
            state.username = action.payload.user.username;
            state.token = action.payload.token;
            state.status = action.payload.message;
            state.loading = false;
        })
        .addCase(loginUserThunk.rejected, (state, action) => {

        })
        .addCase(getMe.pending, (state, action) => {

        })
        .addCase(getMe.fulfilled, (state, action) => {
            state.username = action.payload.user.username;
            state.token = action.payload.token;
            state.status = action.payload.message;
            state.loading = false;
        })
        .addCase(getMe.rejected, (state, action) => {
            console.log(action.payload)
        })
    }
})

export const { logout } = authSlice.actions;

export default authSlice.reducer;