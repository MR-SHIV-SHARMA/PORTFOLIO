import "./index.css";
import React from "react";
import Layout from "./Layout.jsx";
import ReactDOM from "react-dom/client";
import Home from "./components/home/Home.jsx";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
