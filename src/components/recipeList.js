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
              role="button"
            >
              <input
                className="mr-2 p-2 bg-info"
                type="checkbox"
                onClick={e => {
                  e.stopPropagation();
                  props.addRemoveFavorites(recipe.id);
                }}
              />
              <span>{recipe.name}</span>
              <span className="text-info ml-2 ">- {recipe.category}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RecipeList;
