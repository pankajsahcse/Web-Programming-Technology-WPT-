import React from "react";
import { useState } from "react";
import "./App.css";
import MyHeader from "./components/MyHeader";
import MyFooter from "./components/MyFooter";

function App() {
  // state Varible
  const [count, setCount] = useState(0);

  // Increment Function

  const increment = () => {
    // setCount (count + 1);
    setCount((prev) => prev + 1);
  };

  // Decrement function
  const decrement = () => {
    if (count != 0) {
      setCount(count - 1);
    }
  };

  // Reset function
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <MyHeader />

      <h2>Count {count} </h2>

      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={increment}>Increment</button>

      <MyFooter />
    </div>
  );
}

export default App;
