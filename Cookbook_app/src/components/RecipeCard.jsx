import React from "react";

export const RecipeCard = (props) => {
  return (
    <>
      <ul className="recipeInfo">
        <li>name: {props.recipe.name}</li>
        <li>Cooktime: {props.recipe.cooktime}</li>
        <li>Ingredients: {props.recipe.ingredients} </li>
        <li>Instructions: {props.recipe.instructions}</li>
      </ul>
    </>
  );
};
