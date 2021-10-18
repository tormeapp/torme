import React from 'react';
import './index.scss';

const Input = (props) => {
    return (
        <div className="input-wrapper">
            <label className="placeholder">{props.placeholder}</label>
            <input onChange={(e) => props.handleInputChange(e)} name={props.name} value={props.value} type={props.type}></input>
        </div>
     );
}
 
export default Input;