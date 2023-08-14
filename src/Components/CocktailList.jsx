import React from 'react'
import CocktailListWrapper from '../assets/wrappers/CocktailList'
import CocktailCard from '../Components/CocktailCard'

const CocktailList = ({ drinks }) => {
  if (!drinks) {
    return (
      <h4 style={{ textAlign: 'center' }}>No matching cocktails found...</h4>
    )
  }

  const formattedDrinks = drinks.map((drink) => {
    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = drink

    return {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      info: strAlcoholic,
      glass: strGlass,
    }
  })

  return (
    <CocktailListWrapper>
      {formattedDrinks?.map((drink) => {
        return <CocktailCard key={drink.id} {...drink} />
      })}
    </CocktailListWrapper>
  )
}

export default CocktailList
