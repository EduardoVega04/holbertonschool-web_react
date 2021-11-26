import logoHbtn from '../assets/holberton-logo.jpg';
import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Header() {
    return (
        <div className={css(style.appHeader)}>
            <img src={logoHbtn} className={css(style.appLogo)} alt="Holberton logo" />
            <h1 className={css(style.appHeaderH1)}>School dashboard</h1>
        </div>
    )
}

const style = StyleSheet.create({
    appHeader: {
        backgroundColor: '#fff',
        borderBottom: '3px solid #e1354b',
        height: '200px',
    },
    appLogo: {
        width: '200px',
        height: '200px',
    },
    appHeaderH1: {
        display: 'inline',
        position: 'relative',
        top: '-6rem',
        color: '#e1354b',
    }
});

export default Header;
