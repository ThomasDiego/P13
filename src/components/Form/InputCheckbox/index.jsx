import "./style.css";
import {useState} from "react";
export const CheckboxInput = ({ label, name, handleCheckboxCallback}) => {
    return (
        <div className="InputCheckboxWithLabel">
            <input type="checkbox" name={name} onChange={event => handleCheckboxCallback({name: name, value: event.target.checked})}/>
            <label htmlFor={name}>{label}</label>
        </div>
    );
}