import Button from "./Button";
import { useState } from "react";

// define the Main component
const Main = () => {
  // Use state variables num1, num2, result, and error
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState(false);

  // define a function to handle changes in the Num1 input field
  const handleNum1 = (e) => {
    // update the value of num1 in state with the new input value
    setNum1(e.target.value);
  };

  // define a function to handle changes in the Num2 input field
  const handleNum2 = (e) => {
    // update the value of num2 in state with the new input value
    setNum2(e.target.value);
  };

  // define a function to handle clicks on the operand buttons
  const handleOperand = (op) => {
    // check if num1 is empty or not a number
    if (num1 == "" || isNaN(num1)) {
      // set the error state variable to true
      setError(true);
      return;
    }
    // check if num2 is empty or not a number
    if (num2 == "" || isNaN(num2)) {
      // set the error state variable to true
      setError(true);
      return;
    }

    if (num1 !== "" && num2 !== "" && !isNaN(num1)) {
      // if both num1 and num2 have valid values
      setError(false);
    }

    // convert num1 and num2 to a floating-point number
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    // declare a variable to hold the result of the operation
    let res;
    // determine which operand was clicked
    switch (op) {
      case "+":
        res = n1 + n2;
        break;
      case "-":
        res = n1 - n2;
        break;
      case "*":
        res = n1 * n2;
        break;
      case "/":
        res = n1 / n2;
        break;
      default:
        break;
    }
    // update the result state variable with the computed value
    setResult(res);
  };

  // render the main component
  return (
    <main>
      <h1>React Calculator</h1>
      <div className="inputs">
        <label>Num1</label>
        <input onChange={handleNum1} type="text" placeholder="Num1"></input>
        <label>Num2</label>
        <input onChange={handleNum2} type="text" placeholder="Num2"></input>
      </div>
      {/* Rendering the buttons for addition, subtraction,
      multiplication, and division. The handleOperand function is passed as a
      prop to each of the buttons to handle the arithmetic operation. */}
      <Button handleOperand={handleOperand} text="+" />
      <Button handleOperand={handleOperand} text="-" />
      <Button handleOperand={handleOperand} text="*" />
      <Button handleOperand={handleOperand} text="/" />
      {/* The following conditionally render a result message or an error
      message based on the state of result and error. . */}
      {result !== "" && error === false && (
        <p className="result">Your result is {result}</p>
      )}
      {error == true && (
        <p className="error">
          Error: Please enter a valid number for Num1 and Num2 and select an
          operand
        </p>
      )}
      {result !== "" && error === false && (
        <p className="success">Success : Your result is shown above!</p>
      )}
    </main>
  );
};

export default Main;
