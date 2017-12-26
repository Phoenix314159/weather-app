import React from 'react'

export default ({deleteRow, index}) => (
  <td className="animated fadeIn">
    <button className="animated fadeIn btn btn-danger button1"
            onClick={() => {deleteRow(index)}}>X</button>
  </td>
)




