import React, { useState, userEffect } from 'react';
import './addressbookform.scss';

import { useParams, Link, withRouter } from 'react-router-dom';
import { v1 as uuidv1 } from 'uuid';
import AddressBookService from '../../services/address-book-service';

var addressBookService=new AddressBookService();
const AddressBookForm = (props) => {

    let initialValue = {
        name: '',
        phoneNumber: '',
        address: '',
        city: '',
        state: '',
        zip:'',
        id: '',      
        isUpdate: false,
        isError: false,
        error: {
          name: '',
          phoneNumber: '',
          address: '',
          city:'',
          state: '',
          zip: ''    
        }
      }
          
      const [formValue,setForm] = useState(initialValue);
      
      const changeValue=(event)=>{
          setForm({...formValue,[event.target.name]: event.target.value})
      }
      
      const validData=async()=>{
          let isError=false;
          let error={
              name:'',
              phoneNumber:'',
              address:'',
              city:'',
              state:'',
              zip:''
          }
          if(formValue.name.length <1)
          {
              error.name='Name is required field'
              isError=true;
          }
          if(formValue.phoneNumber.length <1)
          {
              error.name='phoneNumber is required field'
              isError=true;
          }
          if(formValue.address.length <1)
          {
              error.name='Address is required field'
              isError=true;
          }
          if(formValue.city.length <1)
          {
              error.name='City is required field'
              isError=true;
          }
          if(formValue.state.length <1)
          {
              error.name='State is required field'
              isError=true;
          }
          if(formValue.zip.length <1)
          {
              error.name='Zip is required field'
              isError=true;
          }
          await setForm({...formValue,error:error})
          return isError;
      }
      
      const save = async(event)=>{
        event.preventDefault();
        console.log("save");
      
        if(await validData())
        {
            console.log('error',formValue);
            return;
        }
      
        let object ={
      
            name:formValue.name,
            phoneNumber:formValue.phoneNumber,
            address:formValue.address,
            city:formValue.city,
            state:formValue.state,
            id:formValue.id,
            zip:formValue.zip,
        }
      
        addressBookService.addContact(object).then(data=>{
            console.log("data added");
            alert(data);
        }).catch(err =>{
            console.log("err while Add");
        })
      
      }
      const reset=()=>{
          setForm({
              ...initialValue,id:formValue.id,isUpdate:formValue.isUpdate
          });
          console.log(formValue);
      }

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
                            <input type="text" class="input" id="name" name="name" value={formValue.name} onChange={changeValue} placeholder="Your name.."required/>
                            <error-output for="name" class="name-error" id="name-error"></error-output>
                        </div>
                        <div class="row-content">
                            <label for="phone-number" class="label text">Phone Number</label>
                            <input type="tel" class="input" id="phoneNumber" name="phoneNumber" value={formValue.phoneNumber} onChange={changeValue} required/>
                            <error-output for="tel" class="tel-error" id="tel-error"></error-output>
                        </div>
                        <div class="row-content">
                            <label for="address" class="text">Address</label>
                            <textarea name="address" id="address" cols="50" rows="6" value={formValue.address} onChange={changeValue} required></textarea>
                            <error-output for="address" class="address-error" id="address-error"></error-output>
                        </div>
                        <div class="row-content inner-rows">
                            <div class="columns-content">
                                <label for="city" class="label text">City</label>
                                <select name="city" id="city" class="input" onChange={changeValue}>
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
                                <select name="state" id="state" class="input" onChange={changeValue}>
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
                                <input type="tel" class="input" id="zip" name="zip" maxlength="999999" 
                                value={formValue.zip} onChange={changeValue} required/>
                                <error-output id="zip-error" class="zip-error" for="zip"></error-output>
                            </div>
                        </div>
                        <div class="buttonParent">
                            <div class="submit-reset">
                                <button type="submit" class="submitButton button" id="submitButton" >{formValue.isUpdate? 'Update' : 'Submit'}</button>
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