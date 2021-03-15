import React from 'react';
import './forms-react.css'

function Button(props) {
        return (
                <button type={props.type} className={`btn ${props.variant}`}>{props.text}</button>
        );
}

export default Button;