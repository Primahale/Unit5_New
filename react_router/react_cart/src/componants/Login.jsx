import { useContext, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function Login(){
    const [state,dispach]= useContext(AuthContext);
    // const [toggle, setToggle] = useState(false)
    const LoginUser = async()=>{
        axios({
            url:"https://reqres.in/api/login",
            method:"POST",
            data:{
                    "email": "eve.holt@reqres.in",
                    "password": "cityslicka"
            }
        })
        .then(res=>{
            alert("success");
            dispach({
                type:"LOGIN_SUCCESS",
                // demo,
                payload: res.data.token
            })
        })
        .catch((err)=>{
            alert("failure");
        });

       
    };

    // function demo(){
    //     if (data.email == email && data.password == password){
    //         // payload: res.data.token
            
    //     }
    // }

    if(state.isAuth){
        return<Navigate to="/shop"/>;
    }

    return(
        <>
            <h2>Login</h2>
            <input type="email" placeholder="Enter Email" />
            <input type="password" placeholder="Enter Password" />
            <button onClick={LoginUser}>Login</button>
        </>
    )
}

export default Login;