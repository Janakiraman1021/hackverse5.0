import React from 'react';
import '../styles/customButton.css'; // Import the CSS file for styling

const CustomButton = ({ onClick, children, disabled }) => {
    return (
        <button onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};

export default CustomButton;
