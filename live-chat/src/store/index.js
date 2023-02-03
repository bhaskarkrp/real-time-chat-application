import { configureStore } from '@reduxjs/toolkit';
import messageReducers from './features/message/messageSlice'

export const store = configureStore({
    reducer: {
        message: messageReducers
    }
})