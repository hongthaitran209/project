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
import Awnsome from './Components/Awnsome/Awnsome';
import LearningZone from './Components/learningZone/LearningZone';
import GetCoaching from './Components/GetCoaching/GetCoaching';
import Falcuties from './Components/Falcuties/Falcuties';
import Linked from './Components/Linked/Linked';
import Footer from './Components/Footer/Footer';

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
        <Awnsome/>
        <LearningZone/>
        <GetCoaching/>
        <Falcuties/>
        <Linked/>
        <Footer/>
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
