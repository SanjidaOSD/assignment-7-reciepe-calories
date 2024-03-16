import minImg from '../assets/min.png'
import calImg from '../assets/cal.png'
import PropTypes from 'prop-types'
const Recipe = ({recipe, handleCart}) => {
  const {id,img,name,description,ingredients,calories,time} = recipe;
    // console.log(recipe.name)
    return (
        <div className='grid grid-cols-2 gap-2'>
             <div className="card w-96 shadow-xl">
            <figure className="px-10 pt-10">
              <img key={id} src={img} alt="Shoes" className="rounded-xl w-80 h-48" />
            </figure>
            {/* <div className="card-body items-center text-center"> */}
            <div className='ml-12'>
              <h2 className="card-title text-center text-xl font-bold mb-3">{name}</h2>
              <p className='mb-3'>{description}</p>
              <div className='border h-0 w-full bg-black'></div>
              <div>
                <h1 className='text-xl font-bold mb-3'>Ingredients:{ingredients.length}</h1>
               
               <div className='items-left mb-3'>
               <li>{ingredients[0]}</li>
                <li>{ingredients[1]}</li>
                <li>{ingredients[2]}</li>
               </div>
                
              </div>
              <div className='border h-0 w-full bg-black'></div>

              <div className='flex gap-12 mb-4 mt-4'>
                <div className='flex'>
                  <img src={minImg} alt="" />
                  <p>{time} minutes</p>
                </div>
                <div className='flex'>
                  <img src={calImg} alt="" />
                  <p>{calories}Calories</p>

                </div>
              </div>
              <div className="card-actions mt-4">
                <button onClick={()=>handleCart(recipe)} className="btn bg-green-500">Want to Cook</button>
              </div>
            </div>
          </div>
         </div>
    );
};

Recipe.propTypes = {
    recipe:PropTypes.object.isRequired,
    handleCart:PropTypes.object.isRequired
}

export default Recipe;