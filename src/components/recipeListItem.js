import React from "react";
import PropTypes from "prop-types";

const RecipeListItem = ({ recipe, addRemoveFavorites, onRecipeClick }) => (
  <li
    className="list-group-item list-group-item-action"
    onClick={() => {
      onRecipeClick(recipe.id);
    }}
    role="button"
  >
    <input
      className="mr-2 p-2 bg-info"
      type="checkbox"
      onClick={e => {
        e.stopPropagation();
        addRemoveFavorites(recipe.id);
      }}
    />
    <span>{recipe.name}</span>
    <span className="text-info ml-2 "> {recipe.category}</span>
  </li>
);

RecipeListItem.propTypes = {
  recipe: PropTypes.object,
  onRecipeClick: PropTypes.func,
  addRemoveFavorites: PropTypes.func
};
export default RecipeListItem;
