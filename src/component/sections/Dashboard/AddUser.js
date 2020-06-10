import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props){
        super(props);
    }

    isChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            name: value
        })
    }

    showFormAddUser(){
        if(this.props.stateAddUser === false){
            return(
                <div className="card border-primary mb-3" style={{ maxWidth: '18rem' }}>
                    <div className="card-header">Header</div>
                    <div className="card-body text-primary">
                        <div className="form-group border-primary">
                            <label>Name</label>
                            <input type="text" onChange={(event) => this.isChange(event)} name id className="form-control" placeholder aria-describedby="helpId" />
                            <label>Phone</label>
                            <input type="text" onChange={(event) => this.isChange(event)} name id className="form-control" placeholder aria-describedby="helpId" />
                            <label>Permission</label>

                            <select class="form-control" name="" id="">
                                <option>Admin</option>
                                <option>Poster</option>
                            </select>

                            <button type="button" name id className="btn btn-primary mt-2" btn-lg btn-block >Add</button>
                        </div>
                    </div>
                </div>
            )
        }
    }

    render() {
        console.log(this.state);
        
        return (
            <div className="col-3 dashboard-add">
                    {this.showFormAddUser()}
            </div>
        );
    }
}

export default AddUser;