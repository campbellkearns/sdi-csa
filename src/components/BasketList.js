import React from 'react'
import { Switch, Link, Route, useRouteMatch } from 'react-router-dom'

import Basket from './Basket'

const BasketList = ({ baskets }) => {
  const match = useRouteMatch()

  const basketList = baskets.map(basket => {
    return (
      <li>
        <Link to={`${ match.url }/${basket.id}`}>{basket.name}</Link>
      </li>
    )
  })

  return(
    <>
      <h3>Basket Options</h3>
      <ul>{
            baskets.length > 0 ?
              basketList
              :
              <p>Due to high demand, we do not have any baskets to offer at this time.</p>
          }</ul>
      <Switch>
        <Route path={`${match.url}/:basketId`}>
          <Basket data={baskets} />
        </Route>
        <Route>
          <p>select your basket!</p>
        </Route>
      </Switch>
    </>
  )
}

export default BasketList