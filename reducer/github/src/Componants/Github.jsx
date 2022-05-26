import React, { useEffect, useReducer } from "react";
import { Center, Square, Circle } from '@chakra-ui/react'
import axios from "axios"
import "../Componants/Github.css"

const initState = {
    loading: true,
    error:false,
    data: null
}

const githubActions={
    "fetch": "fetch",
    "success": "success",
    "failure":"failure"
}
const githubReducer = (state, action)=>{
switch(action.type){
    case githubActions.fetch:{
        return(
            {
                ...state,
                loading:true,
                error:false,
                data: null
            }
        )
    }
    case githubActions.success:{
        return({
            ...state,
            loading:false,
            error:false,
            data:action.payload
    })
    }
    case githubActions.failure:{
        return(
            {
                ...state,
                loading:false,
                error:true
            }
        )
    }
    default:
        return state
}
}

export default function Github(){
    const [{loading,error,data},dispatch] = useReducer(githubReducer,initState)
   
    useEffect(()=>{
        dispatch({
            type:githubActions.fetch
        })
        axios({
            url:"https://api.github.com/search/users",
            method:"GET",
            params:{
                q:"masai",
            }
        })
        .then(res=>{
            dispatch({
                type:githubActions.success,
                payload: res.data
            })
        })
        .catch(err=>{
            dispatch({
                type:githubActions.failure
            })
        })
    },[])

    console.log(data);
    return(
    <div>
         <h1>Github Data</h1>
        {loading && <div>Loading</div>}
        {error && <div>Error</div>}
        {data?.items.map((item)=>(
            <Center>
               
            <div className="box" style={{display:"flex"}}>
                <img height={"40px"} style={{padding:"10px"}} src={item.avatar_url} alt="" />
                <div key={item.id}>{item.login}</div>
                <div style={{marginLeft:"20px"}}>{item.type}</div>

            
            </div>
            </Center>
        ))}
    </div>
   )
}


// export default Github;