import { useEffect, useState } from "react";
import "./About.css"

function About() {

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
<div className="about" id="about">
  <h1>About us</h1>

<div className="flex">

{
  data?.map(({strMealThumb},index)=>{
    

    if(!(index < 1)){
      return false
  }else{



    return(
      <>
      
      
<div  className="images">
    <div className="about-image">
    <img src={strMealThumb} alt="" />
    <img src={strMealThumb} alt="" />
    </div>
    <div className="about-image1">
    <img src={strMealThumb} alt="" />
    <img src={strMealThumb} alt="" />
    </div>
</div>
    
      
      </>
    )
  }
  })
}
<div className="paragraph">
<p>Lorem ipsum dolor sit amet consectetur. Pharetra faucibus donec ultrices eros elit<br></br> metus morbi aliquam quis. Suspendisse massa ullamcorper tortor morbi nisi leo. <br /> Ultrices leo vel tincidunt nunc eget elit. Gravida et duis ipsum pellentesque libero. <br />Tellus rhoncus metus et eget mattis fringilla nec id. Amet ultrices quam ridiculus <br /> tellus. Leo adipiscing tincidunt amet nisi semper adipiscing quam in est. Tempor <br /> sed dui nunc diam adipiscing at.</p>
<br />
<p>Tellus rhoncus metus et eget mattis fringilla nec id. Amet ultrices quam ridiculus <br /> tellus. Leo adipiscing tincidunt amet nisi semper adipiscing quam in est. Tempor <br /> sed dui nunc diam adipiscing at.</p>

<div className="about-button">
    <button>Connect Wallet</button>
</div>
</div>

</div>

</div>




</>
  )
}

export default About