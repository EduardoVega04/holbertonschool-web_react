import logoHbtn from '../assets/holberton-logo.jpg';
import './Header.css';
import React from 'react';

function Header() {
    return (
        <div className="App-header">
            <img src={logoHbtn} alt="Holberton logo" />
            <h1>School dashboard</h1>
        </div>
    )
}

export default Header;
