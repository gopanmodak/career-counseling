import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import AboutUs from "../Pages/AboutUs";
import Services from "../Pages/Services";
import Error from "../Pages/Error";
import Package from "../Pages/Package";
import ReadMore from "../Pages/ReadMore";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import MyProfile from "../Pages/MyProfile";

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
        path: "package",
        element: <Package />,
         loader: async () => {
          return fetch("public/services.json");
        },
       
        
      },
      {
        path: "services",
        element: <Services />,
       
        
      },
      {path: "package/:id",
element: <PrivateRoutes><ReadMore /> </PrivateRoutes>

              ,
loader: async ({ params }) => {
  const res = await fetch(`/services.json`);
  const data = await res.json();
  return data.find(item => item.id == params.id);
},
        
        

      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path:'register',
        element:<Register />
      },
      {
        path:'profile',
        element:<PrivateRoutes> <MyProfile /> </PrivateRoutes>
      }

    ],
 
  },
     {
        path:'*',
        element:<Error/>
    },
]);
