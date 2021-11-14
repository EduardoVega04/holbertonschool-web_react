import React from 'react'

export default function NotificationItem(props) {
    if (props.html)
        return <li data-notification-type={props.type} dangerouslySetInnerHTML={props.html}></li>;

    return <li data-notification-type={props.type}>{props.value}</li>;
}