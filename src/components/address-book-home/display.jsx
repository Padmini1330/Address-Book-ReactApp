import React, {useState} from 'react';
import './addressbookhome.scss';
import deleteIcon from '../../assets/icons/delete.svg';
import editIcon from '../../assets/icons/edit.svg';
import AddressBookService from '../../services/address-book-service';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

var addressBookService=new AddressBookService();

const Display = (props) => {
  
    const [contactData, setContactData] = useState([])


    const remove= (id) =>{
        addressBookService.deleteContact(id);
        window.location.reload();
    } 
 
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
                  <td>{contact.firstName}</td>
                  <td>{contact.phoneNumber}</td>
                  <td>{contact.lastName}</td>
                  <td>{contact.city}</td>
                  <td>{contact.state}</td>
                  <td>{contact.zipCode}</td>
                  <td><img src={deleteIcon} onClick={() => remove(contact.contactId)} alt="delete" />
                      <Link to={"/form/" + (contact.contactId)}> 
                      <img src={editIcon} alt="update" />
                      </Link>
                      </td>
              </tr>
            ))
          }
        </tbody>
    </table>
  )
}


export default Display;