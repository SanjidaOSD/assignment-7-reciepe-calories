
import './App.css'
import Header from './Components/Header/Header'

import { useEffect } from 'react'
import { useState } from 'react'
import Recipe from './Components/Recipe'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [recipes, setRecipes] = useState([]);
  const [carts, setCarts] = useState([]);
  // const [cookCount, setWantToCookCount] = useState(0);
  // const [cookFinishCount, setCookFinishCount] = useState(0);
  const [cooking, setCooking] = useState([]);


  useEffect(() => {
    fetch('./recipeData.json')
      .then(res => res.json())
      .then(data => {
        setRecipes(data);
      })
  }, [])

  const handleCart = (recipe) => {
    const isExist = carts.find(cart => cart.id == recipe.id);
    if (!isExist) {
      setCarts([...carts, recipe]);
      // setWantToCookCount(cookCount + 1);
     
    }
    else {
      toast("All ready exist")    }
  };

  const handleDelete = (id, recipe) => {
    const isExist = cooking.find(cooking => cooking.id == recipe.id);
    if (!isExist) {
      setCooking([...cooking, recipe])
    }
    const newCart = carts.filter(recipe => recipe.id != id);
    setCarts(newCart);
    // setWantToCookCount(cookCount - 1);
    // setCookFinishCount(cookFinishCount + 1)

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
          <h1 className='text-xl font-bold text-center mb-2 underline'>Want to cook: {carts.length}</h1>
          <div className='border h-0 w-full bg-black'></div>
          <div className=' flex justify-around'>
            <p>Name</p>
            <p>Time</p>
            <p>Calories</p>
          </div>
          <div className='border h-0 w-full bg-black'></div>

          <div className='mt-6'>
            {carts.map((recipe, index) => (
              <div key={index} className="cart-details flex justify-around shadow-md mb-4">
                <p>{index + 1}</p>
                <p>{recipe.name}</p>
                <p>{recipe.time}min</p>
                <p>{recipe.calories}cal</p>
                <button onClick={() => handleDelete(recipe.id, recipe)} className="btn bg-green-400">Preparing</button>
                <ToastContainer />
              </div>
            ))}
          </div>


          <h1 className='text-xl font-bold text-center mb-2 underline'>Currently cooking:{cooking.length}</h1>
          <div className='border h-0 w-full bg-black'></div>
          <div className=' flex justify-around'>
            <p>Name</p>
            <p>Time</p>
            <p>Calories</p>
          </div>
          <div className='border h-0 w-full bg-black'></div>
          <div className='mt-6'>
            {cooking.map((cooking, index) => (
              <div key={index} className="cart-details flex justify-around shadow-md mb-4">
                <p>{index + 1}</p>
                <p>{cooking.name.slice(0,)}</p>
                <p>{cooking.time}min</p>
                <p>{cooking.calories}cal</p>

              </div>
            ))}




          </div>

        </div>
      </div>


    </>
  )
}

export default App
