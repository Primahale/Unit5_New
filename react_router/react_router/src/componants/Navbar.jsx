import {Link} from "react-router-dom"



function Navbar(){
    return(
        <nav style={{height:"40px",display:"flex",gap:"60px",justifyContent:"center",padding:"10px",boxShadow:"10px 10px 10px lightgray",marginBottom:"30px"}}>
            <Link style={{textDecoration:"none",color:"black"}} to="/">Home</Link>
            <Link style={{textDecoration:"none",color:"black"}} to="/product">Product</Link>
            {/* <Link to="/product/:{id}"></Link> */}
        </nav>
    )
}

export default Navbar;