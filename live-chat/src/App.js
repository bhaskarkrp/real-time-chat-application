import React from "react";
import Dashboard from "./components/Dashboard";
import "./assets/css/dashboard.scss"

import {io} from 'socket.io-client';
// const socket = io('http://localhost:5000');
const socket = null



function App() {
  return (
    <div className="app">
      <Dashboard socket={socket} />
    </div>
  );
}

export default App;
