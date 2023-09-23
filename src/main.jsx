import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Pages/Layout/Layout.jsx";
import ErrorPage from "./Pages/ErrorPage/ErrorPage.jsx";
import Home from "./Pages/Home/Home.jsx";
import Favourite from "./Pages/Favourite/Favourite";
import Login from "./Pages/Login/Login";
import PhoneSingleDetails from "./components/PhoneDetails/PhoneSingleDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async ()=>{
          const res = await fetch('/data.json');
          const data = await res.json()
          return data
        }
      },
      {
        path: "/phone/:id",
        element: <PhoneSingleDetails></PhoneSingleDetails>,
        loader: async ()=>{
          const res = await fetch('/data.json');
          const data = await res.json()
          return data
        }
      },
      {
        path: "/favourite",
        element: <Favourite></Favourite>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
