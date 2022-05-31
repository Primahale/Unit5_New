
import { useEffect, useState } from "react";
import axios from "axios"
import { Link, useParams } from "react-router-dom";

function ShopDetail(){
    const [loading, setLoading] = useState(true)
    const [data,setData] = useState(null);
    const [error, setError] = useState(false)
    const params = useParams();
    useEffect(()=>{
        setLoading(true);
        setError(false);
        const {id} =  params;
        axios({
            url:`http://localhost:3000/shop/${id}`,
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
        <div style={{marginBottom:"50px"}} className="Shop">
            {loading && <img src="https://i.stack.imgur.com/ATB3o.gif"></img>}

            {error && <img style={{width:"800px",height:"700px"}} src="https://cdn.dribbble.com/users/718859/screenshots/3267029/jisunpark_404-error.gif"></img> }

            <Link to={`/shop/${data?.id}`} style={{display:"flex",textDecoration:"none",color:"black"}}>
                            <div key={data?.id} style={{width:"800px"}}>
                                
                                    <img style={{width:"100%",marginRight:"20px"}} src={data?.image} alt="" />
                            </div>
                            <div style={{textAlign:"left",marginTop:"100px"}}>
                                <h3 style={{marginTop:"40px",marginBottom:"40px"}}>{data?.title}</h3>
                                <p style={{color:"royalblue",fontWeight:"bold",marginBottom:"30px"}}>{data?.price}</p>
                                {/* <p >or make 4 interest-free payments of $210.00 AUD fortnightly with Afterpay More info</p> */}
                                <button style={{marginTop:"30px",fontSize:"small",padding:"10px",fontWeight:"bold",backgroundColor:"rgb(26, 136, 231)",border:"none",color:"white"}}>Add To Cart</button>
                                {/* <p>Dispatch: Your pre order guarantees priority shipping as stock becomes available.</p> */}
                            </div>
                            
                        </Link>
        </div>
    )
}

export default ShopDetail;