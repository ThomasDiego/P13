import "./style.css";
export const InputText = ({ label, name, handleCallback, type }) => {
    return (
        <div className="InputTextWithLabel">
            <label htmlFor={name}>{label}</label>
            <input type={type} name={name} onChange={event => handleCallback({name: name, value: event.target.value})} />
        </div>
    );
}