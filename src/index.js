import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './SASS/main.scss';
import * as serviceWorker from './serviceWorker';
import NavBar from './Components/Header/Navbar';
import Carousel from './Components/Carousel/Carousel';
import Announcements from './Components/Announcements/Announcements';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './Reducers/rootReducer';
import thunk from "redux-thunk";

import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    )
)

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <NavBar />
            <Route exact path="/sign-in" component={SignIn} />
            <Route exact path="/sign-up" component={SignUp} />
            <Route exact path="/" component={App} />
        </Router>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
