import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import instance from "../axios/instance";
import { UserI, UserStateI } from "../interfaces/common";

export const registerUserThunk = createAsyncThunk<UserI, {username: string, password: string}, {rejectValue: string}> (
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

export const loginUserThunk = createAsyncThunk<UserI, {username: string, password: string}, {rejectValue: string}> (
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
)

const initialState: UserStateI = {
    username: '',
    token: '',
    status: '',
    loading: false
}

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
        .addCase(registerUserThunk.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(registerUserThunk.fulfilled, (state, action) => {
            console.log(action.payload);
            state.loading = false;
        })
        .addCase(registerUserThunk.rejected, (state, action) => {

        })
        .addCase(loginUserThunk.pending, (state, action) => {

        })
        .addCase(loginUserThunk.fulfilled, (state, action) => {
            console.log(action.payload)
        })
        .addCase(loginUserThunk.rejected, (state, action) => {

        })
    }
})

export default authSlice.reducer;