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
import BasketList from './components/BasketList'
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      baskets: [
          {
            id: 1,
            name: "green machine",
            price: 18.50,
            items: [{name: 'kiwi'}, {name: 'apple'}, {name: 'banana'}]
          },
          {
            id: 2,
            name: "antioxidant",
            price: 28.00,
            items: [{name: 'strawberries'}, {name: 'chaga mushrooms'}, {name: 'turmeric'}]
          },
          {
            id: 3,
            name: "veggies",
            price: 22.50,
            items: [{name: 'kale'}, {name: 'chard'}, {name: 'bok choy'}]
          },
      ]
    }
  }

  render() {
    return (
      <Router>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/baskets'>Shop</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>

        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/baskets'>
            <BasketList baskets={this.state.baskets} />
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
