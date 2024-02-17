
import './App.css'
import Cardview from './components/cardview'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Wishlist from './components/wishlist/wishlist';
import Explore from './explore/Explore';
import { createContext, useState } from 'react';
import Navbar from './components/navbar/navbar';

export const AppContext =createContext()
function App() {

const[wishlist,setWishlist]=useState([])

const wishlistClick=(strMealThumb,strArea)=>{
  setWishlist([...wishlist,{strMealThumb,strArea}])
console.log('wishlist clicked',strMealThumb,strArea);
}


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Cardview/>,
    },  
     {
      path: "/product",
      element: <>card virew</>,
    },
    {
      path: "/wishlist",
      element: <Wishlist/>,
    },
    {
      path: "/explore",
      element:
      <>
      
       <Navbar/>
      <Explore/>

      </>
    },
  ]);
  
  let obj={wishlist,wishlistClick}

  return (
    <>


<AppContext.Provider value={obj}>

<RouterProvider router={router} />
      

      </AppContext.Provider>

     </>
  )
}

export default App
