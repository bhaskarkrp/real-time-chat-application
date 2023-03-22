import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    selectedRoom: {},
    isFetching: false,
}

export const roomSlice = createSlice({
    name: 'room',
    initialState,
    reducers: {
        selectRoom: (state, action) => {
            if (state.selectedRoom._id != action.payload._id)
                state.selectedRoom = action.payload;
        },
        getRoomState: (state) => {
            return state;
        }
    },
})

export const { selectRoom } = roomSlice.actions;
export default roomSlice.reducer;