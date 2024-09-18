import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home } from "../pages/home/home";

const MainRoutes = createBrowserRouter([
    {
        path: "/",
        element: 
        <App>
            <Home/>
        </App>
    }
])

export default MainRoutes