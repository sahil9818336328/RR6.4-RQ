import React from 'react'
import CocktailCardWrapper from '../assets/wrappers/CocktailCard'
import { Link } from 'react-router-dom'

const CocktailCard = ({ image, name, id, info, glass }) => {
  return (
    <CocktailCardWrapper>
      <div className='img-container'>
        <img src={image} alt={name} className='img' />
      </div>
      <div className='footer'>
        <h4>{name}</h4>
        <h5>{glass}</h5>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className='btn'>
          Details
        </Link>
      </div>
    </CocktailCardWrapper>
  )
}

export default CocktailCard
