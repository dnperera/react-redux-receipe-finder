import React from "react";
import PropTypes from "prop-types";
import RecipeList from "./recipeList";

const Favourites = ({ state, onRecipeClick, addRemoveFavorites }) => {
  /**Filter the favorite recipes */
  const recipes = state.recipes.filter(
    recp => state.favourites.indexOf(recp.id) > -1
  );

  return (
    <div className="container">
      <p className="h3 text-center my-4 text-success">My Favourite Recipes</p>
      <div className="col-centered mb-4">
        <RecipeList recipes={recipes} addRemoveFavorites={addRemoveFavorites} />
      </div>
    </div>
  );
};

Favourites.propTypes = {
  state: PropTypes.object,
  onRecipeClick: PropTypes.func,
  addRemoveFavorites: PropTypes.func
};
export default Favourites;
