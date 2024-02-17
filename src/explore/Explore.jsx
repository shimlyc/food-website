
import { useContext, useState } from "react";
import "./Explore.css"
// import Explorecard from "./Explorecard"
import { useEffect } from "react";
import { AppContext } from "../App";

function Explore() {

  const {wishlistClick} = useContext(AppContext)
  // const [selectedCategory, setSelectedCategory] = useState(null);
const [category, setCategories] = useState([]);
const [data, setData] = useState([]);
const [search, setSearch] = useState([])
const [display,setDisplay]=useState(false)
const [refresh,setRefresh]=useState(false)
const [fetchrefresh,setFetchrefresh]=useState(false)
const [button,setButton]=useState(false)
const[highlight,setHighlight]=useState([])



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

  }, [fetchrefresh])


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

    setFetchrefresh(!fetchrefresh)
    setButton(false)
    
   }
 
   const wishlistAdd=(strMealThumb,strArea)=>{
    setHighlight([...highlight,{strMealThumb,strArea}])
        wishlistClick(strMealThumb,strArea)
    
    
      }
    
      
      
      const inWishlist = (strMealThumb) =>{
        return highlight.some(item => item.strMealThumb === strMealThumb)
      }

  // const wishlistAdd = (strMealThumb, strArea) => {
  //   const isAlreadyInWishlist = inWishlist(strMealThumb);
  //   if (isAlreadyInWishlist) {
  //     // Remove from wishlist
  //     setHighlight(highlight.filter(item => item.strMealThumb !== strMealThumb));
  //   } else {
  //     // Add to wishlist
  //     setHighlight([...highlight, { strMealThumb, strArea }]);
  //   }
  //   wishlistClick(strMealThumb, strArea);
  // };

  // const inWishlist = (strMealThumb) => {
  //   return highlight.some(item => item.strMealThumb === strMealThumb);
  // };

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
            data?.map(({ strMealThumb, strArea, price }) => {

              return (
                <>


                  {/* <Explorecard photo={strMealThumb} name={strArea} amount={price} /> */}

                  <div className="card2">
       
        <p   onClick={()=>wishlistAdd(strMealThumb,strArea)} style={{color:inWishlist(strMealThumb)?"red": "white", marginLeft:"10px", marginTop:"10px"}}>  {inWishlist(strMealThumb) ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>} </p>
        <div>
            <img style={{marginLeft:"45px",borderRadius:"90px" ,marginTop:"10px" ,width:"150px"}}  src={strMealThumb} alt="" />
        </div>
        <h4 style={{color:"white" , marginTop:"10px", textAlign:"center"}}>{strArea}</h4>
        <p  style={{textAlign:"center", color:"grey"}}>total sales:<span style={{textAlign:"center", color:"white"}}>{price}</span></p>
    </div>

                </>
              )
            })
          }

          { 
            search.map(({ strMealThumb, strArea, price }) => {

              return (
                <>

<div className="card2">
       
        <p onClick={()=>wishlistAdd(strMealThumb,strArea)} style={{color:inWishlist(strMealThumb)?"red": "white", marginLeft:"10px", marginTop:"10px"}}> <i className="fa-solid fa-heart"></i></p>
        <div>
            <img style={{marginLeft:"45px",borderRadius:"90px" ,marginTop:"10px" ,width:"150px"}}  src={strMealThumb} alt="" />
        </div>
        <h4 style={{color:"white" , marginTop:"10px", textAlign:"center"}}>{strArea}</h4>
        <p  style={{textAlign:"center", color:"grey"}}>total sales:<span style={{textAlign:"center", color:"white"}}>{price}</span></p>
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