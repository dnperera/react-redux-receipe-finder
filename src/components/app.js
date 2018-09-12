import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getRecipes } from "../actions/getRecipes";
import Header from "./header";
import Recipes from "./recipes";
import Favourites from "./favourites";
import NotFound from "./notFound";
import "../styles/styles.css";

class App extends Component {
  constructor(props) {
    super(props);
  }

  //  load available recipes from the api
  componentDidMount() {
    this.props.getRecipes();
  }

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
              <Route exact path="/" component={Recipes} />
              {/* <Route
                exact
                path="/favourites"
                render={() => (
                  <Favourites
                    state={this.state}
                    onRecipeClick={this.onRecipeClick}
                    addRemoveFavorites={this.addRemoveFavorites}
                  />
                )}
              /> */}
              <Route component={NotFound} />
            </Switch>
          </main>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(
  null,
  { getRecipes }
)(App);
