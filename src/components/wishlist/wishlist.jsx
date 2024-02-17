import { useContext } from "react"
import { AppContext } from "../../App"


function Wishlist() {

 

  const { wishlist } = useContext(AppContext)
  console.log(wishlist, "wishlist");


  return (
    <>
      <div className="collections">

        <h1>my wishlist</h1>



        <div style={{ display: "flex", gap: "20px" }} className="collection1">

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>

          {
            wishlist.map(({strMealThumb,strArea},index)=>{
return(
          <div className="card2" key={index}>

            <p style={{ color: "red", marginLeft: "10px", marginTop: "10px" }}> <i className="fa-solid fa-heart"></i> </p>
            <div>
              <img style={{ marginLeft: "45px", borderRadius: "90px", marginTop: "10px", width: "150px" }} src={strMealThumb} alt="" />
            </div>
            <h4 style={{ color: "white", marginTop: "10px", textAlign: "center" }}>{strArea}</h4>
            <p style={{ textAlign: "center", color: "grey" }}>total sales:<span style={{ textAlign: "center", color: "white" }}>34.53</span></p>
          </div>

)
            })
  
          }

</div>
        </div>
      </div>

    </>
  )
}

export default Wishlist