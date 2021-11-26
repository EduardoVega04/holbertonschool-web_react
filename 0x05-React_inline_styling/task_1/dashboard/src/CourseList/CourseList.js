import React from 'react';
import CourseListRow from './CourseListRow';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape ';
import { StyleSheet, css } from 'aphrodite';

export default function CourseList({ listCourses }) {
    return (
        <table id="CourseList" className={css(style.tableStyle)}>
            <thead>
                <CourseListRow textFirstCell="Available courses" isHeader={true} />
                <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
            </thead>
            <tbody>
                {
                    (listCourses.length === 0) ?
                        <CourseListRow textFirstCell="No course available yet" isHeader={false} /> :
                    listCourses.map(function (course) {
                            return (
                                <CourseListRow
                                    key={course.id}
                                    textFirstCell={course.name}
                                    textSecondCell={course.credit}
                                    isHeader={false} />
                            );
                    })
                }
            </tbody>
        </table>
    )
}

const style = StyleSheet.create({
    tableStyle: {
        width: '100%',
        borderCollapse: 'collapse'
    }
});

CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape)
};

CourseList.defaultProps = {
    listCourses: []
};
