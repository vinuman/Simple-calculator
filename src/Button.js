const Button = ({ text, handleOperand }) => {
  return <button onClick={handleOperand}>{text}</button>;
};

export default Button;
