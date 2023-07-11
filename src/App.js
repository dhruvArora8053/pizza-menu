import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function handleStepPrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleStepNext() {
    setStep((s) => s + 1);
  }

  function handleCountPrevious() {
    setCount((c) => c - step);
  }

  function handleCountNext() {
    setCount((c) => step + c);
  }

  const now = new Date();
  const day = now.getDate();
  const date = now.getDay();
  const month = now.getMonth();
  const year = now.getFullYear();

  return (
    <>
      <div style={{ display: "flex" }}>
        <button onClick={handleStepPrevious}>-</button>
        <h3>Step: {step}</h3>
        <button onClick={handleStepNext}>+</button>
      </div>

      <div style={{ display: "flex" }}>
        <button onClick={handleCountPrevious}>-</button>
        <h3>Count: {count}</h3>
        <button onClick={handleCountNext}>+</button>
      </div>

      {count > 0 ? (
        <p>{count} days from today is Wed Jul 21 2027</p>
      ) : (
        <p>{Math.abs(count)} days ago was Tue Jun 15 2027</p>
      )}
    </>
  );
}
