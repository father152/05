import React, { useState } from "react";
import Pict from "./Image/2.jpg";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <div>
        <p>You push {count} </p>
        <button onClick={() => setCount(count + 1)}>
          PUSH ME <br></br>(+)
        </button>
        <button onClick={() => setCount(count - 1)}>
          PUSH ME <br></br>(-)
        </button>
      </div>
      <div className="image">
        <img src={Pict}></img>
      </div>
    </div>
  );
}

export default Counter;
