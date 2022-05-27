import { useEffect, useState } from "react";
import axios from "axios"
import { Link, useParams } from "react-router-dom";

function ProductDetail(){
    const [loading, setLoading] = useState(true)
    const [data,setData] = useState(null);
    const [error, setError] = useState(false)
    const params = useParams();
    useEffect(()=>{
        setLoading(true);
        setError(false);
        const {id} =  params;
        axios({
            url:`http://localhost:3000/data/${id}`,
            method:"GET"
        })
        .then(res=>{
            setLoading(false)
            setData(res.data)
            setError(false);
        })
        .catch(err=>{
            setLoading(false)
            setError(true)
            console.log("Not Found")
        })
    },[])
    console.log(data)

    return(
        <div className="Product">
            {loading && <img src="https://i.stack.imgur.com/ATB3o.gif"></img>}

            {error && <img style={{width:"800px",height:"700px"}} src="https://cdn.dribbble.com/users/718859/screenshots/3267029/jisunpark_404-error.gif"></img> }

            <div key={data?.id} style={{width:"400px",display:"flex",margin:"auto",justifyContent:"center",padding:"20px",boxShadow:"rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px"}}>
                    <Link to={`/product/${data?.id}`} style={{display:"flex",textDecoration:"none",color:"black"}}>
                    <img style={{width:"80px",marginRight:"20px"}} src={data?.image} alt="" />
                     <h3 style={{marginRight:"20px"}}>{data?.name}</h3>
                     <p>Price:--{data?.price}</p>
                     </Link>
               </div>

               

           {/* {data?.map((item)=>(
               <div key={item.id} style={{display:"flex",justifyContent:"center",padding:"20px",border:"1px solid"}}>
                    <Link to={`/product/${item.id}`} style={{display:"flex",textDecoration:"none",color:"black"}}>
                    <img style={{width:"80px",marginRight:"20px"}} src={item.image} alt="" />
                     <h3 style={{marginRight:"20px"}}>{item.name}</h3>
                     <p>Price:--{item.price}</p>
                     </Link>
               </div>
           ))} */}
        </div>
    )
}

export default ProductDetail;