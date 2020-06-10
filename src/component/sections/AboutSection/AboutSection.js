import React, { Component } from 'react';
import AboutL1 from './AboutL1';

export default class AboutSection extends Component {
    render() {
        return (
            <div className='row mb-5'>
                <section className="about-section" id="about-section">
                    <h2>About Us</h2>
                    <div className='row'>
                        <AboutL1 url_img='/resources/img/activities1.jpg'/>
                        <AboutL1 url_img='/resources/img/activities2.jpg'/>
                        <AboutL1 url_img='/resources/img/activities3.jpg'/>
                        <AboutL1 url_img='/resources/img/activities4.jpg'/>
                    </div>
                </section>
            </div>
        );
    }
}
