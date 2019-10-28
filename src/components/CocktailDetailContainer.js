import React from 'react';
import { connect } from 'react-redux';
import CocktailDetail from './CocktailDetail';

class CocktailsDetailContainer extends React.Component {
  render() {
    console.log(this.props.cocktails);
    if (!this.props.cocktail) return null;
    return <CocktailDetail cocktail={this.props.cocktail} />;
  }
}

// Accessing the state using connect and mapStateToProps

// We define a function mapStateToProps that defines what part of the state
// (from the redux store) is required as data in this component.
const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.id;
  if (state.selectedCocktail !== null) {
    return {
      cocktail: state.cocktails.find(cocktail => cocktail.id === id)
    };
  }
  return {};
};

// connect will call the mapStateToProps after an action has been dispatched and handled
// by the reducers (like store.subscribe)
export default connect(mapStateToProps)(CocktailsDetailContainer);
