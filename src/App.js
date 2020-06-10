import React, { Component } from 'react'
import {  BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";
import './App.css';
import ProductSection from './component/sections/ProductSection'
import Header from './component/sections/Header'
import Home from './component/Home'
import Join from './component/Join'
import MainNav from './component/sections/MainNav'
import ContactSection from './component/sections/ContactSection';
import MyRouter from './router/MyRouter';


function App() {
  return (
    <div>
      <Router>
        <MainNav/>
        <MyRouter />
        <ContactSection/>
      </Router>
      
    </div>
  );
}

export default App;
