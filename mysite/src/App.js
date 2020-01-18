import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import About from './components/About'
import Links from './components/Links'
import Contact from './components/Contact'

class App extends Component {


  render (){
    return (
      <div className="joes-site">
        <Router>
          <header>
            <Link className="full-name" to='/'>Joseph Vance Gailey III</Link>
          </header>
            <div className="nav">
              <Link className='link' to='/home/'>HOME</Link>
              <Link className='link' to='/about/'>ABOUT</Link>
              <Link className='link' to='/links/'>LINKS</Link>
              <Link className='link' to='/contact/'>CONTACT</Link>
            </div>
            <Switch>
              <Route path='/home/' component={Home}/>
              <Route path='/about/' component={About}/>
              <Route path='/links/' component={Links}/>
              <Route path='/contact/' component={Contact}/>
            </Switch>
          </Router>
          <div className="custom-footer"></div>
          <div className="custom-header"></div>
          <a className="easter-egg" href="https://www.youtube.com/watch?v=z8ZqFlw6hYg"></a>
          <div className="copyright">© JMW 2020</div>

      </div>
    );
  }
}
export default App;
