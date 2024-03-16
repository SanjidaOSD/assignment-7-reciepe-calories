
import './App.css'
import Header from './Components/Header/Header'

import { useEffect } from 'react'
import { useState } from 'react'
import Recipe from './Components/Recipe'



function App() {
  const [recipes, setRecipes] = useState([]);
  const [cart, setCart] = setCart([]);


  useEffect(() =>{
    fetch('./recipeData.json')
    .then(res =>res.json())
    .then(data => {
      setRecipes(data);
    })
  },[])

const handleCart = (cart) => {
  const isExist = cart.find(recipe => recipe.id == cart.id);
  console.log(isExist)
}
  return (
    <>
      <Header></Header>

      <div className="main-container lg:flex lg:justify-around lg:p-10 mt-16 lg:mt-0 ">
        <div className="cards-container lg:grid lg:grid-cols-2 gap-2">
          {
            recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe} handleCart={handleCart} ></Recipe>)
          }
         
        </div>
        {/* carts container */}
        <div className=" lg:w-3/5 shadow-2xl p-4">
          <h1 className='text-xl font-bold text-center mb-2 underline'>Want to cook: { }</h1>
          <div className='border h-0 w-full bg-black'></div>
          <div className=' flex justify-around gap-12'>
            <p>Name</p>
            <p>Time</p>
            <p>Calories</p>
          </div>
        </div>
      </div>


    </>
  )
}

export default App
