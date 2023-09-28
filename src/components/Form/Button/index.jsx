import "./style.css";
const Button = ({ content, handleButtonCallback, width}) => (
    <button style={{width: width}} onClick={handleButtonCallback}>{content}</button>
);

export default Button;