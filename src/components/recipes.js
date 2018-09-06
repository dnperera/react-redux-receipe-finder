import React, { Component } from "react";
import RecipeList from "./recipeList";
import RecipeDetail from "./recipeDetail";
import axios from "axios";

class Recipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      currentRecipe: null,
      favourites: []
    };
  }
  //load available recipes from the api
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
    this.setState(({ favourites, ...state }) => {
      //first check selected id already in the favorites array and then update the state
      let index = favourites.indexOf(id);
      if (index > -1) {
        return {
          ...state,
          favourites: favourites.filter(recipeId => recipeId != id)
        };
      } else {
        return {
          ...state,
          favourites: [...favourites, id]
        };
      }
    });
    //first check selected id already in the favorites array and then update the state
    // const currentFavourites = [...this.state.favourites];
    // if (currentFavourites.indexOf(id) > -1) {
    //   this.setState({
    //     favourites: currentFavourites.filter(recipeId => recipeId !== id)
    //   });
    // } else {
    //   this.setState({
    //     favourites: [...currentFavourites, id]
    //   });
    // }
  };
  render() {
    const { recipes, currentRecipe } = this.state;
    console.log("favorites -->", this.state.favourites);
    return (
      <div className="container  bg-light px-4">
        <div className="row">
          <RecipeList
            recipes={recipes}
            onRecipeClick={this.onRecipeClick}
            addRemoveFavorites={this.addRemoveFavorites}
          />
          <RecipeDetail style={{ flex: 5 }} recipe={currentRecipe} />
        </div>
      </div>
    );
  }
}

export default Recipes;
