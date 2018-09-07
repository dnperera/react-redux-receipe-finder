import React from "react";
import PropTypes from "prop-types";
import RecipeListItem from "./recipeListItem";

const RecipeList = ({ recipes, onRecipeClick, addRemoveFavorites }) => (
  <ul className="list-group">
    {recipes.map(recipe => (
      <RecipeListItem
        key={recipe.id}
        recipe={recipe}
        onRecipeClick={onRecipeClick ? onRecipeClick : () => null}
        addRemoveFavorites={addRemoveFavorites}
      />
    ))}
  </ul>
);

RecipeList.propTypes = {
  recipes: PropTypes.array,
  onRecipeClick: PropTypes.func,
  addRemoveFavorites: PropTypes.func
};
export default RecipeList;
