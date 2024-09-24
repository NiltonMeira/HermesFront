import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home } from "../pages/home/home";
import OperationPage from "../pages/OperationPage";
import LoginPage from "../pages/login/LoginPage";
import { SignUp } from "../pages/signUp/SignUp";
import BodyPage from "../pages/body/bodyPage";

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
        path: "operation",
        element:
        <App>
            <OperationPage/>
        </App>
    },
    {
        path: "body",
        element:
        <App>
            <BodyPage/>
        </App> 
    },
    {
        path: "signUp",
        element:
        <App>
            <SignUp/>
        </App>
    }
])

export default MainRoutes