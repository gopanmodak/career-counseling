import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import AboutUs from "../Pages/AboutUs";
import Resources from "../Pages/Resources";
import Services from "../Pages/Services";
import ContactUs from "../Pages/ContactUs";
import Error from "../Pages/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "aboutus",
        element: <AboutUs />,
      },
      {
        path: "resources",
        element: <Resources />,
      },
      {
        path: "services",
        element: <Services />,
      },
    ],
 
  },
     {
        path:'*',
        element:<Error/>
    },
]);
