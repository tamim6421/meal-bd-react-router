import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Meal from '../Meal/Meal';

const Meals = () => {
    const meals = useLoaderData()
   const totalMeals = meals.meals
    return (
        <div>
            <h3>Total Meal: {totalMeals.length}</h3>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-3 '>
                {
                    totalMeals.map( meal =><Meal key={meal.idMeal} meal={meal}></Meal>)
                }
            </div>
        </div>
    );
};

export default Meals;