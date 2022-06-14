import React from 'react';

const Order = ({name, ingredients}) => {

  return(
    <div className="order">
        <h3>{name}</h3>
        <ul className="ingredient-list">
          {ingredients.map(ingredient => {
            return <li key={ingredient}>{ingredient}</li>
          })}
        </ul>
      </div>
  )
}

export default Order