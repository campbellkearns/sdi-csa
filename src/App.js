import { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      baskets: []
    }
  }

  render() {
    return (
      <Router>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>

        <Switch>
          <Route exact path='/'>
            <Home baskets={this.state.baskets} />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
        </Switch>
      </Router>
    );
  }

}

export default App;
