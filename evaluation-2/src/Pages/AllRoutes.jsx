import {Routes, Route} from "react-router-dom";
// import Dashboard from "./Dashboard"
import RegisterPageOne from "./RegisterPageOne";
import RegisterPageTwo from "./RegisterPageTwo";
// import PrivateRouter from "./PrivateRouter";
// import Dashboard from "./Dashboard";

function AllRoutes(){
    return(
        <div>
            <Routes>
                {/* <Route path="/" element={<Dashboard/>}/> */}
                <Route path="/register/one" element={<RegisterPageOne/>}/>
                <Route path="/register/two" element={<RegisterPageTwo/>}/>
                {/* <Route path= "/dashboard" element={<PrivateRouter to="/register/one"><Dashboard/></PrivateRouter>}/> */}

            </Routes>
        </div>
    )

    
}

export default AllRoutes;