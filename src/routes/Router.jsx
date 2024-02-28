import React from "react";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import { createBrowserRouter } from "react-router-dom";
import SignIn from "../components/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
    ],
  },
]);

export default router;
