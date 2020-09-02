import React from 'react';
import './style.css'

function Button(props) {
    console.log(props);
    const { children, color, onBtnClick } = props;
    return (
        <React.Fragment>
            <button className={`btn ${color}`} onClick={onBtnClick}>
                {children}
            </button>
        </React.Fragment>
    )
}

export default Button;