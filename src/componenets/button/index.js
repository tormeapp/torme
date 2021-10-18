import React from 'react';
import './index.scss';

// props accepts type = { cancel, submit, accept }
const Button = ( props ) => {
    return ( 
    <div className="btn-wrapper">
        <button className={props.type ? props.type : ""} onClick={() => props.handleOnClick()}>{props.text}</button>
    </div>
     );
}
 
export default Button;