import React from 'react'
import { useParams } from 'react-router-dom'



const Basket = ({data}) => {
  const { basketId } = useParams()

  const basket = data.find(basket => basket.id === Number(basketId))

  const basketInfo = basket ? 
  (
    <div>
      <h3>{ basket.name }</h3>
      <p>{ basket.price } </p>
    </div>
  ) :
  <h2>Hmmm, we don't have a basket of that name. Contact us if you think we should!</h2>

  return (
    <article>
      { basketInfo }
    </article>
  )
}

export default Basket