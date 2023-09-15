import React from 'react';
import "./whiteButton.css";
import "../globalStyles.css";

export default function WhiteButton({ text, onClick }) {
    return(
        <button
        className='white-button'
        onClick={onClick}
        text={text}>
            <h3 className='white-button-text'>{text}</h3>
        </button>
    );
}