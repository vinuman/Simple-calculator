const Button = ({ text, handleOperand }) => {
  //The text prop is passed as argument for button click
  return <button onClick={() => handleOperand(text)}>{text}</button>;
};

export default Button;
