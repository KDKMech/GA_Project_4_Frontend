import React, { useState } from 'react';

function UpdateRecipe({ updateRecipeInDjango, initialRecipe }) {
  const [recipe, setRecipe] = useState(initialRecipe);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({
      ...recipe,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the update function
    updateRecipeInDjango(recipe);
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
            id="direction"
            name="direction"
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
