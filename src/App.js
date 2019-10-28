import React from 'react';
import './App.css';
import CocktailsListContainer from './components/CocktailsListContainer';
import { Route, Switch } from 'react-router-dom';
import CocktailDetailContainer from './components/CocktailDetailContainer';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/cocktails" component={CocktailsListContainer} />
        <Route path="/cocktails/:id" component={CocktailDetailContainer} />
      </Switch>
    </div>
  );
}

export default App;
