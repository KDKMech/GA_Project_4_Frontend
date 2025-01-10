import React, { useState } from 'react';

function RecipeForm({ createRecipeFromDjango }) {
  const [formData, setFormData] = useState({
    name: '',
    ingredients: '',
    direction: '',
    cooktime: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the function with the form data
    createRecipeFromDjango(formData);
    // Clear the form
    setFormData({
      name: '',
      ingredients: '',
      direction: '',
      cooktime: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Recipe Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="ingredients">Ingredients:</label>
        <textarea
          id="ingredients"
          name="ingredients"
          value={formData.ingredients}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="direction">Direction:</label>
        <textarea
          id="direction"
          name="direction"
          value={formData.direction}
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
          value={formData.cooktime}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Create Recipe</button>
    </form>
  );
}


export default RecipeForm;
