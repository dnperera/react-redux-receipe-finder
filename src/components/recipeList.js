import React from "react";
import { connect } from "react-redux";
import { updateFavourites } from "../actions/getFavourites";
import PropTypes from "prop-types";
import RecipeListItem from "./recipeListItem";

const RecipeList = ({
  recipes,
  onRecipeClick,
  favourites,
  updateFavourites
}) => {
  const addRemoveFavorites = id => {
    /*first check selected id already in the favorites array and then update the state */
    const index = favourites.indexOf(id);
    //If id exists
    if (index !== -1) {
      //remove the id from the favourites array and update the store
      favourites = favourites.filter(fav => id !== fav);
    } else {
      favourites = [...favourites, id];
    }
    updateFavourites(favourites);
  };
  return (
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
};

RecipeList.propTypes = {
  recipes: PropTypes.array,
  onRecipeClick: PropTypes.func,
  addRemoveFavorites: PropTypes.func
};
const mapStateToProps = state => {
  return { favourites: state.currentFavourites["favourites"] };
};
export default connect(
  mapStateToProps,
  { updateFavourites }
)(RecipeList);
