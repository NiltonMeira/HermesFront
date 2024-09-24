import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home } from "../pages/home/home";
import OperationPage from "../pages/OperationPage";

const MainRoutes = createBrowserRouter([
    {
        path: "/",
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
    }
])

export default MainRoutes