
import { useContext, useEffect, useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function Shop(){
    const [loading, setLoading] = useState(true)
    const [error,setError] = useState(false);
    const [data,setData] = useState(null);
    const { isAuth, toggleAuth } = useContext(AuthContext);
    const [state] = useContext(AuthContext)
    useEffect(()=>{
        
        setLoading(true);
        setError(false);
        axios({
            url:"http://localhost:3000/shop",
            method:"GET",
            
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
        <div style={{marginBottom:"50px"}}>
             {/* {isAuth ? (
        <>
          <h4> Login status:--successful</h4>
          <h4>Token:{state.token}</h4>
        </>
      ) : (
        <h4>Login status:--Not successful</h4>
      )} */}
            {/* {state.token && <h2>Token:{state.token}</h2>} */}
            <div>
                <img style={{width:"100%",height:"550px"}} src="https://st2.depositphotos.com/3889193/7641/i/950/depositphotos_76413377-stock-photo-hipster-desktop-with-male-hands.jpg" alt="" />
            </div>
            <div style={{display:"flex"}}>
                <div style={{border:"5px solid",width:"200px",marginRight:"50px"}}></div>
                <div style={{marginTop:"50px",gridTemplateColumns:"repeat(3,1fr)",display:"grid"}} className="Shop">
                    {loading && <img src="https://i.stack.imgur.com/ATB3o.gif"></img>}


                {data?.map((item)=>(
                        <Link to={`/shop/${item.id}`} style={{display:"flex",textDecoration:"none",color:"black"}}>
                            <div key={item.id} style={{width:"400px",margin:"auto",justifyContent:"center"}}>
                        
                                <img style={{width:"400px",marginRight:"20px"}} src={item.image} alt="" />
                                <h3>{item.title}</h3>
                                <p style={{color:"royalblue",fontWeight:"bold"}}>{item.price}</p>
                                
                            </div>
                    </Link>
                ))}
                </div>
            </div>
            {/* <PaginationComponent currentPage={page} lastPage={5} onPageChange={setPage}/> */}
        </div>
    )
}

// const PaginationComponent= ({
//     currentPage,
//     lastPage,
//     onPageChange
// })=>{
//     const arr = new Array(lastPage).fill(0);
//     return(
//         <div>
//             {
//                 arr.map((item,page)=><button onClick={()=>onPageChange(page+1)} disabled={(page+1)===currentPage}>{page+1}</button>)
//             }
//         </div>
//     )
// }

export default Shop;