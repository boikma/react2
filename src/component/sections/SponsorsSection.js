import React, { Component } from 'react';

class SponsorsSection extends Component {
    render() {
        return (
            <section className="sponsors-section" id="sponsors-section">
                <h2>Sponsors</h2>
                <div className="row">
                <ul className="sponsors-showcase">
                    <li>
                    <figure>
                        <img className="sponsors" src="/resources/img/sponsors1.png" alt="sponsors1" />
                        <figcaption>
                        Barcelona
                        </figcaption>
                    </figure>
                    </li>
                    <li>
                    <figure>
                        <img src="/resources/img/sponsors2.png" alt="sponsors2" />
                        <figcaption>
                        Barcelona
                        </figcaption>
                    </figure>
                    </li>
                    <li>
                    <figure>
                        <img src="/resources/img/sponsors3.png" alt="sponsors3" />
                        <figcaption>
                        Barcelona
                        </figcaption>
                    </figure>
                    </li>
                </ul>
                <ul className="sponsors-showcase">
                    <li>
                    <figure>
                        <img className="sponsors" src="/resources/img/sponsors1.png" alt="sponsors1" />
                        <figcaption>
                        Barcelona
                        </figcaption>
                    </figure>
                    </li>
                    <li>
                    <figure>
                        <img src="/resources/img/sponsors2.png" alt="sponsors2" />
                        <figcaption>
                        Barcelona
                        </figcaption>
                    </figure>
                    </li>
                    <li>
                    <figure>
                        <img src="/resources/img/sponsors3.png" alt="sponsors3" />
                        <figcaption>
                        Barcelona
                        </figcaption>
                    </figure>
                    </li>
                </ul>
                </div>
            </section>
        );
    }
}

export default SponsorsSection;