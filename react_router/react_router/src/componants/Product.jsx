import { useEffect, useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";

function Product(){
    const [loading, setLoading] = useState(true)
    const [error,setError] = useState(false);
    const [data,setData] = useState(null);
    useEffect(()=>{
        setLoading(true);
        setError(false);
        axios({
            url:"http://localhost:3000/data",
            method:"GET"
        })
        .then(res=>{
            setLoading(false)
            setData(res.data)
            setError(false)
        })
        .catch(err=>{
            setLoading(false)
            setError(true)
        })
    },[])
    console.log(data)

    return(
        <div className="Product">
            {loading && <img src="https://i.stack.imgur.com/ATB3o.gif"></img>}


           {data?.map((item)=>(
                <Link to={`/product/${item.id}`} style={{display:"flex",textDecoration:"none",color:"black",marginBottom:"60px"}}>
                     <div key={item.id} style={{width:"400px",display:"flex",margin:"auto",justifyContent:"center",padding:"20px",boxShadow:"rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px"}}>
                   
                        <img style={{width:"80px",marginRight:"20px"}} src={item.image} alt="" />
                        <h3 style={{marginRight:"20px"}}>{item.name}</h3>
                        <p>Price:--{item.price}</p>
                        
                    </div>
               </Link>
           ))}
        </div>
    )
}

export default Product;