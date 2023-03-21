import { configureStore } from '@reduxjs/toolkit'
import { contactSlice } from './features/Contact'
import { subscriptionSlice } from './features/Subscription'

export const store = configureStore({
    reducer: {
        contact: contactSlice.reducer,
        sub: subscriptionSlice.reducer,
    }
})