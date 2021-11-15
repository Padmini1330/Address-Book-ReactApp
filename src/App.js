import './App.css';
import React, { Component }  from 'react';
import AddressBookForm from './components/address-book-form/addressbookform.jsx';
import AddressBookHome from './components/address-book-home/addressbookhome.jsx';
import { Route,Routes,BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>  
    <Routes>
      <Route exact path="/form" element={<AddressBookForm />}/>
      <Route exact path="/" element={<AddressBookHome />}/>
    </Routes>
    </BrowserRouter>
  );
}
export default App;
