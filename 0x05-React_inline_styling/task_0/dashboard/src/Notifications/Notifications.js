import React from 'react'
import './Notifications.css'
import closeIcon from '../assets/close-icon.png'
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

const buttonStyle = {
    display: 'block',
    padding: '0px',
    border: '0px',
    margin: '0px 0px auto auto',
};

export default class Notifications extends React.Component {
    constructor(props) {
        super(props)

        this.markAsRead = this.markAsRead.bind(this);
    }

    shouldComponentUpdate(nextProps) {
        if (this.props.listNotifications.length < nextProps.listNotifications.length) {
            return true
        }
        return false;
    }

    markAsRead(id) {
        console.log(`Notification ${id} has been marked as read`);
    }

    render() {
        return (
            <React.Fragment>
                <div className="menuItem">
                    <p>Your notifications</p>
                </div>
                {
                    this.props.displayDrawer ?
                        <div className="Notifications">
                            <button aria-label="Close" onClick={() => console.log('Close button has been clicked')} type="button" style={buttonStyle}>
                                <img src={closeIcon} alt="Close" width="10px" height="10px" />
                            </button>
                            {
                                (this.props.listNotifications.length === 0) ?
                                    <p>No new notification for now</p> :
                                    <p>Here is the list of notifications</p>
                            }
                            <ul>
                                {
                                    this.props.listNotifications.map((notification) => (
                                    <NotificationItem 
                                        id={notification.id}
                                        key={notification.id}
                                        type={notification.type}
                                        value={notification.value}
                                        html={notification.html}
                                        markAsRead={this.markAsRead} />))
                                }
                            </ul>
                        </div> : null
                }
            </React.Fragment>
        )
    }
}


Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape)
}

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: []
}


