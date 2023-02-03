import React from "react";
import Dashboard from "./components/Dashboard";

import {io} from 'socket.io-client';
// const socket = io('http://localhost:5000');
const socket = null



function App() {
  return (
    <div>
      <h2>Chat Application.</h2>
      <Dashboard socket={socket} />
    </div>
  );
}

export default App;
