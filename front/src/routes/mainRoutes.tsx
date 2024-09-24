import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home } from "../pages/home/home";
import OperationPage from "../pages/OperationPage";
import BodyPage from "../pages/body/BodyPage";
import LoginPage from "../pages/login/LoginPage";

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
    }
])

export default MainRoutes