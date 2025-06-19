import { createBrowserRouter } from "react-router-dom";
import Register from "../components/user/Register";




let route=createBrowserRouter([
    {
    path:"/",
    element:<Register></Register>
    }
])
 export default route