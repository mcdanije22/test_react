import React, { Component } from 'react';
import './App.css';
import ContactList from './ContactList';


class App extends Component {
  constructor(props){
    super(props);
    
  }
  render() {

   
    return (
    <div> 

    <ContactList   />

    </div>
    
    )
  }
}

export default App;
