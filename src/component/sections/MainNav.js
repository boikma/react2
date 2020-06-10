import React, { Component } from 'react';
import {  BrowserRouter as Router,  Switch,  Route,  Link, NavLink} from "react-router-dom";

export default class MainNav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-light sticky-top fixed-top">
                <a href='/' className="navbar-branch">
                <img src="resources/img/logo.png" alt="logo" className="logo" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink  activeClassName="selected" to="/">Home</NavLink >
                        </li>
                        <li className="nav-item">
                            <NavLink to="/profile">Team</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/dashboard">Dashboard</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/join">Join Now</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>


        );
    }
};