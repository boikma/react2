import React, { Component } from 'react';

class TestimonialSection extends Component {
    render() {
        return (
            <section className="testimonial-section" id="testimonial-section">
                <h2>Testimonial</h2>
                <div className="row">
                <div className="col span-1-of-3">
                    <blockquote>
                    Dù thế giới có thay đổi, xã hội có thay đổi nhưng tâm lý con người không thay đổi, vẫn sợ hãy và
                    tham lam.
                    <cite>
                        <img src="/resources/img/person1.jpg" alt="person1" />
                        Nguyễn Bội
                        <p><a href='/profile '>See profile</a></p>
                    </cite>
                    </blockquote>
                </div>
                <div className="col span-1-of-3">
                    <blockquote>
                    Dù thế giới có thay đổi, xã hội có thay đổi nhưng tâm lý con người không thay đổi, vẫn sợ hãy và
                    tham lam.
                    <cite>
                        <img src="/resources/img/person2.jpg" alt="person2"/>
                        Nguyễn Bội
                        <p><a href='/profile '>See profile</a></p>
                    </cite>
                    </blockquote>
                </div>
                <div className="col span-1-of-3">
                    <blockquote>
                    Dù thế giới có thay đổi, xã hội có thay đổi nhưng tâm lý con người không thay đổi, vẫn sợ hãy và
                    tham lam.
                    <cite>
                        <img src="/resources/img/person3.jpg" alt="person3" />
                        Nguyễn Bội
                        <p><a href='/profile '>See profile</a></p>
                    </cite>
                    </blockquote>
                </div>
                </div>
            </section>
        );
    }
}

export default TestimonialSection;