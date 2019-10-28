import React from 'react';

export default function CocktailDetail(props) {
  //   console.log(props);
  return (
    <div>
      <h1>Cocktail Details</h1>
      <ul>
        <li key={props.cocktail.id}>
          <img src={props.cocktail.thumbnail} alt="cocktail"></img>
        </li>
      </ul>
    </div>
  );
}
