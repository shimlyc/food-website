import { useEffect, useState } from "react";
import "./Collection.css"

function Collection() {


    const [data,setData]=useState([]);

    const fetchData=async()=>{
        const response=await  fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
        const convertedJson=await response.json();
      console.log(convertedJson,"sgsu");
      
      setData(convertedJson.meals);
    
    
    }
    useEffect(()=>{
        fetchData();
    
     
      },[])


  return (
    <>
    <div className="collections" id="collection">

<h1>Top collection</h1>


<div className="collection-cards">

<div  style={{display:"flex", gap:"20px"}} className="collection1">
<div style={{display:"flex",flexWrap:"wrap" ,justifyContent:"space-evenly" }}>
{
  data?.map(({strMealThumb,strArea},index)=>{
    if(!(index < 8)){
        return false
    }else{

    
    return(
      <>
      
      
     
<div className="card1">
    <p style={{color:"white", fontStyle:"italic"}}>created by</p>
    <p style={{color:"pink"}}> <img  style={{borderRadius:"40px", width:"20px"}} src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg" alt="" />   james watson</p>
    <div>
        <img style={{marginLeft:"40px",borderRadius:"80px" ,marginTop:"10px",width:"200px"}}  src={strMealThumb} alt="" />
    </div>
    <h4 style={{color:"white" , marginTop:"10px"}}>{strArea}</h4>
    <p>created by <span style={{color:"pink"}}> james watson</span></p>
</div>
      
      </>
    )
}

  })
}


</div>


</div>


</div>

    </div>
    
    
    </>
  )
}

export default Collection