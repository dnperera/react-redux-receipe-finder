import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentRecipe } from "../actions/getRecipes";
import RecipeList from "./recipeList";
import RecipeDetail from "./recipeDetail";

const Recipes = props => {
  const { recipes, currentRecipe } = props;
  const onRecipeClick = id => {
    props.getCurrentRecipe(id);
  };
  return (
    <div className="container  bg-light px-4">
      <div className="row">
        <div className="col-sm-4">
          <h3 className="h3 text-center mt-2 mb-4">List of Recipes</h3>
          <RecipeList recipes={recipes} onRecipeClick={onRecipeClick} />
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

const mapStateToProps = state => {
  return {
    recipes: state.currentRecipes.recipes,
    currentRecipe: state.currentRecipes.currentRecipe
  };
};
export default connect(
  mapStateToProps,
  { getCurrentRecipe }
)(Recipes);
