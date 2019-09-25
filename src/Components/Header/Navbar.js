import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class NavBar extends Component {
    render() {
        return (

            <div className="my-navbar">
                <nav className="navbar navbar-expand-sm d-flex justify-content-center align-items-center">
                    <Link to="/" className="navbar__logo">
                        <img src="http://learningzone.themescustom.com/theme/image.php/learningzone/theme/1556102214//logo" alt="logo" />
                    </Link>
                    <ul className="navbar-nav d-flex justify-content-center align-items-center">
                        <li className="nav-item">
                            <a className="nav-link home" href="#">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <div className="dropdown">
                                <a className="dropdown-toggle" data-toggle="dropdown">
                                    Features
  </a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Link 1</a>
                                    <a className="dropdown-item" href="#">Link 2</a>
                                    <a className="dropdown-item" href="#">Link 3</a>
                                </div>
                            </div>

                        </li>
                        <li className="nav-item">
                            <div className="dropdown">
                                <a className="dropdown-toggle" data-toggle="dropdown">
                                    Courses
  </a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Link 1</a>
                                    <a className="dropdown-item" href="#">Link 2</a>
                                    <a className="dropdown-item" href="#">Link 3</a>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Typography</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Commponents</a>
                        </li>
                        <li className="nav-item">
                            <div className="dropdown">
                                <a className="dropdown-toggle" data-toggle="dropdown">
                                    English (en)
  </a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Link 1</a>
                                    <a className="dropdown-item" href="#">Link 2</a>
                                    <a className="dropdown-item" href="#">Link 3</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <span>This is the guest access</span>
                    <Link to="/sign-in" className="log-in">Sign in</Link>
                    <Link to="/sign-up" className="log-in">Sign up</Link>
                </nav>

                <div className="navbar-bottom">
                    <div className="container d-flex align-items-center justify-content-between navbar-bottom__content">
                        <div className="navbar-bottom__left">
                            <span>Your total courses </span>
                            <span className="navbar-bottom__left__number">0</span>
                        </div>
                        <div className="navbar-bottom__right">
                            <a href="#">Courses</a>
                            <a href="#">Calendar</a>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
