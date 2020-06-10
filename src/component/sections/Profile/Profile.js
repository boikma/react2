import React, { Component } from 'react';
import ProfileItem from './ProfileItem'
import data from '../../data.json';


class Profile extends Component {
     render() {
        return (
            <div className="row product mt-5">
                {
                    data.map((val,i) => {
                        return(
                        <ProfileItem proId={val.id} img={val.img} title={val.title} content={val.content} />
                        )
                        
                    })
                }
            </div>
        );
    }
}

export default Profile;