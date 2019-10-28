import React from 'react';
import { Link } from 'react-router-dom';

export default function CocktailsList(props) {
  console.log(props);
  return (
    <div>
      <h1>Cocktails Explorer</h1>
      <ul>
        {props.cocktails.map(cocktail => (
          <li key={cocktail.id}>
            <Link
              onClick={() => props.selectCocktail(cocktail.id)}
              to={`/cocktails/${cocktail.id}`}
            >
              {cocktail.category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
