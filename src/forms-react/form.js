import React from 'react';
import './forms-react.css'

const Form  = ({children}) => {

        return (
                <form className="form"> 
                {children}
                </form>
        );
}

export default Form;