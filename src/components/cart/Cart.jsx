import { useContext } from "react"
import { AppContext } from "../../App"
import "./cart.css"

function Cart() {
    const {cart,handleOnAdd,handleOnRemove,removeClick}=useContext(AppContext)
  return (
  <>
  
  <div className="collections">

<h1>my cart</h1>



<div style={{ display: "flex", gap: "20px" }} className="collection1">

<div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>

  {
    cart.map((item,index)=>{
return(
  <div className="card3" key={index}>

<i onClick={()=>removeClick(item)} style={{marginLeft:"10px", marginTop:"10px",color:"white"}} className="fa-solid fa-trash"></i>

    <div>
      <img style={{ marginLeft: "45px", borderRadius: "90px", marginTop: "10px", width: "150px" }} src={item.strMealThumb} alt="" />
    </div>
    <h4 style={{ color: "white", marginTop: "10px", textAlign: "center" }}>{item.strArea}</h4>
    <p style={{ textAlign: "center", color: "grey" }}>total sales:<span style={{ textAlign: "center", color: "white" }}>34.53</span></p>
    <div style={{textAlign:"center",color:"white"}}>
    <button onClick={()=>handleOnAdd(item)} className="wishlist"> +</button>
    {item.count}
    <button onClick={()=>handleOnRemove(item)} className="wishlist"> -</button>
    </div>
 
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

export default Cart