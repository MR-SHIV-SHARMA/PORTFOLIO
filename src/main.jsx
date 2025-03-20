import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./Layout.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/home/Home.jsx";

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

function App() {
  return <RouterProvider router={router} />;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
