import React, { Component } from 'react';

class RowTable extends Component {
    render() {
        return (
            <tr>
                    <td >{this.props.stt}</td>
                    <td>{this.props.name}</td>
                    <td>{this.props.phone}</td>
                    <td>{this.props.permission}</td>
                    <td>
                        <div className="btn-group">
                            <button class="btn btn-warning"><i className="fa fa-edit"></i>Edit</button>
                            <button class="btn btn-danger"><i className="fa fa-delete"></i>Delete</button>
                        </div>
                    </td>
                </tr>
            
        );
    }
}

export default RowTable;