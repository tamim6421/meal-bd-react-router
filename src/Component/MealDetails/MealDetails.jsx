import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const MealDetails = () => {
    const meal = useLoaderData()
    const navigate = useNavigate()
    const mealData = meal.meals[0]
    const {strInstructions,strMeal} = mealData
    const handleBackButton =()=>{
        navigate(-1)
    }
    console.log(mealData)

    return (
        <div>
            <h2>This Deash Is Awesome</h2>
            <h4 className='text-2xl font-bold'> {strMeal} </h4>
            <p>{strInstructions} </p>
            <button onClick={handleBackButton} className='bg-black text-white p-1'>Back </button>
        </div>
    );
};

export default MealDetails;