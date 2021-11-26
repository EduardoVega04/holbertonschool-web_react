import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {
    return (
        <React.Fragment>
            <p>Login to access the full dashboard</p>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" className={css(style.loginContainerInput)} />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" className={css(style.loginContainerInput)} />
            <button type="button">OK</button>
        </React.Fragment>
    )
}

const style = StyleSheet.create({
    loginContainerInput: {
        marginRight: '9px',
        marginLeft: '9px',
    }
});

export default Login;
