import React from "react";
import ReactDOM from "react-dom/client";
import { Game } from "@/Game";
import "styles/reset.css";
import "styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <h1>🪳 ENCROACHED 🪳</h1>
    <Game />
  </React.StrictMode>
);
