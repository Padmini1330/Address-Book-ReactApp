import React, { useState, useEffect } from 'react';
import './addressbookform.scss';

import { useParams, Link, withRouter } from 'react-router-dom';
import { v1 as uuidv1 } from 'uuid';
import AddressBookService from '../../services/address-book-service';

const AddressBookForm = (props) => {

    const { id } = useParams()
    //alert(id)

    let initialValue = {
        name: '',
        phoneNumber: '',
        address: '',
        city: '',
        state: '',
        zip:'',
        id: '',      
        isUpdate: false,
        error: {
          name: '',
          phoneNumber: '',
          address: '',
          city:'',
          state: '',
          zip: ''    
        }
      }
          
      const addressBookService=new AddressBookService();

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
      

      useEffect(()=>{

        if(id) {
            formValue.isUpdate = true
            addressBookService.getContact(id).then(contact => {
                setForm({
                    ...formValue,
                    name: contact.data.name,
                    phoneNumber: contact.data.phoneNumber,
                    address: contact.data.address,
                    city: contact.data.city,
                    state: contact.data.state,
                    zip: contact.data.zip
                });
            }).catch(error => {
                console.log(error)
            })
        }
        
      },[])

      const save = async(event)=>{
        event.preventDefault();
        alert("inside save")
      
        if(await validData())
        {
            console.log('error',formValue);
            return;
        }
         
        if(formValue.isUpdate)
        {
        let object = {

                name:formValue.name,
                phoneNumber:formValue.phoneNumber,
                address:formValue.address,
                city:formValue.city,
                state:formValue.state,
                zip:formValue.zip,
            }
            addressBookService.updateContact(object,id);
        }
        else
        {
                let object = {
                    name:formValue.name,
                    phoneNumber:formValue.phoneNumber,
                    address:formValue.address,
                    city:formValue.city,
                    state:formValue.state,
                    zip:formValue.zip,
                }

                addressBookService.addContact(object).then(data=>{
                    console.log("Data added successfully!");
                }).catch(err =>{
                    console.log("Error while adding data");
                })
            }

            window.location="http://localhost:3002/";
            
    }
       

      const reset=()=>{
          setForm({
              ...initialValue,id:formValue.id,isUpdate:formValue.isUpdate
          });
          console.log(formValue);
      }

    return (
        <div className="body">
        <header className="header header-content">
            <div className="logo-content">
                <img src="assets/logo.png" alt="logo"/>
                <div>
                    <span className="address-text">ADDRESS</span><br />
                    <span className="address-text book-text">BOOK</span>
                </div>
            </div>
        </header>
            <div className="form-content">
                <form action="#" className="form" autoComplete="off" onSubmit={save} onReset={reset}>
                    <div className="form-head">
                        <h3 className="head-text">PERSON ADDRESS FORM</h3>
                        <div className="cancel-button">
                            <Link to="/"><img src="assets/cross.png"/></Link>
                        </div>
                    </div>
    
                    <div className="form-body">
                        <div className="row-content">
                            <label htmlFor="name" className="label text">Full Name</label>
                            <input type="text" className="input" id="name" name="name" value={formValue.name} onChange={changeValue} placeholder="Your name.."required/>
                            
                        </div>
                        <div className="row-content">
                            <label htmlFor="phone-number" className="label text">Phone Number</label>
                            <input type="tel" className="input" id="phoneNumber" name="phoneNumber" value={formValue.phoneNumber} onChange={changeValue} required/>
                            
                        </div>
                        <div className="row-content">
                            <label htmlFor="address" className="text">Address</label>
                            <textarea name="address" id="address" cols="50" rows="6" value={formValue.address} onChange={changeValue} required></textarea>
    
                        </div>
                        <div className="row-content inner-rows">
                            <div className="columns-content">
                                <label htmlFor="city" className="label text">City</label>
                                <select name="city" id="city" className="input" onChange={changeValue}>
                                    <option value="0">Select City</option>
                                    <option value="Bangalore">Bangalore</option>
                                    <option value="Mumbai">Mumbai</option>
                                    <option value="Hyderabad">Hyderabad</option>
                                    <option value="Pune">Pune</option>
                                    <option value="Mysore">Mysore</option>
                                </select>
                            </div>
                            <div className="columns-content">
                                <label htmlFor="state" className="text label">State</label>
                                <select name="state" id="state" className="input" onChange={changeValue}>
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
                            <div className="columns-content zip">
                                <label htmlFor="zip" className="text label">Zip Code</label>
                                <input type="tel" className="input" id="zip" name="zip"  
                                value={formValue.zip} onChange={changeValue} required/>
                                
                            </div>
                        </div>
                        <div className="buttonParent">
                            <div className="submit-reset">
                                <button type="submit" className="submitButton button" id="submitButton" onClick={save}>{formValue.isUpdate? 'Update' : 'Submit'}</button>
                                <button type="reset" className="resetButton button" id="resetButton" >Reset</button>
                            </div>
                        </div>   
                    </div>
                </form>
            </div>
        </div>
    );
  }

export default AddressBookForm;