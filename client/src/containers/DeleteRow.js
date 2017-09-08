import React, {Component} from 'react';
import  {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {deleteRow} from '../actions/index';

const DeleteRow = (props) => {

    this.renderLastRow = () => {
        return (
            <button className="btn btn-danger" onClick={() => {props.delete(props.index)}}>X</button>
        )
    }

    return (
        <td>{this.renderLastRow()}</td>
    )

}
export default DeleteRow;

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({deleteRow}, dispatch);
// }
//
// export default connect(null, mapDispatchToProps)(DeleteRow);