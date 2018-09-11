import React from "react";
import { connect } from "react-dedux";
import PropTypes from "prop-types";
import RecipeList from "./recipeList";

const Favourites = ({ state, favourites, addRemoveFavorites }) => {
  console.log(favourites);
  /**Filter the favorite recipes */
  const recipes = state.recipes.filter(
    recp => props.favourites.indexOf(recp.id) > -1
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
const mapStateToProps = state => {
  return {
    favourites: state.favourites
  };
};
export default connect(mapStateToProps)(Favourites);
