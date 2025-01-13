import React, { useEffect, useState } from 'react';

function UpdateRecipe({ updateRecipeInDjango, initialRecipe }) {
  
  
  
  
  const [recipe, setRecipe] = useState(initialRecipe);
  console.log(recipe);
  
  
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({
      ...recipe,
      [name]: value,
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const recipeObject = {
      id: recipe.id,
      name: recipe.name,
      ingredients: recipe.ingredients,
      directions: recipe.directions,
      cooktime: recipe.cooktime
    }
    console.log(recipeObject);
    
    // Call the update function
    updateRecipeInDjango(recipeObject.id, recipeObject);
  };
  
  return (
    <div>
      <h2>Update Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Recipe Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={recipe.name}
            onChange={handleChange}
            required
            />
        </div>
        <div>
          <label htmlFor="ingredients">Ingredients:</label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={recipe.ingredients}
            onChange={handleChange}
            required
            />
        </div>
        <div>
          <label htmlFor="directions">Direction:</label>
          <textarea
            id="directions"
            name="directions"
            value={recipe.directions}
            onChange={handleChange}
            required
            />
        </div>
        <div>
          <label htmlFor="cooktime">Cook Time (minutes):</label>
          <input
            type="number"
            id="cooktime"
            name="cooktime"
            value={recipe.cooktime}
            onChange={handleChange}
            required
            />
        </div>
        <button type="submit">
          Update Recipe
        </button>
      </form>
    </div>
  );
}

export default UpdateRecipe;

// useEffect(() => {
  //   if (initialRecipe) {
    //     setRecipe(initialRecipe)
    //   }
    // })
    // console.log(initialRecipe);
    // console.log(initialRecipe);
    // console.log(recipe.id);
    // console.log('test', recipe.id, recipeObject);