import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./Components/Root/Root.jsx";
import Mobile from "./Components/Mobiles/Mobile.jsx";
import Home from "./Components/Home/Home.jsx";
import Laptop from "./Components/Laptops/Laptop.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "mobiles",
        Component: Mobile,
      },
      {
        path: "Laptop",
        Component: Laptop
      }
    ],
  },

  {
    path: "about",
    element: <div>About here</div>,
  },
  {
    path: "app",
    Component: App,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
