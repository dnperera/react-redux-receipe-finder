import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import axios from "axios";

import Header from "./header";
import Recipes from "./recipes";
import Favourites from "./favourites";
import NotFound from "./notFound";
import "../styles/styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      currentRecipe: null
    };
  }

  //  load available recipes from the api
  componentDidMount() {
    axios.get(`${RECIPE_API}/v1/recipes`).then(res => {
      if (res.data) {
        axios.get(`${RECIPE_API}/v1/recipes/${res.data[0].id}`).then(result => {
          this.setState({
            recipes: res.data,
            currentRecipe: result.data
          });
        });
      }
    });
  }

  onRecipeClick = id => {
    axios.get(`${RECIPE_API}/v1/recipes/${id}`).then(res => {
      this.setState({ currentRecipe: res.data });
    });
  };

  addRemoveFavorites = id => {
    // this.setState(({ favourites, ...state }) => {
    //   /*
    //   first check selected id already in the favorites array and then update the state */
    //   const index = favourites.indexOf(id);
    //   if (index !== -1) {
    //     return {
    //       ...state,
    //       favourites: favourites.filter(recipeId => recipeId !== id)
    //     };
    //   }
    //   return {
    //     ...state,
    //     favourites: [...favourites, id]
    //   };
    // });
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <main>
            <Header />
            <Switch>
              <Redirect from="/home" to="/" />
              <Route
                exact
                path="/"
                render={() => (
                  <Recipes
                    state={this.state}
                    onRecipeClick={this.onRecipeClick}
                    addRemoveFavorites={this.addRemoveFavorites}
                  />
                )}
              />
              <Route
                exact
                path="/favourites"
                render={() => (
                  <Favourites
                    state={this.state}
                    onRecipeClick={this.onRecipeClick}
                    addRemoveFavorites={this.addRemoveFavorites}
                  />
                )}
              />
              <Route component={NotFound} />
            </Switch>
          </main>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
