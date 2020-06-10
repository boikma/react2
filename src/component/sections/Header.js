import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="row">
                    <div className="heading-main-box">
                        <h1 className="heading-main-text">
                            Letson more than just<br /> a network of partners
                        </h1>
                        <a href="#" className="btn">Tell me more</a>
                        <a href="/join" className="btn" >Join Us</a>
                    </div>
                </div>   
            </header>
        );
    }
}

export default Header;