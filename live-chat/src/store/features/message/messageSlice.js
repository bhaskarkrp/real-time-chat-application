import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    data: [],
    isFetching: false,
}

// Action
export const fetchMessages = createAsyncThunk('fetchMessages', async ({ roomId, userId }) => {
    // console.log('in action', roomId, userId);
    const response = await axios.get('http://localhost:5000/api/messages', {
        params: { roomId, userId }
    })
    return await response.data;
});

export const createMessage = createAsyncThunk('createMessage', async (payload) => {
    console.log(payload);
    const response = await axios.post('http://localhost:5000/api/message', payload)
    console.log(response.data);
    return await response.data;
})

export const messageSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        // fetch messages
        builder.addCase(fetchMessages.pending, (state, action) => {
            console.log('fetchMessages in state');
            state.isFetching = true;
        })
        builder.addCase(fetchMessages.fulfilled, (state, action) => {
            console.log('fetchMessages completed');
            state.isFetching = false;
            state.data = action.payload.data;
        })
        builder.addCase(fetchMessages.rejected, (state, action) => {
            console.log('fetchMessages failed', action.error.message);
            state.isFetching = false;
        })

        // create message
        builder.addCase(createMessage.pending, (state, action) => {
            console.log('createMessage in state');
        })
        builder.addCase(createMessage.fulfilled, (state, action) => {
            console.log('createMessage completed');
            state.isFetching = false;
            state.data = [...state.data, action.payload.data];
        })
        builder.addCase(createMessage.rejected, (state, action) => {
            console.log('createMessage failed', action.error.message);
        })
    }
});

export default messageSlice.reducer;