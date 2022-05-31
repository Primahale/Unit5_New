import React, {useReducer, useState} from "react";

export const AuthContext = React.createContext();

const initState={
    isAuth:false,
    token:null
}
const authReducer = (state,action)=>{
    switch(action.type){
        case"LOGIN_SUCCESS":{
            return{
                ...state,
                isAuth:true,
                token:action.payload
            }
        }
        case "LOGOUT_":{
            return{
                ...state,
                isAuth:false,
                token:null
            };
        }
        default:{
            return state;
        }
    }

}



function AuthContextProvider({children}){
    const [state,dispach] = useReducer(authReducer,initState);
   

   
    return(
        <AuthContext.Provider value={[state,dispach]}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;