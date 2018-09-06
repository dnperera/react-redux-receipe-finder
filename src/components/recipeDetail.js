import React from "react";
import PropTypes from "prop-types";

const RecipeDetail = ({ style, recipe }) => {
  if (!recipe) {
    return (
      <div style={style}>
        <p>Please select a receipe from the list to see details!.</p>
      </div>
    );
  }

  return (
    <div className="col-sm-8  border-left border-dark">
      <h3 className="h3 text-center mt-2 mb-4">{recipe.name}</h3>
      <div className="row">
        <div className="col-sm-12">
          <img
            className="img-responsive rounded mx-auto d-block "
            src={recipe.image}
            width="100%"
            alt={recipe.name}
          />
        </div>
      </div>
      <div className="my-4">
        <span className=" mr-4 font-italic  text-primary h5">
          {recipe.category}
        </span>
        <span className="p-3 badge badge-pill badge-success">
          {recipe.calories}
          cal
        </span>
      </div>
      <div className="card my-4">
        <h3 className="card-header">Ingredients</h3>
        <div className="card-body">
          <ul>
            {recipe.ingredients.map(ing => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="card my-4">
        <h3 className="card-header ">Directons</h3>
        <div className="card-body">
          <ol>
            {recipe.steps.map(step => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};
RecipeDetail.propTypes = {
  style: PropTypes.object,
  recipe: PropTypes.object
};

export default RecipeDetail;
