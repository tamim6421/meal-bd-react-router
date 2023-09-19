import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home.jsx';
import About from './Component/About/About.jsx';
import Blog from './Component/Blog/Blog.jsx';
import Meals from './Component/Meals/Meals.jsx';
import MealDetails from './Component/MealDetails/MealDetails.jsx';
import Error from './Component/Error/Error.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/blog',
        element: <Blog></Blog>
      },
      {
        path:'/meals',
        loader:  ()=> fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b'),
        element:<Meals></Meals>
      },
      {
        path:'/meal/:mealId',
        loader: ({params})=>fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealId}`),
        element:<MealDetails></MealDetails>
      }
    ]
  },
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
