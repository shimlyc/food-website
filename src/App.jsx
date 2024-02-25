
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
import Cart from './components/cart/Cart';

export const AppContext =createContext()
function App() {

const[wishlist,setWishlist]=useState([])
const[cart,setCart]=useState([])

const addtoCart=(item)=>{
  let cartProduct = cart.find((list)=>{
    if(item.idMeal===list.idMeal){
      return true
    }
  })
  !cartProduct &&
  setCart([...cart,{...item,count:1}])
}

const wishlistClick=(item)=>{

let productExit = wishlist.find((list)=> item.idMeal === list.idMeal)

if (productExit) {
  let result =wishlist.filter((list)=>{
    if(item.idMeal===list.idMeal){
      return false
    }else{
      return true
    }
  })
  setWishlist(result)
}

!productExit &&
  setWishlist([...wishlist,{...item}])

}
// console.log('wishlist clicked',item);

// const removeClick = (strMealThumb) => {
//   const updatedWishlist = wishlist.filter(item => item.strMealThumb !== strMealThumb);
//   setWishlist(updatedWishlist);
// };

const handleOnAdd = (item) => {
  const updatedCart = cart.map((cartItem) => {
    if (item.idMeal === cartItem.idMeal) {
      // If item exists in cart, increment its count
      return { ...cartItem, count: cartItem.count + 1 };
    }
    return cartItem;
  });
  setCart(updatedCart);
};

const handleOnRemove = (item) => {
  const updatedCart = cart.map((cartItem) => {
    if (item.idMeal === cartItem.idMeal && cartItem.count > 0) {
      // If item exists in cart and count is greater than 0, decrement its count
      return { ...cartItem, count: cartItem.count - 1 };
    }
    return cartItem;
  });
  setCart(updatedCart);
};

const removeClick=(item)=>{
const removedCart = cart.filter((cartItem)=>cartItem.idMeal !== item.idMeal)
setCart(removedCart)
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
      path: "/cart",
      element: <Cart/>,
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
  
  let obj={wishlist,wishlistClick,removeClick,cart,addtoCart,handleOnAdd,handleOnRemove,removeClick}

  return (
    <>


<AppContext.Provider value={obj}>

<RouterProvider router={router} />
      

      </AppContext.Provider>

     </>
  )
}

export default App
