import React from 'react'
import './Notifications.css'
import closeIcon from '../assets/close-icon.png'
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

export default function Notifications({ displayDrawer, listNotifications }) {
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
        <React.Fragment>
            <div className="menuItem">
                <p>Your notifications</p>
            </div>
            {
                displayDrawer ? 
                <div className="Notifications">
                    <button aria-label="Close" onClick={buttonClick} type="button" style={buttonStyle}>
                        <img src={closeIcon} alt="Close" width="10px" height="10px" />
                    </button>
                    {
                        (listNotifications.length === 0) ?
                            <p>No new notification for now</p> :
                            <p>Here is the list of notifications</p>
                    }
                    <ul>
                        {
                            listNotifications.map(function (notification) {
                                return (
                                <NotificationItem
                                    key={notification.id}
                                    type={notification.type}
                                    value={notification.value}
                                    html={notification.html} />
                                );
                            })
                        }
                    </ul>
                </div> : null
            }
        </React.Fragment>
    )
}


Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape)
}

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: []
}
