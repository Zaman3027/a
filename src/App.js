import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
     <Router>
       <Navbar/>
       <br/>
       <Route path='/' exact component ={}/>
       <Route path='/edit/:id' exact component ={}/>
       <Route path='/create' exact component ={}/>
       <Route path='/user' exact component ={}/>
     </Router>
    );
  }
}

export default App;
