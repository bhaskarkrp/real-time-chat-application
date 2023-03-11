import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { get, post } from "../../../api/baseURL";

const initialState = {
  data: [],
  isFetching: false,
};

// Action
export const fetchMessages = createAsyncThunk(
  "fetchMessages",
  async ({ roomId }) => {
    const response = await get("/messages", { roomId });
    return response;
  }
);

export const createMessage = createAsyncThunk(
  "createMessage",
  async (payload) => {
    const response = await post("/message", payload);
    return response;
  }
);

export const messageSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    addMessage: (state, action) => {
      // add the message coming from server.
      const isAlreadyExists = state.data.find(
        (message) => message._id === action.payload._id
      );
      console.log({ isAlreadyExists, message: action.payload });
      if (!isAlreadyExists && action.payload.room_id == state.data[0].room_id) {
        state.data = [...state.data, action.payload];
        console.log({ state });
      }
    },
  },
  extraReducers: (builder) => {
    // fetch messages
    builder.addCase(fetchMessages.pending, (state, action) => {
      console.log("fetchMessages in state");
      state.isFetching = true;
    });
    builder.addCase(fetchMessages.fulfilled, (state, action) => {
      console.log("fetchMessages completed");
      state.isFetching = false;
      state.data = action.payload.data;
    });
    builder.addCase(fetchMessages.rejected, (state, action) => {
      console.log("fetchMessages failed", action.error.message);
      state.isFetching = false;
    });

    // create message
    builder.addCase(createMessage.pending, (state, action) => {
      console.log("createMessage in state");
    });
    builder.addCase(createMessage.fulfilled, (state, action) => {
      console.log("createMessage completed");
      state.isFetching = false;
      //   state.data = [...state.data, action.payload.data];
    });
    builder.addCase(createMessage.rejected, (state, action) => {
      console.log("createMessage failed", action.error.message);
    });
  },
});

export const { addMessage } = messageSlice.actions;
export default messageSlice.reducer;
