import React from "react";
import "./assets/css/dashboard.scss";
import Index from "./routes/Index";
import { connectSocket } from "./helpers/socket/socket";

function App() {
  connectSocket();

  return (
    <div className="app">
      <Index />
    </div>
  );
}

export default App;
