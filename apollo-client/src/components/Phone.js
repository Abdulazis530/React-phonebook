import React from 'react';

const Phone = (props) => {
  return (
    <tr>
      <th scope="row">{props.index + 1}</th>
      <td>{props.Name}</td>
      <td>{props.phone}</td>
      <td>
        {props.added && <button type="button" className="btn btn-outline-danger del" onClick={props.onDelete} >  <i  className="far fa-trash-alt"></i> </button> }
        {!props.added && <button type="button" className="btn btn-outline-warning del" onClick={props.resend}><i className="fas fa-redo-alt"></i> Resend </button> }


        <button
          type="button"
          className="btn btn-outline-success ed"
        >
      <i className="fas fa-edit"></i>
        </button>
      </td>
     
    </tr>
  )
}

export default Phone;
