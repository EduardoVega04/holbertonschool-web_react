import './Login.css';
import React from 'react';

function Login() {
    return (
        <React.Fragment>
            <p>Login to access the full dashboard</p>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" />
            <button type="button">OK</button>
        </React.Fragment>
    )
}

export default Login;
