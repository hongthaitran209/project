import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Header/Navbar';
import Carousel from './Components/Carousel/Carousel';
import Announcements from './Components/Announcements/Announcements';
import { connect } from 'react-redux';
import { getCourses } from './Actions/Course';
import CourseList from './Components/CourseList/CourseList';
import SignIn from './Components/SignIn/SignIn';


class App extends React.Component {

  componentDidMount() {
    this.props.getCourses();
  }

  render() {
    return (
      <div className="App">
        <Carousel />
        <Announcements />
        <CourseList />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCourses: () => {
      dispatch(getCourses());
    }
  }
}

export default connect(null, mapDispatchToProps)(App);
