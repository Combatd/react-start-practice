import React from 'react';
import './style.css'

function Button(props) {
    console.log(props);
    const { children, color } = props;
    return (
        <React.Fragment>
            <button className={`btn ${color}`}>
                {children}
            </button>
        </React.Fragment>
    )
}

export default Button;