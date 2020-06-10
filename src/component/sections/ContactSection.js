import React, { Component } from 'react';

export default class ContactSection extends Component {
    render() {
        return (
            <section className="contact-section" id="contact-section">
                <div className="row">
                    <div className="col-4">
                        <ul className="infor">
                            <li><i className="fas fa-map-marker-alt small-icon" />Addres: My Ha, My Loc, Nam Dinh</li>
                            <li><i className="fas fa-envelope small-icon" />Email: boivip@gmail.com</li>
                            <li><i className="fas fa-phone small-icon" />Phone: 0354663647</li>
                        </ul>
                        <ul className="social-icon">
                            <li><i className="fab fa-twitter-square" /></li>
                            <li><i className="fab fa-facebook-square" /></li>
                            <li><i className="fab fa-instagram" /></li>
                        </ul>
                    </div>
                    <div className="contact-section-feedback col-8 form-group">
                        <div className="row">
                            <div className="col-3">
                                <label>Name</label>
                            </div>
                            <div className="col-9">
                                <input type="text" placeholder="Your Name" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <label>Mail</label>
                            </div>
                            <div className="col-9">
                                <input type="email" placeholder="Your email" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <label>Message</label>
                            </div>
                            <div className="col-9">
                                <textarea name="message" id="message" placeholder="Your message" defaultValue={""} />
                            </div>
                        </div>
                        <div className="row">
                            <input className="btn " type="submit" defaultValue="Send it" url="#" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
