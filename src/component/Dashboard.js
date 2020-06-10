import React, { Component } from 'react';
import RowTable from './sections/Dashboard/RowTable';
import AddUser from './sections/Dashboard/AddUser';
import SearchForm from './sections/Dashboard/SearchForm'
import data from './sections/Dashboard/dataUser.json'

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stateAddUser: true,
            dataUser: data,
            modeSearch: false,
            textSearch: ""
        }
    }

    var 

    changeStateAddUser = () => {
        this.setState({
            stateAddUser: !this.state.stateAddUser
        });
    }

    getTextSearch = (dataSearch) => {
        this.setState({
            textSearch: dataSearch
        })
    }

    getFormUser = (item) =>{
        
    }

    render() {
        var dataTable = [];
        this.state.dataUser.forEach(item => {
            if(item.name.indexOf(this.state.textSearch) !== -1){
                dataTable.push(item);
            }
        });
        
        
        return (
            <div>
                <div className="jumbotron jumbotron-fluid">
                    <h2 className="display-5">Dashboard</h2>
                </div>
                <div className="container dashboard">
                    <div className="row">
                        <SearchForm 
                            changeState={() => this.changeStateAddUser()} 
                            stateAddUser={this.state.stateAddUser} 
                            textSearch={(dataSearch) => this.getTextSearch(dataSearch)}
                        />
                        <hr />
                        <div className="row col-12">
                            <div className="col">
                                <table className="table table-hover table-responsive">
                                    <thead>
                                        <tr>
                                            <th scope="col">STT</th>
                                            <th scope="col">Tên</th>
                                            <th scope="col">Điện thoại</th>
                                            <th scope="col">Quyền</th>
                                            <th scope="col">Hành động</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            dataTable.map((val, key) => {
                                                var permis;
                                                switch (val.permission) {
                                                    case 1: {
                                                        permis = "Admin";
                                                        break;
                                                    }
                                                    case 2: {
                                                        permis = "Postter";
                                                        break;
                                                    }
                                                    default: permis = "Postter";
                                                }
                                                return <RowTable stt={val.id} name={val.name} phone={val.phone} permission={permis} />
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                            <AddUser stateAddUser={this.state.stateAddUser} actionFormUser={(item) => this.getFormUser(item)} />
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Dashboard;