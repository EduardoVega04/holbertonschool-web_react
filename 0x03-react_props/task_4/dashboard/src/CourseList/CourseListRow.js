import React from 'react';
import PropTypes from 'prop-types';


export default function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
    if (isHeader)
    {
        if (textSecondCell === null)
            return <tr colSpan="2">{textFirstCell}</tr>;
        else {
            return (
                <React.Fragment>
                    <tr>{textFirstCell}</tr>
                    <tr>{textSecondCell}</tr>
                </React.Fragment>
            )
        }
    }
    else {
        return (
            <tr>
                <td>{textFirstCell}</td>
                <td>{textSecondCell}</td>
            </tr>
        )
    }
}

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.string
}

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null
}
