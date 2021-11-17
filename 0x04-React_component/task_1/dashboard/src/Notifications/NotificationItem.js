import React from 'react'
import PropTypes from 'prop-types';

export default function NotificationItem({ type, value, html }) {
    if (html)
        return <li data-notification-type={type} dangerouslySetInnerHTML={html}></li>;

    return <li data-notification-type={type}>{value}</li>;
}

NotificationItem.propTypes = {
    html: PropTypes.shape({
        __html: PropTypes.string
    }),
    type: PropTypes.string,
    value: PropTypes.string
}

NotificationItem.defaultProps = {
    type: 'default'
}