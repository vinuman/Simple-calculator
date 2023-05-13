import Button from "./Button";
import { useState } from "react";

const Main = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operand, setOperand] = useState(null);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(false);

  const handleNum1 = (e) => {
    console.log(e.target.value);
    setNum1(e.target.value);
    setError(false);
  };

  const handleNum2 = (e) => {
    console.log(e.target.value);
    setNum2(e.target.value);
    setError(false);
  };

  const handleOperand = (e) => {
    setOperand(e.target.textContent);
    setError(false);
  };

  const handleReset = () => {
    setNum1("");
    setNum2("");
    setOperand(null);
    setError(false);
    setResult(null);
  };

  const calculate = () => {
    if (num1 === "" || num2 === "") {
      setError(true);
      return;
    }

    let res;
    switch (operand) {
      case "+":
        res = num1 + num2;
        break;
      case "-":
        res = num1 - num2;
        break;
      case "*":
        res = num1 * num2;
        break;
      case "/":
        res = num1 / num2;
        break;
      default:
        setError(true);
        return;
    }
    setResult(res);
  };

  return (
    <main>
      <h1>React Calculator</h1>
      <div className="inputs">
        <label>Num1</label>
        <input onChange={handleNum1} type="number" placeholder="Num1"></input>
        <label>Num2</label>
        <input onChange={handleNum2} type="number" placeholder="Num2"></input>
      </div>
      <Button text="+" onClick={handleOperand} />
      <Button text="-" onClick={handleOperand} />
      <Button text="*" onClick={handleOperand} />
      <Button text="/" onClick={handleOperand} />
      <Button text="reset" onClick={handleReset} />
      {result !== null && !error && (
        <p className="result">Your result is {result}</p>
      )}
      {error && (
        <p className="error">
          Error: Please enter a valid number for Num1 and Num2 and select an
          operand
        </p>
      )}
      {result !== null && !error && (
        <p className="success">Success : Your result is shown above!</p>
      )}
    </main>
  );
};

export default Main;
