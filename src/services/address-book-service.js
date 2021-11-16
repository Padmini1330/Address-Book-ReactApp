import config from "../config/config";
import React, { Component } from 'react'

const axios=require('axios').default;

export default class AddressBookService{

    baseUrl=config.baseUrl;
    addContact(data)
    {
        console.log(data)
        return axios.post(`${this.baseUrl}contact`,data);
    }
}