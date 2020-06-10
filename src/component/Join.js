import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";

class Join extends Component {
    constructor(props){
        super(props);
        this.state = {
            isRedirect: false,
            fRemember: 0
        };
    }

    isChange = (event) =>{
        const name = event.target.name;
        const val = event.target.value;
        this.setState({
            [name]: val            
        });
    }
    isChangeFile = (event) =>{
        const fFile = event.target.file;
        console.log(fFile);
        
    }

    submitForm = (event) =>{
        event.preventDefault();
        this.setState({
            isRedirect: true
        })
        
        
    }

    render() {
        if(this.state.isRedirect){
            console.log(this.state);
            return (
                <Redirect to="/"/>
            );
        }
            
        return (
            <div className="container-fluid mb-5 mt-5">
                <form className="form-submit" >
                    <div className="text-center mb-4">
                        <h1 className="h3 mb-3 font-weight-normal">Contact Me</h1>
                        <p>Build form controls with floating labels via the </p>
                    </div>
                    <div className="form-group">
                        <input name="fName" type="text" onChange={(event) => this.isChange(event)} id="inputName" className="form-control" placeholder="Name" autofocus  />
                        <label htmlFor="inputName">Your Name</label>
                    </div>
                    <div className="form-group">
                        <input name="fEmail" type="email" onChange={(event) => this.isChange(event)} id="inputEmail" className="form-control" placeholder="Email address" required />
                        <label htmlFor="inputEmail">Email address</label>
                    </div>
                    <div className="form-group">
                        <textarea name="fMess" className="form-control" onChange={(event) => this.isChange(event)} id="" placeholder="Message" rows="3"></textarea>
                        <label htmlFor="inputMessage">Message</label>
                    </div>
                    <div className="form-group">
                        <input name="fFile" type="file" onChange={(event) => this.isChangeFile(event)} id="inputFile"  placeholder="Email address" required />
                    </div>
                    <div className="checkbox mb-3">
                        <label>
                            <input name="fRemember" type="checkbox" onChange={(event) => this.isChange(event)} defaultValue='1' /> Remember me
                        </label>
                    </div>
                    <button className="btn btn-lg btn-primary text-center" type="submit" onClick={(event) => this.submitForm(event)}>Sign in</button>
                </form>
            </div>
        );
    }
}

export default Join;