import './App.css';
import React from 'react';
import PropTypes from 'prop-types';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';


function App({ isLoggedIn }) {
  return (
    <React.Fragment>
      <Notifications />

      <div className="App">
        <Header />   
        <div className="App-body">
          {helper(isLoggedIn)}
        </div>
        <div className="App-footer">
          <Footer />
        </div>
      </div>

    </React.Fragment>
  )
}

function helper(logginStatus) {
  if (logginStatus)
    return <CourseList />;
  else
    return <Login />;
}

App.propTypes = {
  isLoggedIn: PropTypes.bool
};

App.defaultProps = {
  isLoggedIn: false
}

export default App;
