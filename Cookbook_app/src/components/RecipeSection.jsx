import React from "react";
import RecipeList from "./RecipeList";
import UpdateRecipe from "./UpdateRecipe";
import { useState } from "react";
import { getRecipesFromDjango, updateRecipesFromDjango } from "../CookBookService";

export const RecipeSection = () => {
    const [recipePage, setRecipePage] = useState("RecipeList")
    const [data, setData] = useState([])

    const handleSection = (e) => {
        // setData()
        setRecipePage(e.target.value)
    }

    
    
        
    


    return (
        <> 
            {recipePage === "RecipeList" ? <RecipeList handleSection={handleSection} getRecipesFromDjango={getRecipesFromDjango} setData={setData}/> : ""}
            {recipePage === "UpdateRecipe" ? <UpdateRecipe handleSection={handleSection} initialRecipe={data} updateRecipeInDjango={updateRecipesFromDjango}/> : ""}
        </>
    )
}