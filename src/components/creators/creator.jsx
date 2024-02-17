import { useContext, useEffect, useState } from "react";
import "./creator.css"
import { Link} from "react-router-dom"
import { AppContext } from "../../App";

function Creator() {

  const {wishlistClick} = useContext(AppContext)
  // console.log(values);
  const [data, setData] = useState([]);
  const[highlight,setHighlight]=useState([])


  const fetchData = async () => {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=beef")
    const convertedJson = await response.json();
    console.log(convertedJson, "sgsu");
    setData(convertedJson.meals);
  }
  useEffect(() => {
    fetchData();


  }, [])


  const wishlistAdd=(strMealThumb,strArea)=>{
setHighlight([...highlight,{strMealThumb,strArea}])
    wishlistClick(strMealThumb,strArea)


  }

  
  
  const inWishlist = (strMealThumb) =>{
    return highlight.some(item => item.strMealThumb === strMealThumb)
  }


  return (
    <>
      <div className="collections" id="creator">

        <h1>Top creators</h1>


        <div className="collection-cards">

          <div style={{ display: "flex", gap: "20px" }} className="collection1">
            {/* <Link to={"/product"}> */}

            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
              {
                data?.map(({ strMealThumb, strArea }, index) => {
                  if (!(index < 10)) {
                    return false
                  } else {


                    return (
                      <>
                      
                        <div className="card2">
                          

                          <p onClick={()=>wishlistAdd(strMealThumb,strArea)} style={{ color:inWishlist(strMealThumb)?"red": "white", marginLeft: "10px", marginTop: "10px" }}> <i className="fa-solid fa-heart"></i> </p>

                          <div>
                            <img style={{ marginLeft: "45px", borderRadius: "90px", marginTop: "10px", width: "150px" }} src={strMealThumb} alt="" />
                          </div>
                          <h4 style={{ color: "white", marginTop: "10px", textAlign: "center" }}>{strArea}</h4>
                          <p style={{ textAlign: "center", color: "grey" }}>total sales:<span style={{ textAlign: "center", color: "white" }}>34.53</span></p>
                        </div>


                      </>
                    )
                  }
                })
              }

            </div>




            {/* </Link> */}
          </div>
          <div style={{ textAlign: "center" }}>
            <Link to={"/explore"}>
              <button className="explorenow">Explore more</button>
            </Link>
          </div>

        </div>
      </div>

    </>
  )
}

export default Creator
