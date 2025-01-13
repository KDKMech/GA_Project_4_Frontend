
import React, { useState, useEffect } from "react";
import { deleteRecipesFromDjango, updateRecipesFromDjango } from "../CookBookService";

function RecipeList({ getRecipesFromDjango, handleSection, setData}) {
    const [recipes, setRecipes] = useState([]);
    
    // Function to fetch all recipes
    const fetchAllRecipes = async () => {
        try {
            const data = await getRecipesFromDjango();
      setRecipes(data);
    } catch (error) {
        console.error("Error fetching recipes:", error);
    }
};

// Use `useEffect` to fetch recipes when the component mounts
useEffect(() => {
    fetchAllRecipes();
}, []);

// const handleClick = (e) => {
//     e.preventDefault()
//     // updateRecipesFromDjango()    

// }

const handleDelete = async (id) => {
  if (window.confirm("Are you sure you want to delete this recipe?")) {
    try {
      await deleteRecipesFromDjango(id);
      alert("Recipe deleted successfully!");
      fetchAllRecipes(); // Refresh the recipes list
    } catch (error) {
      console.error("Error deleting recipe:", error);
    }
  }
};

// const DeleteRecipe = (id) => {
//   const recipeToBeDeleted = recipes.filter((recipe) => recipe.id !== id)
//   setRecipes(recipeToBeDeleted)
// }

const handleClick = (e, recipe) => {
    setData({
        id: recipe.id,
        name: recipe.name,
        ingredients: recipe.ingredients,
        directions: recipe.directions,
        cooktime: recipe.cooktime
    })
    handleSection(e)
    
    
}

return (
    <div>
      <h2>All Recipes</h2>
      {recipes.length === 0 ? (
          <p>No recipes found.</p>
        ) : (
            <ul>
          {recipes.map((recipe) => (
              <li key={recipe.id} id="RecipeCardItem">
              <h3>{recipe.name}</h3>
              <p>
                <strong>Ingredients:</strong> {recipe.ingredients}
              </p>
              <p>
                <strong>Directions:</strong> {recipe.directions}
              </p>
              <p>
                <strong>Cook Time:</strong> {recipe.cooktime} minutes
              </p>
              <button onClick={(e) => handleClick(e, recipe)} value="UpdateRecipe">update</button>
              <button onClick={() => handleDelete(recipe.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default RecipeList;
// import React from "react";
// // import { getRecipesFromDjango } from './CookBookService'
// import { RecipeCard } from "./RecipeCard";
// // import { getRecipesFromDjango } from "../CookBookService";

// const RecipeList = ({recipes}) => {
    //   //   const data = getRecipesFromDjango();
    //   //   if (!data) {
        //   //     return <p>Loading...</p>
        //   //   }
        //   //   console.log(data);
        //   console.log(recipes);
        
        //   return (
            //     <>
            //       <ul>
            //         {recipes.map((recipe, index) => (
                //           <li id="RecipeCardItem" key={index}>
                //             <RecipeCard data={recipe} />
                //           </li>
                //         ))}
                //       </ul>
                //     </>
                //   );
                // };
                // // RecipeList.propTypes = {
                    // //     recipes: PropTypes.array.isRequired
                    // // };
                    
                    // export default RecipeList;
                    // // const listRecipes = () => {
                        // // }
                        // // listRecipes()
                        
                        // Sufian Bhatti
                        // :headphones:  10:47 AM
                        // console.log(data);
                        // const arrayOfRecipeData = (recipe) => {
                        //     const recipeToUpdate = {
                        //         name: recipe.name,
                        //         ingredients: recipe.ingredients,
                        //         directions: recipe.directions,
                        //         cooktime: recipe.cooktime
                        //     }
                        //     return recipeToUpdate
                        // }