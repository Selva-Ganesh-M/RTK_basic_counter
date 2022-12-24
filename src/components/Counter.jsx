import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incByValue,
} from "../features/counter/counterSlice";

const Counter = () => {
  const [input, setInput] = useState("");
  const count = useSelector((state) => {
    return state.counter.count;
  });
  console.log("count is:", count);
  const dispatch = useDispatch();
  const handleReset = () => {
    setInput("");
    dispatch(reset());
  };
  return (
    <>
      <section>
        <p>{count}</p>
        <button onClick={() => dispatch(increment())}>Inc</button>
        <button onClick={() => dispatch(decrement())}>Dec</button>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={() => dispatch(incByValue(Number(input)))}>
          Inc By Value
        </button>
        <button onClick={handleReset}>Reset</button>
      </section>
    </>
  );
};

export default Counter;
