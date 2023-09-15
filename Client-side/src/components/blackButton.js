import React from 'react';
import "./blackButton.css";
import "../globalStyles.css";

export default function BlackButton({ text, onClick }) {
    return(
        <button
        className='black-button'
        onClick={onClick}
        text={text}>
            <h3 className='black-button-text'>{text}</h3>
        </button>
    );
}