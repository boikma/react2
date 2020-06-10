import React, { Component } from 'react';
import {    BrowserRouter as Router,    Switch,    Route,    Link  } from "react-router-dom";
import Join from '../component/Join';
import Home from '../component/Home';
import Profile from '../component/sections/Profile/Profile';
import ProfileDetail from '../component/sections/Profile/ProfileDetail';
import Login from '../component/Login';
import Dashboard from '../component/Dashboard';

class MyRouter extends Component {
    render() {
        return (
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/profile">
                        <Profile />
                    </Route>
                    <Route exact path="/profile-detail/:slug.:id.html" component={ProfileDetail}/> 
                    <Route path="/join">
                        <Join />
                    </Route>
                    <Route exact path="/login" component={Login}/> 
                    <Route exact path="/dashboard" component={Dashboard}/> 
                </Switch>
        );
    }
}

export default MyRouter;