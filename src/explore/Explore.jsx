
import { useContext, useState } from "react";
import "./Explore.css"
// import Explorecard from "./Explorecard"
import { useEffect } from "react";
import { AppContext } from "../App";
// import Wishlist from "../components/wishlist/wishlist";

function Explore() {

  const {wishlistClick,wishlist,addtoCart,handleOnAdd,handleOnRemove,cart,removeClick} = useContext(AppContext)
  // const [selectedCategory, setSelectedCategory] = useState(null);
const [category, setCategories] = useState([]);
const [data, setData] = useState([]);
const [search, setSearch] = useState([])
const [display,setDisplay]=useState(false)
const [refresh,setRefresh]=useState(false)
const [restore,setRestore]=useState(false)
const [button,setButton]=useState(false)
// const[highlight,setHighlight]=useState([])



  const fetchData = async () => {
    try {

      const response_for_food_categories = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
      const toConvertJSON = await response_for_food_categories.json()
      setCategories(toConvertJSON.categories)
      console.log(toConvertJSON, 'response_for_food_categories');

    } catch (error) {
      console.log("error", error);
    }

  }

  useEffect(() => {
    fetchData();
    handleCategoryClick()

  }, [restore])


  useEffect(() => {
    // fetchData();
    // handleCategoryClick()

  }, [refresh])


  const handleCategoryClick = async (categoryName = 'beef') => {

    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${categoryName}`)
    const convertedJson = await response.json();
    console.log(convertedJson, "sgsu");
    if(setDisplay(true)){

      setData(false)
      

    }else{
      setData(true)
      setDisplay(false)
      setSearch([])
     
    }
    setData(convertedJson.meals);
    // setSelectedCategory(categoryNma);
    console.log(categoryName);

  };






  const handleClick = (e) => {
    const searchTerm = e.target.value;
console.log(searchTerm === ' ');
if(searchTerm===""){
  setDisplay(false)
}else{
  setDisplay(true)
}


    let result = data.filter((data) => {
      if (data.strArea === searchTerm) {
        return true
      } else if (data.strCategory === searchTerm) {
        return true

      }

    })


    setSearch(result)

   
  }


  const handleSort=()=>{

   const dataSort= data.sort((a,b)=>{
    if (a.strArea < b.strArea) {
      return -1;
    }
    if (a.strArea > b.strArea) {
      return 1;
    }
    return 0;
   })
   setData((p)=>{
    return dataSort
   })
   setButton(true)
   setRefresh(!refresh)
   console.log(dataSort);
  }

  const handleRestore=()=>{

    setRestore(!restore)
    setButton(false)
    
   }
 
   const wishlistAdd=(item)=>{
   wishlistClick(item)

   
    
    
       

    
      }
    


    
      
      
  


      


  return (
    <>
      <div className="products">
        <div className="explore-buttons">
          { 
            category.map((item) => {
              return (
                <>

                  <button onClick={() => handleCategoryClick(item.strCategory)}> <img src={item.strCategoryThumb} alt="" /> <br />{item.strCategory}</button>

                </>
              )
            })
          }
        </div>
        <div style={{ textAlign: "center" }}>
          <input  onChange={handleClick} type="text"  className="input-search" placeholder="search here...." />
          <span className="loader"></span>
         {

 button ? 
<button className="restore" onClick={handleRestore}>RESTORE</button> :
            <button className="restore"  onClick={handleSort}>SORT</button>
         }
          
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>





          { !display && 
            data?.map((item) => {

              return (
                <>


                  {/* <Explorecard photo={strMealThumb} name={strArea} amount={price} /> */}

                  <div className="card3">
       
         <i  onClick={()=>wishlistAdd(item)} 
        style={{color: wishlist.find((list)=>item.idMeal===list.idMeal)?"red":"white", marginLeft:"10px", marginTop:"10px"}} className="fa-solid fa-heart"></i> 
        <div>
            <img style={{marginLeft:"45px",borderRadius:"90px" ,marginTop:"10px" ,width:"150px"}}  src={item.strMealThumb} alt="" />
        </div>
        <h4 style={{color:"white" , marginTop:"10px", textAlign:"center"}}>{item.strArea}</h4>
        <p  style={{textAlign:"center", color:"grey"}}>total sales:<span style={{textAlign:"center", color:"white"}}>{item.price}</span></p>

          {
            cart.find((cartItem)=>cartItem.idMeal===item.idMeal)?
         <>

<div style={{textAlign:"center",color:"white"}}>

    <button onClick={()=>handleOnAdd(item)} className="wishlist"> +</button>
{
   cart.find((cartItem)=>cartItem.idMeal===item.idMeal).count 
}
    <button onClick={()=>handleOnRemove(item)} className="wishlist"> -</button>
    </div>
<p style={{color:"white",textAlign:"center"}}>
    <i onClick={()=>removeClick(item)} style={{marginLeft:"10px", marginTop:"10px",color:"white"}} className="fa-solid fa-trash"></i></p>

         </>
         
          

    
       : <div className="cart-div">
                    <button onClick={()=>addtoCart(item)} className="cart" > <i className="fa-solid fa-cart-shopping"></i></button>
                    </div>
            }
    </div>

                </>
              )
            })
          }

          { 
            search.map((item) => {

              return (
                <>

<div className="card2">
       
        {/* <p onClick={()=>wishlistAdd(item)} style={{color:"white", marginLeft:"10px", marginTop:"10px"}}> <i className="fa-solid fa-heart"></i></p>
         */}

<i  onClick={()=>wishlistAdd(item)} 
        style={{color: wishlist.find((list)=>item.idMeal===list.idMeal)?"red":"white", marginLeft:"10px", marginTop:"10px"}} className="fa-solid fa-heart"></i> 
        <div>
            <img style={{marginLeft:"45px",borderRadius:"90px" ,marginTop:"10px" ,width:"150px"}}  src={item.strMealThumb} alt="" />
        </div>
        <h4 style={{color:"white" , marginTop:"10px", textAlign:"center"}}>{item.strArea}</h4>
        <p  style={{textAlign:"center", color:"grey"}}>total sales:<span style={{textAlign:"center", color:"white"}}>{item.price}</span></p>
    </div>
                  {/* <Explorecard photo={strMealThumb} name={strArea} amount={price} /> */}

                </>
              )
            })
          }








        </div>
      </div>
    </>
  )
}

export default Explore