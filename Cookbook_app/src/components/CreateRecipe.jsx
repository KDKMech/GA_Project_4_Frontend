import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

function RecipeForm({ createRecipeFromDjango }) {
  const [formData, setFormData] = useState({
    name: '',
    ingredients: '',
    directions: '',
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
    createRecipeFromDjango(formData);
    setFormData({
      name: '',
      ingredients: '',
      directions: '',
      cooktime: '',
    });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
      <div className="card bg-light shadow-lg p-4" style={{ width: '30rem' }}>
        <h2 className="text-center text-dark mb-4">Create Recipe</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Recipe Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="ingredients" className="form-label">
              Ingredients:
            </label>
            <textarea
              id="ingredients"
              name="ingredients"
              value={formData.ingredients}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="directions" className="form-label">
              Directions:
            </label>
            <textarea
              id="directions"
              name="directions"
              value={formData.directions}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="cooktime" className="form-label">
              Cook Time (minutes):
            </label>
            <input
              type="number"
              id="cooktime"
              name="cooktime"
              value={formData.cooktime}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <button type="submit" className="btn btn-dark w-100">
            Create Recipe
          </button>
        </form>
      </div>
    </div>
  );
}

export default RecipeForm;
