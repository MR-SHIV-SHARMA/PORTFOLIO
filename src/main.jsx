import "./index.css";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Layout from "./Layout.jsx";
import Preloader from "./Preloader.jsx"; // Import Preloader
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
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
  const [showPreloader, setShowPreloader] = useState(true);

  return showPreloader ? (
    <Preloader onFinish={() => setShowPreloader(false)} />
  ) : (
    <RouterProvider router={router} />
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
