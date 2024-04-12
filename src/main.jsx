import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Home from "./router/Home";
import Login from "./router/Login";
import SingUp from "./router/SingUp";
import ErrorPage from "./router/ErrorPage";
import WalletAddresses from "./router/WalletAddresses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/SingUp",
    element: <SingUp />,
  },
  {
    path: "/WalletManagement",
    element: <WalletAddresses />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
