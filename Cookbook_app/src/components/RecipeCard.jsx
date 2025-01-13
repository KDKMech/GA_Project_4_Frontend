import React from "react";

export const RecipeCard = (data) => {
  return (
    <>
      <ul className="recipeInfo">
        <li>name: {data.name}</li>
        <li>Cooktime: {data.cooktime}</li>
        <li>Ingredients: {data.ingredients} </li>
        <li>Instructions: {data.instructions}</li>
      </ul>
      <button>update</button>
      <button>delete</button>
        
    </>
  );
};

