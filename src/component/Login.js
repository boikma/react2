import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div className="container-fluid">
                <form className="form-submit" >
                    <div className="text-center mb-4">
                        <h1 className="h3 mb-3 font-weight-normal">Contact Me</h1>
                        <p>Build form controls with floating labels via the </p>
                    </div>
                    <div className="form-group">
                        <input type="text" id="inputName" className="form-control" placeholder="Name" required autofocus />
                        <label htmlFor="inputName">Your Name</label>
                    </div>
                    <div className="form-group">
                        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
                        <label htmlFor="inputEmail">Email address</label>
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" id="" placeholder="Message" rows="3"></textarea>
                        <label htmlFor="inputMessage">Message</label>
                    </div>
                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" defaultValue="remember-me" /> Remember me
                        </label>
                    </div>
                    <button className="btn btn-lg btn-primary text-center" type="submit">Sign in</button>
                </form>
            </div>
        );
    }
}

export default Login;