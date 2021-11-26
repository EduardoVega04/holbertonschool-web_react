import React from 'react'
import closeIcon from '../assets/close-icon.png'
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

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
            <div className={css(style.notificationContainer)}>
                <div id="menuItem" className={css(style.menuItem)}>
                    <p>Your notifications</p>
                </div>
                {
                    this.props.displayDrawer ?
                        <div id="notifications" className={css(style.notifications)}>
                            <button aria-label="Close" onClick={() => console.log('Close button has been clicked')} type="button" style={buttonStyle}>
                                <img src={closeIcon} alt="Close" width="10px" height="10px" />
                            </button>
                            {
                                (this.props.listNotifications.length === 0) ?
                                    <p>No new notification for now</p> :
                                    <p>Here is the list of notifications</p>
                            }
                            <ul className={css(style.ulStyle)}>
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
            </div>
        )
    }
}

const style = StyleSheet.create({
    notifications: {
        border: '3px dashed #e1354b',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        paddingTop: '0.5rem',
        width: '25rem',
    },
    menuItem: {
        marginBottom: '10px',
    },
    notificationContainer: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        right: '12px',
        flexWrap: 'wrap',
        alignItems: 'flex-end',
    }
});

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape)
}

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: []
}


