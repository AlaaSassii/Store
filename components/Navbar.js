import React from 'react'
import { BiAngry ,BiCart ,BiHealth  } from "react-icons/bi";
import {connect} from 'react-redux'
import { useNavigate } from 'react-router-dom'; 
import { FiHeart } from "react-icons/fi";

const Navbar = ({save , store}) => {
  let navigate = useNavigate()
  return (
    <nav className="navbar">
        <h1 onClick={()=>navigate("/")}>Store</h1>
        <div className="links-icons">
           <div><BiHealth/> </div>

        <div className="content-nav" onClick={()=>navigate("/buyitems")}>
        <div className="nav"><BiCart/></div>  
        <div className="nav-data">{store}</div>   
        </div>
        <div className="content-nav" onClick={()=>navigate("/saveitems")}  >
          <div className="nav"> <FiHeart/> </div>
          <div className="nav-data">{save}</div> 
        </div>

        </div>
    </nav>
  )
}
const mapStateToProps = (state) => { 
  return {
    save:state.save,store:state.store ,
  
  }
}
export default connect(mapStateToProps)(Navbar)