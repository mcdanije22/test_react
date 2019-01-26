import React from 'react';
import './App.css';
import ContactList from './ContactList';
import './App.scss';
import Navagation from './Navagation';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import About from './About';
import Error from './Error';


const App =()=>{

   
    return (
  <BrowserRouter>
      <div>
        <Navagation />
    <Switch>
        <Route path='/' component={ContactList} exact />
        <Route path='/about' component={About} />
        <Route component={Error}/>
    {/* <ContactList   /> */}
    </Switch>
    </div>
   </BrowserRouter>
    )
  }


export default App;
