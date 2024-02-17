import About from "./About/About"
import Work3 from "./Work3/Work3"
import Collection from "./collections/Collection"
import Creator from "./creators/creator"
import Home from "./home/home"
import Join from "./lastpage/Join"
import Navbar from "./navbar/navbar"
import Work1 from "./work1/Work1"
import Work2 from "./work2/Work2"


function Cardview() {
  return (
    <div><Navbar/>
    <Home/>
    <About/>
    <Collection/>
    <Creator/>
    <Work1/>
    <Work2/>
    <Work3/>
    <Join/></div>
  )
}

export default Cardview