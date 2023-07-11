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
    setCount((c) => step - c);
  }

  function handleCountNext() {
    setCount((c) => step + c);
  }

  return (
    <>
      <div style={{ display: "flex" }}>
        <button>-</button>
        <h3>Step: {step}</h3>
        <button>+</button>
      </div>

      <div style={{ display: "flex" }}>
        <button>-</button>
        <h3>Count: {count}</h3>
        <button>+</button>
      </div>

      <p>30 days from today is Wed Jul 21 2027</p>
    </>
  );
}
