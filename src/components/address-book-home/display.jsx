import React from 'react';
import './addressbookhome.scss';
import deleteIcon from '../../assets/icons/delete.svg';
import editIcon from '../../assets/icons/edit.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const Display = (props) => {
  
  return (
    <table id="display" className="table">
      <tbody>
        
        <tr key={-1}>
            <th>Name</th>
            <th>PhoneNumber</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>zip</th>
        </tr>
        {
            props.contactsArray && props.contactsArray.map((contact,index) => (
              <tr key={index}>
                  <td>{contact.name}</td>
                  <td>{contact.phoneNumber}</td>
                  <td>{contact.address}</td>
                  <td>{contact.city}</td>
                  <td>{contact.state}</td>
                  <td>{contact.zip}</td>
                  <td><img src={deleteIcon} onClick={() => remove(contact.id)} alt="delete" />
                      <img src={editIcon} onClick={() => edit(contact.id)} alt="edit" /></td>
              </tr>
            ))
          }
        </tbody>
    </table>
  )
}
const remove = (id) => {
}

const edit = (id) => {
}

export default Display;