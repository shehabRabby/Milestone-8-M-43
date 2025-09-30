import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./Components/Root/Root.jsx";
import Mobile from "./Components/Mobiles/Mobile.jsx";
import Home from "./Components/Home/Home.jsx";
import Laptop from "./Components/Laptops/Laptop.jsx";
import User from "./Components/User/User.jsx";
import User2 from "./Components/User2/User2.jsx";


const userPromise = fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json());

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
      },
      {
        path: "User",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: User
      },
      {
        path:"User2",
        element: <Suspense fallback={<h2>Loading......</h2>}>
          <User2 userPromise={userPromise}></User2>
        </Suspense>
      }
    ],
  },

]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
