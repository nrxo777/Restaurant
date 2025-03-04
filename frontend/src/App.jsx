import { useState } from "react";
import "./App.css";
import MainComponents from "./components/MainComponents";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainComponents />
      </BrowserRouter>
    </div>
  );
}

export default App;
