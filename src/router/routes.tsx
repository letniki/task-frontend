import {createBrowserRouter} from "react-router-dom";
import TypeParamsPage from "../pages/typeParams/TypeParamsPage";
import TypeObjPage from "../pages/typeObj/TypeObjPage";
import LibParamsPage from "../pages/libParams/LibParamsPage";
import MeasurePage from "../pages/measure/MeasurePage";
import MainLayout from "../layouts/MainLayout";

export const routes = createBrowserRouter([
    {path:'', element:<MainLayout/>, children:[
            {path:'/type-param', element:<TypeParamsPage/>},
            {path:'/type-obj', element:<TypeObjPage/>},
            {path:'/lib-param', element:<LibParamsPage/>},
            {path:'/measure', element:<MeasurePage/>},
        ]
    }]);