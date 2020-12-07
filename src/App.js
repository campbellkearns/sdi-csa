import { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import About from './components/About'
import Contact from './components/Contact'
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
      <div className="App">
        <Router>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>

          <Switch>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/contact'>
              <Contact />
            </Route>
          </Switch>

        </Router>

        <h1>Welcome to the SDI CSA [virtual]</h1>
        <p>please select a basket</p>
        <ul>
        {
          this.state.baskets.length > 0 ?
          this.state.baskets.map(basket => <li>{ basket.name }</li>)
          :
          <p>Due to high demand, we do not have any baskets to offer at this time.</p>
        }
        </ul>
      </div>
    );
  }

}

export default App;
