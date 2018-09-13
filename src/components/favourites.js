import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import RecipeList from "./recipeList";

const Favourites = props => {
  /**Filter the favorite recipes */
  const recipes = props.recipes.filter(
    recp => props.favourites.indexOf(recp.id) > -1
  );

  return (
    <div className="container">
      <p className="h3 text-center my-4 text-success">My Favourite Recipes</p>
      <div className="col-centered mb-4">
        <RecipeList recipes={recipes} />
      </div>
    </div>
  );
};

Favourites.propTypes = {
  recipes: PropTypes.array,
  favourites: PropTypes.array
};
const mapStateToProps = state => {
  return {
    recipes: state.currentRecipes.recipes,
    favourites: state.currentFavourites["favourites"]
  };
};
export default connect(mapStateToProps)(Favourites);
