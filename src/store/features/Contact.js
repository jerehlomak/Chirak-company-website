import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios' 

const initialState = {
    loading: false,
    contacts: [],
    error: ''
}

export const postContact = createAsyncThunk('contact/postContact', (contactData) => {
    return axios
        .post('https://api-chirak.herokuapp.com/api/v1/contact', contactData)
        .then((response) => response.data)
        .catch((error) => console.log(error.response.data.message))
})

export const contactSlice = createSlice({
    name: 'contact',
    initialState,
    extraReducers: builder => {
        builder.addCase(postContact.pending, state => {
            state.loading = true
        })
        builder.addCase(postContact.fulfilled, (state, action) => {
            state.loading = false
            state.contacts = action.payload
            state.error = ''
        })
        builder.addCase(postContact.rejected, (state, action) => {
            state.loading = false
            state.contacts = []
            state.error = action.error.message
        })
    }
})
