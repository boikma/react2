import React, { Component } from 'react';

class ProfileRelated extends Component {
    render() {
        return (
            <div className="col-4">
                <img src={this.props.img} alt="" />
                <h4 className="card-title">{this.props.title}</h4>
                <p className="card-text">{this.props.content}</p>
            </div>
        );
    }
}

export default ProfileRelated;