import { store } from "../../store";
import { io } from "socket.io-client";
import { addMessage } from "../../store/features/message/messageSlice";
import { addRoom } from "../../store/features/user/userSlice";
const socketURI = io("localhost:5000");

export const connectSocket = () => {
  socketURI.on("connect", () => {
    console.log("Client connected - " + socketURI.id);

    socketURI.on("message_created", (message) => {
      //   console.log({ message });
      store.dispatch(addMessage(message));
    });

    socketURI.on('room_created', (room) => {
      console.log({ room })
      store.dispatch(addRoom(room));
    })

    socketURI.on('room_added', (room) => {
      console.log(`room added - `, room);
      store.dispatch(addRoom(room));
    })
  });
};
