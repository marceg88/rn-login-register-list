import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { FormData } from "../types/types";
import { RootState } from "./store";
import { responseData } from "../util/functions/functions";

type UsersState = {
    list: []
    token: string
    emailEncypted: string | null
    status: number |null
    message: string |null
    error: string | null
    data: FormData
}

const initialState = {
    list: [],
    token: "",
    emailEncypted: null,
    data: {},
    message: null,
    error: null,
    status: null,
} as UsersState

export const signIn = createAsyncThunk(
    "users/signIn",
    async ({ email, password }: { email: string; password: string }) => {
        try {
            const response = await axios.post(`https://reqres.in/api/login`, {
                email,
                password
            })
            const data = await responseData(email, response)
            return data
        } catch (error) {
            const errorMessage = 'There was an error'
            throw new Error(errorMessage)
        }
    }
)
export const Register = createAsyncThunk(
    "users/resgister",
    async ({ email, password }: { email: string; password: string }) => {
        try {
            const response = await axios.post(`https://reqres.in/api/users`, {
                email,
                password
            })
            const user = await responseData(email, response)
            return user
        } catch (error) {
            const errorMessage = 'There was an error'
            throw new Error(errorMessage)
        }
    }
)
export const getInfo = createAsyncThunk(
    "users/getInfo",
    async ({token, page}: {token: string, page: number}) => {
        try {
            const response = await axios.get(`https://reqres.in/api/${token}?page=${page}`)
            const list = response.data
            return list
        } catch (error) {
            const errorMessage = 'There was an error'
            throw new Error(errorMessage)
        }
    }
)
export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logout(state) {
            state.data;
            window.localStorage.clear();
        },     
    },
    extraReducers: (builder) => {
        builder.addCase(signIn.fulfilled, (state, {payload}) => {
            state.data = payload.user
            state.status = payload.status
            state.token = payload.user.token
            state.error = null
        })
        .addCase(getInfo.fulfilled, (state, {payload}) => {
            state.list = payload.data
            state.status = payload.status
            state.error = null
        })
        
    }
})
export const selectStatus = (state: RootState) => state.user.status
export const selectUser = (state: RootState) => state.user.data
export const selectToken = (state: RootState) => state.user.token
export const selectList = (state: RootState) => state.user.list
export default userSlice.reducer

