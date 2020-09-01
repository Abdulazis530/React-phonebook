import React from 'react';

const User = (props) => {
  console.log(props.key)
  return(
    <tr>
      <th scope="row">{props.index+1}</th>
      <td>{props.Name}</td>
      <td>{props.phone}</td>
      <td>
        <button
        type="button"
        className="btn btn-success"
        onClick={props.added ? props.onDelete : props.resend}>
        {props.added ? 'Hapus' : 'Kirim Ulang'}
        </button>
      </td>
      {!props.added &&
        <td style={{color: "red", fontSize: "8px"}}>
          network failed, please check your connections
        </td>
      }
    </tr>
  )
}

export default User;
