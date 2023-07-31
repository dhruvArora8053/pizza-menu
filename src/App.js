import { useState, usestate } from "react";

const messages = ["Learn React", "Apply for jobs", "Invest your new income"];

export default function App() {
  const [step, setStep] = usestate(1);
  const [isOpen, setIsOpen] = usestate(true);

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  const [test, setTest] = useState({ name: "Jonas" });

  function handlenext() {
    if (step < 3) {
      setStep((s) => s + 1);
    }
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
    </>

    {isOpen && (
        <div className="steps">
        <div className="numbers">
        <div className={step>=1 ? 'active': ''}>1</div>
        </div>
        </div>
    )}
  );
}
