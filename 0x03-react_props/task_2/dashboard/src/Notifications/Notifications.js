import React from 'react'
import './Notifications.css'
import closeIcon from '../assets/close-icon.png'
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';

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
                <NotificationItem type="default" value="New course available" />
                <NotificationItem type="urgent" value="New resume available" />
                <NotificationItem type="urgent" html={getLatestNotification()} />
            </ul>
        </div>
    )
}
