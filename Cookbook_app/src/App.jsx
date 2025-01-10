import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getRecipesFromDjango } from './CookBookService'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'






function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <Header/>
      <Home/>
      <Footer/>
    </>
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