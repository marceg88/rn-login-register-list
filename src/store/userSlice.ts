import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { FormData } from "../types/types";
import { RootState } from "./store";
import crypto from "crypto"

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
            const authorization = {
                token: response.headers['authorization']
            }
            const user = response.data
            const status = response.status
            const data = {
                email,
                user,
                authorization,
                status
            }
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
            const authorization = {
                token: response.headers['authorization']
            }
            const user = response.data
            const status = response.status
            const data = {
                email,
                user,
                authorization,
                status
            }
            return user
        } catch (error) {
            const errorMessage = 'There was an error'
            throw new Error(errorMessage)
        }
    }
)
export const getInfo = createAsyncThunk(
    "users/getInfo",
    async (token: string) => {
        try {
            const response = await axios.get(`https://reqres.in/api/${token}`)
            const list = response.data
            console.log("list", list)
            const status = response.status
            const data = {
                list,
                status
            }
            return data
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
            console.log("singInExist", payload)
            state.data = payload.user
            state.status = payload.status
            state.token = payload.user.token
            state.error = null
            // window.localStorage.setItem('token', payload.authorization.token)
        })
        .addCase(getInfo.fulfilled, (state, {payload}) => {
            console.log("getExist", payload.list)
            state.list = payload.list
            state.status = payload.status
            state.error = null
            // window.localStorage.setItem('token', payload.authorization.token)
        })
        
    }
})
export const selectStatus = (state: RootState) => state.user.status
export const selectUser = (state: RootState) => state.user.data
export const selectToken = (state: RootState) => state.user.token
export const selectList = (state: RootState) => state.user.list
export default userSlice.reducer

