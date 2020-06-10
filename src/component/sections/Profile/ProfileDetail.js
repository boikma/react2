import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";

import data from '../../data.json';
import ProfileRelated from './ProfileRelated';

class ProfileDetail extends Component {
    render() {
        var idImg = Number(this.props.match.params.id);
        var htmlPost = (
            <div className="jumbotron jumbotron-fluid">
                <div className="container profileDetail">
                    <h4>Not Found</h4>
                </div>
            </div>

        );
        var htmlRelated = "";
        var dem = 0;
        return (
            <div className="container-fluid">
                <div className="container-fluid">
                {
                    data.map((val, key) => {
                        if (idImg === key) {
                            htmlPost = (
                                <div className="jumbotron jumbotron-fluid profileDetail">
                                    
                                        <img src={val.img} />
                                        <h4 className="card-title">{val.title}</h4>
                                        <p className="card-text">{val.content}</p>
                                </div>
                            );
                            return htmlPost;
                        };
                    }) 
                }
                </div>
                <div className="container profileRelated">
                    <div className="text-center">
                        <h4>Profile lien quan</h4>
                        <hr/>
                    </div>
                    <div className="row">
                        
                    {
                        
                        data.map((val, key) => {
                            if ((idImg != key) && (dem <= 3)) {
                                return <ProfileRelated img={val.img} title={val.title} content={val.content} />;
                            };
                            dem += 1;
                        }) 
                    }
                    </div>
                </div>
            </div>
        );


    }
}

export default ProfileDetail;