import React from "react";
import PropTypes from "prop-types";
import RecipeList from "./recipeList";
import RecipeDetail from "./recipeDetail";

const Recipes = props => {
  const { recipes, currentRecipe } = props.state;
  return (
    <div className="container  bg-light px-4">
      <div className="row">
        <div className="col-sm-4">
          <h3 className="h3 text-center mt-2 mb-4">List of Recipes</h3>
          <RecipeList
            recipes={recipes}
            onRecipeClick={props.onRecipeClick}
            addRemoveFavorites={props.addRemoveFavorites}
          />
        </div>
        <RecipeDetail recipe={currentRecipe} />
      </div>
    </div>
  );
};

Recipes.propTypes = {
  recipes: PropTypes.array,
  onRecipeClick: PropTypes.func,
  addRemoveFavorites: PropTypes.func,
  currentRecipe: PropTypes.object
};
export default Recipes;
