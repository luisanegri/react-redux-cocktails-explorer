import { combineReducers } from 'redux';
import cocktails from './cocktails';
import selectedCocktail from './selected-cocktail';

export default combineReducers({
  cocktails,
  selectedCocktail
});
