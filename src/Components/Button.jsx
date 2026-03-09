import React from 'react';
//import styles from './Button.module.css';

//Generic button component for reuse across the app.
export default function Button({text, onClick, className}){
    return(
        <button className = {className} onClick={onClick}>
            {text}
        </button>
    );
}