import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Meal = ({meal}) => {
    // console.log(meal)
    const{idMeal,strArea,strCategory,strInstructions,strMealThumb } = meal
    const id = parseInt(idMeal)

    const navigate = useNavigate()
    const handleDetails = () =>{
        navigate(`/meal/${id}`)
    }
    return (
        <div className='border-2 border-red-300 rounded-lg p-3 bg-blue-200'>
            <h2> Meal Id:{idMeal} </h2>
            <div className='flex justify-center'>
            <img className='w-40' src={strMealThumb} alt="" />
            </div>
            
            <h4 className='text-2xl font-semibold'>strCategory: {strCategory} </h4>
            <h3 className='text-2xl '> Area: {strArea} </h3>
            <Link to={`/meal/${id}`} className='text-red-400 underline'>See Details</Link>

            <button className='bg-gray-300 p-1' onClick={handleDetails}>see More</button>
        </div>
    );
};

export default Meal;