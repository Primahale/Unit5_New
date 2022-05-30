// import React, {uesReducer, useState} from "react";
// export const AuthContext = React.createContext();

// const initState={
//     isAuth:false,
//     token:null
// }

// const authReducer = (state,action) =>{
//    switch(action.type){
//        case"REGISTATION_SUCCESS":{
//            return{
//                ...state,
//                isAuth:true,
//                token:action.payload
//            }
//        }
//        case"LOGOUT_SUCCESS":{
//            return{
//                ...state,
//                isAuth:false,
//                token:null
//            };
//        }
//        default:{
//            return state;
//        }
//    }
// }

// // function AuthContext({children}) {
// //     const [state,dispach] =uesReducer(authReducer,initState);

// //     return(
// //         <AuthContext.Provider value={[state,dispach]}>
// //             {children}
// //         </AuthContext.Provider>
// //     );
// // }

// export default  AuthContext;