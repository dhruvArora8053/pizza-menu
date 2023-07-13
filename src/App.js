import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  // function handleStepPrevious() {
  //   if (step > 1) setStep((s) => s - 1);
  // }

  // function handleStepNext() {
  //   setStep((s) => s + 1);
  // }

  function handleCountPrevious() {
    setCount((c) => c - step);
  }

  function handleCountNext() {
    setCount((c) => c + step);
  }

  const now = new Date();
  const day = now.getDate();
  const date = now.getDay();
  const month = now.getMonth();
  const year = now.getFullYear();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex" }}>
        <h3>Step:</h3>
        <input
          value={step}
          onChange={(e) => {
            setStep(Math.abs(e.target.value));
            console.log(e.target.value);
          }}
          type="range"
          min="0"
          max="10"
        />
        <div>{step}</div>
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
    </div>
  );
}
