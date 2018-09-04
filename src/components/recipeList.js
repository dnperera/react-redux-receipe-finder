import React from "react";

const RecipeList = props => {
  return (
    <div className="col-sm-4">
      <h3 className="h3 text-center mt-2 mb-4">List of Recipes</h3>
      <ul className="list-group">
        {props.recipes.map(recipe => {
          return (
            <li
              className="list-group-item list-group-item-action"
              key={recipe.id}
              onClick={e => {
                props.onRecipeClick(recipe.id);
              }}
            >
              <span>{recipe.name}</span>
              <span>{recipe.category}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RecipeList;
