import React from "react";
import Dashboard from "./components/Dashboard";
import "./assets/css/dashboard.scss"

import { io } from 'socket.io-client';
import Index from "./routes/Index";
// const socket = io('http://localhost:5000');
const socket = null



function App() {
  return (
    <div className="app">
      <Index />
      {/* <Dashboard socket={socket} /> */}
    </div>
  );
}

export default App;
