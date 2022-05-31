import "./navbar.css"
import {Link} from "react-router-dom"
import { useContext } from "react";
import {AuthContext} from "../Context/AuthContext"

function Navbar(){
    const { isAuth, toggleAuth } = useContext(AuthContext);
    return(
        <div className="navbar" style={{height:"50px",display:"flex",boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"}}>
        <div style={{height:"50px" ,width:"50%"}}>
           {/* <Link style={{marginRight:"30px",marginLeft:"-90"}} to="/">Home</Link> */}
           <img style={{width:"90px",marginTop:"20px",marginLeft:"-200px",}} src="https://cdn.shopify.com/s/files/1/0183/5769/files/proper_logo_website_header.png?height=628&pad_color=ffffff&v=1618292350" alt="" />
           <Link style={{marginRight:"30px",marginLeft:"30px",textDecoration:"none",color:"black"}} to="/shop">Shop</Link>
           <Link style={{marginRight:"30px",marginLeft:"30px",textDecoration:"none",color:"black"}} to="/customerSupport">Customer Support</Link>
            <Link style={{marginRight:"30px",marginLeft:"30px",textDecoration:"none",color:"black"}} to="/aboutUs">About Us</Link>
        </div>
        <div style={{width:"30%",marginLeft:"190px",padding:"20px"}}>
            <Link style={{marginLeft:"90px",textDecoration:"none",color:"black"}} to="/login">Login</Link>
            {/* {isAuth ? (
        <button
          onClick={() => {
            // toggleAuth();
          }}
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => {
            // toggleAuth();
          }}
        >
          Login
        </button>
      )} */}
            {/* <img style={{width:"50px"}} src="https://freesvg.org/img/magnifying-glass.png" alt="" /> */}
            <Link style={{marginLeft:"30px",textDecoration:"none",color:"black"}} to="/cart">Cart</Link>
        </div>
        </div>
    )
}
export default Navbar;