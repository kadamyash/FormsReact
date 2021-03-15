import React from 'react';
import './forms-react.css'

function Input(props) {
        function inputChanged(event){
                var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                if(props.validation!==undefined && props.validation!==null){
                        //validating email ids
                        if(props.validation.toLowerCase()==='email'){
                                if(emailPattern.test(event.target.value)){
                                        document.getElementById('currentinput').style = 'color: inherit; border-color: green';
                                }
                                else{
                                        document.getElementById('currentinput').style = 'color: red;  border-color: red';
                                }
                        }
                        else{
                                document.getElementById('currentinput').style = 'color: black; border-color: default';
                        }
                }
        }
        return (
                <input id="currentinput" className="input" type={props.type==null?'text':props.type} onChange={inputChanged} placeholder={props.placeholder} autoComplete={props.autofill===undefined?"none":"on"}></input>
        );
}

export default Input;