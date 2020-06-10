import React, { Component } from 'react';

class AboutL1 extends Component {
    render() {
        return (
            <div className="col-3 about-picture">
                <img src={this.props.url_img} alt="activities1" />
                <p className="pic-title">
                    Bắt cóc
                </p>    
            </div>
        );
    }
}

export default AboutL1;