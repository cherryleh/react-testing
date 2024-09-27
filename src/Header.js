// src/Header.js
import React from 'react';

const Header = () => {
    return (
        <header style={headerStyle}>
            <p>Welcome to My Plotly Chart App</p>
            <p>Your one-stop solution for data visualization!</p>
        </header>
    );
};

const headerStyle = {
    backgroundColor: '#4CAF50', // Green background
    color: 'white',              // White text
    padding: '20px',             // Padding
    textAlign: 'center',         // Centered text
};

export default Header;
