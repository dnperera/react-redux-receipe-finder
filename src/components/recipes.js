import React from "react";
import PropTypes from "prop-types";
import RecipeList from "./recipeList";
import RecipeDetail from "./recipeDetail";

const Recipes = ({
  recipes,
  onRecipeClick,
  addRemoveFavorites,
  currentRecipe
}) => (
  <div className="container  bg-light px-4">
    <div className="row">
      <RecipeList
        recipes={recipes}
        onRecipeClick={onRecipeClick}
        addRemoveFavorites={addRemoveFavorites}
      />
      <RecipeDetail recipe={currentRecipe} />
    </div>
  </div>
);

Recipes.propTypes = {
  recipes: PropTypes.array,
  onRecipeClick: PropTypes.func,
  addRemoveFavorites: PropTypes.func,
  currentRecipe: PropTypes.object
};
export default Recipes;
