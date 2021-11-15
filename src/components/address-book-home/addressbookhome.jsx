import React from 'react';

import './addressbookhome.scss';
import {Link} from 'react-router-dom';


class AddressBookHome extends React.Component {

  render () {
    return (
        <div classname="body">
        <header class="header header-content">
            <div class="logo-content">
                <img src="assets/logo.png" alt="logo"/>
                <div>
                    <span class="address-text">ADDRESS</span><br />
                    <span class="address-text book-text">BOOK</span>
                </div>
            </div>
        </header>
        <div class="main-content">
            <div class="main-header-content">
                <div class="addressbook-detail-text">
                    Person Details
                    <div class="contact-count"></div>
                </div>
                <Link to="form" className="add-button">+ Add Person</Link>
            </div>
        </div>
        <div class="main-content">
            <div class="table-main">
                <table id="table-display" class="table">
                </table>
            </div>
        </div>
    </div>
    );
  }
}

export default AddressBookHome;