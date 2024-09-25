import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home } from "../pages/home/home";
import OperationPage from "../pages/OperationPage";
import BodyPage from "../pages/body/BodyPage";
import LoginPage from "../pages/login/LoginPage";
import BusinessModelPage from "../pages/businessmodel/BusinessModelPage";
import CorePage from "../pages/core/CorePage";
import ProductPage from "../pages/product/ProductPage";
import FamilyPage from "../pages/family/FamilyPage";

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
        path: "businessmodel",
        element:
        <App>
            <BusinessModelPage/>
        </App>
    },
    {
        path: "core",
        element:
        <App>
            <CorePage/>
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
        path: "product",
        element:
        <App>
            <ProductPage/>
        </App> 
    },
    {
        path: "family",
        element:
        <App>
            <FamilyPage/>
        </App> 
    }
])

export default MainRoutes