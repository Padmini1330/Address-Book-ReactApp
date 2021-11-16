import React from 'react';

import './addressbookhome.scss';
import {Link} from 'react-router-dom';
import AddressBookService from '../../services/address-book-service';
import Display from './display';

var addressBookService = new AddressBookService();  


class AddressBookHome extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
          contactsArray: []
        };
          
      }
    
     getAllContactsList = () => {
        console.log("inside getAllContactsList");
        addressBookService.getAllContacts()
        .then(responseData => {
          console.log("Data received after GET Call " + responseData.data);
          this.setState({contactsArray: responseData.data.data});
        }).catch(error => {
          console.log("Error : " +JSON.stringify(error));
        })
      }

  render () {
    return (
        <div className="body" onLoad={this.getAllContactsList}>
        <header className="header header-content">
            <div className="logo-content">
                <img src="assets/logo.png" alt="logo"/>
                <div>
                    <span className="address-text">ADDRESS</span><br />
                    <span className="address-text book-text">BOOK</span>
                </div>
            </div>
        </header>
        <div className="main-content">
            <div className="main-header-content">
                <div className="addressbook-detail-text">
                    Person Details
                    <div className="contact-count">{this.state.contactsArray.length}</div>
                </div>
                <Link to="form" className="add-button">+ Add Person</Link>
            </div>
        </div>
        <div className="main-content">
            <div className="table-main">
                <Display contactsArray = {this.state.contactsArray} />
            </div>
        </div>
    </div>
    );
  }
}

export default AddressBookHome;