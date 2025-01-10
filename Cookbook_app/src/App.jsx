import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {getRecipesFromDjango, createRecipeFromDjango } from './CookBookService'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'

// import RecipeList from './components/RecipeList'
// import CreateRecipe from './components/CreateRecipe'

// bootstrap import link
import 'bootstrap/dist/css/bootstrap.min.css'
import RecipeForm from './components/CreateRecipe'



function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  const handleSelection = (event) => {
    setCurrentPage(event.target.value);
  }
  
  return (
    <div className="bg-white">
      <Header/>
      <Navbar handleSelection={handleSelection}/>
      <div className="bg-white">
           {currentPage === "Home" ? <Home /> : ""}
           {currentPage === "RecipeList" ? <RecipeList/> : ""}
           {currentPage === "RecipeForm" ? <RecipeForm createRecipeFromDjango={createRecipeFromDjango}/> : ""} 
      </div>
      <Footer/>
    </div>
  )
}

export default App

// const buttonClickTest = async (event) => {
  // const results = await [getRecipesFromDjango()]
  // console.log(results);
  {/* <button onClick={buttonClickTest}>function test</button> */}
  {/* <ul>
    {}
  </ul> */}