import React from 'react';

const Home = ({ baskets }) => {
    return (
      <>
        <h1>Welcome to the SDI CSA [virtual]</h1>
        <p>please select a basket</p>
        <ul>
          {
            baskets.length > 0 ?
              baskets.map(basket => <li>{basket.name}</li>)
              :
              <p>Due to high demand, we do not have any baskets to offer at this time.</p>
          }
        </ul>
      </>
    )
}

export default Home