import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

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
    <div className="d-flex justify-content-center align-center vh-100 my-3 bg-dark">
      <div className="card bg-light shadow-lg p-4 my-5" style={{width: '30rem', height: '35rem'}}>
       <h2 className="text-center text-dark mb-4">Update {recipe.name}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">Recipe Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            value={recipe.name}
            onChange={handleChange}
            required
            />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="ingredients">Ingredients:</label>
          <textarea
            id="ingredients"
            name="ingredients"
            className="form-control"
            value={recipe.ingredients}
            onChange={handleChange}
            required
            />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="directions">Direction:</label>
          <textarea
            id="directions"
            name="directions"
            className="form-control"
            value={recipe.directions}
            onChange={handleChange}
            required
            />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="cooktime">Cook Time (minutes):</label>
          <input
            type="number"
            id="cooktime"
            name="cooktime"
            className="form-control"
            value={recipe.cooktime}
            onChange={handleChange}
            required
            />
        </div>
        <button 
        className="btn btn-dark w-100"
        type="submit">
          Update Recipe
        </button>
      </form> 
      </div>
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