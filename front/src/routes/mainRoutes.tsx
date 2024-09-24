import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home } from "../pages/home/home";
import LoginPage from "../pages/login/LoginPage";
import { User } from "../pages/createUser/user";

const MainRoutes = createBrowserRouter([
    {
        path: "/",
        element: 
        <App>
            <LoginPage/>
        </App>
    },
    {
        path: "home",
        element:
        <App>
            <Home/>
        </App>
    },
    {
        path: "user",
        element:
        <App>
            <User/>
        </App>
    }
])

export default MainRoutes