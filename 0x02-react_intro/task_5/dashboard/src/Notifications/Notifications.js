import React from 'react'
import './Notifications.css'
import closeIcon from '../assets/close-icon.png'
import { getLatestNotification } from '../utils/utils';

export default function Notifications() {
    const buttonStyle = {
        display: 'block',
        padding: '0px',
        border: '0px',
        margin: '0px 0px auto auto',
    };

    function buttonClick(){
        console.log("Close button has been clicked");
    }

    return (
        <div className="Notifications">
            <button aria-label="Close" onClick={buttonClick} type="button" style={buttonStyle}>
                <img src={closeIcon} alt="Close" width="10px" height="10px"/>
            </button>
            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li dangerouslySetInnerHTML={getLatestNotification()}></li>
            </ul>
        </div>
    )
}
