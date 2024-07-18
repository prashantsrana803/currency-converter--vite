import React, { useState } from "react";
import "./App.css";
import DarkMode from "./components/DarkMode";
import CurrencyConvertor from "./components/currency-convertor";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="container">
          <CurrencyConvertor />
        </div>
        <DarkMode />
      </div>
    </>
  );
}

export default App;
