import React from 'react';
import './style.less'


export const CustomInput = (props) => {
    return (
        <div className="custom-input-wrapper">
            <input className="custom-input" type="email" name="mail" autoComplete="off" placeholder="Email" type="text" >
            </input>
            <span className="custom-input-underline"></span>
        </div>
    )
}