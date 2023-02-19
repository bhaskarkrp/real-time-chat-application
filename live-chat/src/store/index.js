import { configureStore } from '@reduxjs/toolkit';
import messageReducers from './features/message/messageSlice'
import userReducers from './features/user/userSlice';
import roomReducers from './features/room/roomSlice'

export const store = configureStore({
    reducer: {
        message: messageReducers,
        user: userReducers,
        room: roomReducers
    }
})