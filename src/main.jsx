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
import UserData from "./Components/UserData.jsx/UserData.jsx";
import UserDetails from "./Components/UserDatils/UserDetails.jsx";
import Post from "./Components/Posts.jsx/Posts.jsx";
import PostDetail from "./Components/PostDetail/PostDetail.jsx";
import Albums from "./Components/Albums/Albums.jsx";
import PhotoDetail from "./Components/PhotoDetail/PhotoDetail.jsx";

const userPromise = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);

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
        Component: Laptop,
      },
      {
        path: "User",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: User,
      },
      {
        path: "User2",
        element: (
          <Suspense fallback={<h2>Loading......</h2>}>
            <User2 userPromise={userPromise}></User2>
          </Suspense>
        ),
      },
      {
        path: "UserData/:UserID",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.UserID}`),
        Component: UserDetails,
      },
      {
        path: "posts",
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
        Component: Post,
      },
      {
        path: "posts/:postID",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.postID}`),
        Component: PostDetail,
      },
      {
        path: "albums",
        loader: () => fetch("https://jsonplaceholder.typicode.com/photos"),
        Component: Albums,
      },
      {
        path: "albums/:albumsID",
        loader: ({ params }) =>
          fetch(
            `https://jsonplaceholder.typicode.com/albums/${params.albumsID}`
          ),
        Component: PhotoDetail,
      },
      {
        path: "*",
        element: <h3 className="text-3xl font-bold">Not Found: 404 Status</h3>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
