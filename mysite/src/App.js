import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import About from './components/About'
import Links from './components/Links'
import Contact from './components/Contact'

class App extends Component {

  postMessage

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
              <Link className='link' to='/contact'>Contact</Link>
            </div>
            <Switch>
              <Route path='/home/' component={Home}/>
              <Route path='/about/' component={About}/>
              <Route path='/links/' component={Links}/>
              <Route 
                path='/contact/' 
                component={Contact}
                render={(props) => <Contact {...props}/>}
              />
            </Switch>
          </Router>
          <div className="custom-footer"></div>
          <div className="custom-header"></div>
          <div className="copyright"></div>

      </div>
    );
  }
}
export default App;
