import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import AboutUs from "../Pages/AboutUs";
import Services from "../Pages/Services";
import ContactUs from "../Pages/ContactUs";
import Error from "../Pages/Error";
import Package from "../Pages/Package";
import ReadMore from "../Pages/ReadMore";

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
element: <ReadMore />,
loader: async ({ params }) => {
  const res = await fetch(`/services.json`);
  const data = await res.json();
  return data.find(item => item.id == params.id);
},
        
        

      }
    ],
 
  },
     {
        path:'*',
        element:<Error/>
    },
]);
