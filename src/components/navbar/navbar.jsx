import { useState } from "react"
import "./navbar.css"
import { Link } from "react-router-dom"

function Navbar(){
    const[menuOpen,setMenuOpen]=useState(true)

    
    return(
        <nav className="navbar">
            <a href="/" className="title">LogoHere</a>
        
        <div className="menu">
       <img onClick={()=>setMenuOpen(!menuOpen)} className="menubtn" src={menuOpen?"data:image/png;base64,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":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAMFBMVEX///8AAADl5eX09PTV1dUICAiurq5TU1Orq6tJSUnc3Nzt7e1ERET6+vpRUVG9vb0gCS9GAAAA8ElEQVR4nO3dOQ4CQRAEQZblPv//W2yUFsLoNSKekGb1SLPbAQAAAAAAAAAAAADfbodh9+kC9ViGXaYL1Hm6yWm6QGlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJnWdbrLBjXqd9pwuAAAAAMCvzstx1Ba3x9f09rjBJjbq0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClvQet9mnW5TRcAAAAAgP/d98PW6QJljy27fWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJuWPs3LLAAAAAAAAAAAAAGAbPhzZL1DD5UvKAAAAAElFTkSuQmCC"} alt="" />
       {menuOpen && (
            <ul  className="menuitems" >
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#collection">collection</a>
                </li>
                <li>
                    <a href="#creator">creator</a>
                </li>
                <li>
                    <a href="#roadmap">road map</a>
                </li>
                <button className="button">sign in </button>
                <Link to={'/wishlist'}>
                <button className="wishlist">Wishlist  <i className="fa-regular fa-heart"></i></button>
</Link>
<Link to={'/cart'}>
<button className="wishlist"> <i className="fa-solid fa-cart-shopping"></i></button>
</Link>
            </ul>
           
       )}
        </div>
        
        
        
        </nav>
    )
}
export default Navbar