import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from "./Layout/Main";
import Home from "./Component/Home/Home";
import Information from "./Component/Home/Information/Information";
import Guide from "./Component/Home/Guide/Guide";
import Contact from "./Component/Home/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      }
      ,
      {
        path:'/information',
        element:<Information></Information>
      }
      ,
      {
        path:'/guide',
        element:<Guide></Guide>
      }
      ,
      {
        path:'/contact',
        element:<Contact></Contact>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
