import React from 'react'
import { useParams } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import { bounce, bounceInLeft } from 'react-animations';

const growthAnimation = keyframes`${bounceInLeft}`

const FontGrow = styled.article`
  animation: 2s ${growthAnimation};
`

const Basket = ({data}) => {
  const { basketId } = useParams()

  const basket = data.find(basket => basket.id === Number(basketId))

  const basketInfo = basket ? 
  (
    <FontGrow key={basket.id}>
      <h3>{ basket.name }</h3>
      <p>{ basket.price } </p>
    </FontGrow>
  ) :
  <h2>Hmmm, we don't have a basket of that name. Contact us if you think we should!</h2>

  return (
    <article>
      { basketInfo }
    </article>
  )
}

export default Basket