import React from 'react';

const DeleteRow = (props) => {

    this.renderLastRow = () => {
        return (
            <button className="animated fadeIn btn btn-danger"
                    onClick={() => {props.delete(props.index)}}>
                X</button>
        )
    }
    return (
        <td className="animated fadeIn">{this.renderLastRow()}</td>
    )

}
export default DeleteRow;

