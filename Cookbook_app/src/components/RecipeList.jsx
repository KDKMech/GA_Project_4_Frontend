import React from 'react'
import { getRecipesFromDjango } from './CookBookService'
import { RecipeCard } from './RecipeCard'



const RecipeList = (props) => {
    return (
        <>
            {props.map((recipe, index) =>(
                <li id='RecipeCardItem' key={index}>
                    <RecipeCard props={recipe}/>
                </li>
            ))}
        </>
    )
}