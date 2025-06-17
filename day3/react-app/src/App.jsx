import React, { useEffect, useState } from "react";

const App = () => {
  let [count, setCount] = useState( 
    JSON.parse(localStorage.getItem("count")) || 0);
    
      useEffect(() => {
    localStorage.setItem("local", JSON.stringify(count));
  }, [count]);
  return(
    <>
      <h1>Count:{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        inc
      </button>
      <button
        disabled={count == 0}
        onClick={() => {
          setCount(count - 1);
        }}
      >
        dec
      </button>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  )
    }

export default App;
