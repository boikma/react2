import React, { Component } from 'react';

class SearchForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            dataSearch: ""
        }
    }

    showAddUser = () =>{
        if(this.props.stateAddUser === true){
            return <div 
                        className="btn btn-outline-info btn-block mt-2 mb-1" 
                        onClick={() => this.props.changeState()}>Thêm mới
                    </div>
        }else{
            return <div 
                        className="btn btn-outline-secondary btn-block mt-2 mb-2" 
                        onClick={() => this.props.changeState()}>Đóng lại
                    </div>
        }
    }

    getDataSearch = (event) =>{
        this.setState({
            dataSearch: event.target.value
        })
        this.props.textSearch(event.target.value);
    }

    render() {
        return (
            <div className="col-12 ">
                <div className="btn-group dashboard-searchform">
                    <input 
                        type="text" onChange={(event) => this.getDataSearch(event)} 
                        className="form-control" name="" id="" aria-describedby="helpId" placeholder="enter name" 
                    />
                    <button className="btn btn-info" onClick={() => this.props.textSearch(this.state.dataSearch)}>
                        Search
                    </button>
                </div>
                {this.showAddUser()}
                
            </div>
        );
    }
}

export default SearchForm;