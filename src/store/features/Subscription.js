import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios' 

const initialState = {
    loading: false,
    subscriptions: [],
    error: ''
}

export const postSubscription = createAsyncThunk('contact/subscription', (subData) => {
    return axios
        .post('https://api-chirak.herokuapp.com/api/v1/contact/newsletter', subData)
        .then((response) => response.data)
        .catch((error) => console.log(error.response.data.message))
})

export const subscriptionSlice = createSlice({
    name: 'subscription',
    initialState,
    extraReducers: builder => {
        builder.addCase(postSubscription.pending, state => {
            state.loading = true
        })
        builder.addCase(postSubscription.fulfilled, (state, action) => {
            state.loading = false
            state.subscriptions = action.payload
            state.error = ''
        })
        builder.addCase(postSubscription.rejected, (state, action) => {
            state.loading = false
            state.subscriptions = []
            state.error = action.error.message
        })
    }
})
