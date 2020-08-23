import React from 'react';

import {BrowserRouter as Router,Route} from 'react-router-dom';

import Connect from './Components/Connect';
import Talk from './Components/Talk';

import './App.css';


 
const App = () => (

 <Router>
    <Route path='/' exact component={Connect} />
    <Route path='/talk' exact component ={Talk} />
  </Router>

 
);

export default App;
