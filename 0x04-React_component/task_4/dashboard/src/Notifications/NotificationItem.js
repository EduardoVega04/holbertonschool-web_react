import React from 'react'
import PropTypes from 'prop-types';

export default class NotificationItem extends React.Component {
    render () {
        if (this.props.html)
            return <li data-notification-type={this.props.type} dangerouslySetInnerHTML={this.props.html} onClick={() => {this.props.markAsRead(this.props.id)}}></li>;

        return <li data-notification-type={this.props.type} onClick={() => {this.props.markAsRead(this.props.id)}}>{this.props.value}</li>;
    }
}

NotificationItem.propTypes = {
    id: PropTypes.number.isRequired,
    html: PropTypes.shape({
        __html: PropTypes.string
    }),
    type: PropTypes.string,
    value: PropTypes.string,
    markAsRead: PropTypes.func
}

NotificationItem.defaultProps = {
    type: 'default',
    markAsRead: () => {}
}