import React from 'react';

const DeleteRow = ({deleteRow, index}) => {

    this.renderLastRow = () => {
        return (
            <button className="animated fadeIn btn btn-danger button1"
                    onClick={() => {deleteRow(index)}}>
                X</button>
        )
    }
    return (
        <td className="animated fadeIn">{this.renderLastRow()}</td>
    )

}
export default DeleteRow;

