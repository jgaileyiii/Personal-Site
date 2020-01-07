import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import About from './components/About'
import Links from './components/Links'

class App extends Component {

  render (){
    return (
      <div className="joes-site">
        <Router>
          <header>
            <Link className="full-name" to='/home/'>Joseph Vance Gailey III</Link>
          </header>
            <div className="nav">
              <Link className='link' to='/home/'>Home</Link>
              <Link className='link' to='/about/'>About</Link>
              <Link className='link' to='/links/'>Links</Link>
            </div>
            <Switch>
              <Route path='/home/' component={Home}></Route>
              <Route path='/about/' component={About}></Route>
              <Route path='/links/' component={Links}></Route>
            </Switch>
          </Router>
          <div className="custom-footer"></div>
      </div>
    );
  }
}
export default App;
