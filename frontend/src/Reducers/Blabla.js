import { createSlice } from '@reduxjs/toolkit'


export const blabla = createSlice({
    name: 'blabla',
    initialState: {
        userId: null,
        username: null,
        accessToken: null,
        error: null
    },
    reducers: {
        setUserId: (store, action) => {
            store.userId = action.payload
        },
        setUsername: (store, action) => {
            store.username = action.payload
        },
        setAccessToken: (store, action) => {
            store.accessToken = action.payload
        },
        setError: (store, action) => {
            store.error = action.payload
        },
    },
})