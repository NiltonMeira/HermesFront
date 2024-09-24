import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home } from "../pages/home/home";
import LoginPage from "../pages/login/LoginPage";

const MainRoutes = createBrowserRouter([
    {
        path: "/",
        element: 
        <App>
            <Home/>
        </App>
    },
    {
        path: "login",
        element:
        <App>
            <LoginPage/>
        </App>
    }
])

export default MainRoutes