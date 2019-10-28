import React from 'react';
import { connect } from 'react-redux';
import CocktailsList from './CocktailsList';

class CocktailsListContainer extends React.Component {
  selectCocktail = id => {
    this.props.dispatch({
      type: 'SELECT_COCKTAIL',
      payload: id
    });
  };
  render() {
    console.log(this.props.cocktails);

    return (
      <CocktailsList
        cocktails={this.props.cocktails}
        selectCocktail={this.selectCocktail}
      />
    );
  }
}

// Accessing the state using connect and mapStateToProps

// We define a function mapStateToProps that defines what part of the state
// (from the redux store) is required as data in this component.
const mapStateToProps = state => {
  return {
    // the state is in pizzas.js
    cocktails: state.cocktails
  };
};

// connect will call the mapStateToProps after an action has been dispatched and handled
// by the reducers (like store.subscribe)
export default connect(mapStateToProps)(CocktailsListContainer);
