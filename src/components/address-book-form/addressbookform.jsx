import React, { useState, userEffect } from 'react';
import './addressbookform.scss';

import { useParams, Link, withRouter } from 'react-router-dom';



const AddressBookForm = (props) => {
  
    return (
        <div className="body">
        <header class="header header-content">
            <div class="logo-content">
                <img src="assets/logo.png" alt="logo"/>
                <div>
                    <span class="address-text">ADDRESS</span><br />
                    <span class="address-text book-text">BOOK</span>
                </div>
            </div>
        </header>
            <div class="form-content">
                <form action="#" class="form" autocomplete="off" onsubmit="save(event)" onreset="resetForm()">
                    <div class="form-head">
                        <h3 class="head-text">PERSON ADDRESS FORM</h3>
                        <div class="cancel-button">
                            <Link to="/"><img src="assets/cross.png"/></Link>
                        </div>
                    </div>
    
                    <div class="form-body">
                        <div class="row-content">
                            <label for="name" class="label text">Full Name</label>
                            <input type="text" class="input" id="name" name="name" required/>
                            <error-output for="name" class="name-error" id="name-error"></error-output>
                        </div>
                        <div class="row-content">
                            <label for="phone-number" class="label text">Phone Number</label>
                            <input type="tel" class="input" id="phoneNumber" name="phoneNumber" required/>
                            <error-output for="tel" class="tel-error" id="tel-error"></error-output>
                        </div>
                        <div class="row-content">
                            <label for="address" class="text">Address</label>
                            <textarea name="address" id="address" cols="50" rows="6" required></textarea>
                            <error-output for="address" class="address-error" id="address-error"></error-output>
                        </div>
                        <div class="row-content inner-rows">
                            <div class="columns-content">
                                <label for="city" class="label text">City</label>
                                <select name="city" id="city" class="input">
                                    <option value="0">Select City</option>
                                    <option value="Bangalore">Bangalore</option>
                                    <option value="Mumbai">Mumbai</option>
                                    <option value="Hyderabad">Hyderabad</option>
                                    <option value="Pune">Pune</option>
                                    <option value="Mysore">Mysore</option>
                                </select>
                            </div>
                            <div class="columns-content">
                                <label for="state" class="text label">State</label>
                                <select name="state" id="state" class="input">
                                    <option value="0">Select State</option>
                                    <option value="Karnataka">Karnataka</option>
                                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                                    <option value="Delhi">Delhi</option>
                                    <option value="Goa">Goa</option>
                                    <option value="Rajasthan">Rajasthan</option>
                                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                                    <option value="Uttarakhand">Uttarakhand</option>
                                    <option value="West Bengal">West Bengal</option>
                                </select>
                            </div>
                            <div class="columns-content zip">
                                <label for="zip" class="text label">Zip Code</label>
                                <input type="tel" class="input" id="zip" name="zip" maxlength="999999" required/>
                                <error-output id="zip-error" class="zip-error" for="zip"></error-output>
                            </div>
                        </div>
                        <div class="buttonParent">
                            <div class="submit-reset">
                                <button type="submit" class="submitButton button" id="submitButton">Add</button>
                                <button type="reset" class="resetButton button" id="resetButton" onreset="resetForm()">Reset</button>
                            </div>
                        </div>   
                       
                    </div>
                </form>
            </div>
        </div>
    )
  }

export default AddressBookForm;