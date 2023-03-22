import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { get } from "../../../api/baseURL";

const initialState = {
    data: [],
    isFetching: false,
}

//Action
export const fetchUser = createAsyncThunk('fetchUser', async ({ userId }) => {
    const response = await get('/rooms', { userId })
    return response;
})

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addRoom: (state, action) => {
            // coming from server - socket
            const isAlreadyExists = state.data?.room?.find(room => room._id === action.payload._id);
            
            if (!isAlreadyExists && action.payload.admin == state.data._id) {
                console.log('ok')
                state.data.room = [...state.data?.room, action.payload];
            }
        }
    },
    extraReducers: (builder) => {
        //fetch user
        builder.addCase(fetchUser.pending, (state, action) => {
            console.log('fetchUser in state');
            state.isFetching = true;
        })
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            console.log('fetchUser completed');
            state.isFetching = false;
            state.data = action.payload.data;
        })
        builder.addCase(fetchUser.rejected, (state, action) => {
            console.log('fetchUser failed', action.error.message);
            state.isFetching = false;
        })
    }
})

export const { addRoom } = userSlice.actions;
export default userSlice.reducer;