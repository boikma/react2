import React, { Component } from 'react';
import AboutSection from './sections/AboutSection/AboutSection'
import Header from './sections/Header';
import SponsorsSection from './sections/SponsorsSection'
import TestimonialSection from './sections/TestimonialSection'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <AboutSection/>
                <TestimonialSection/>
                <SponsorsSection/>
            </div>
        );
    }
};