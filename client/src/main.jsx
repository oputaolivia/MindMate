import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/index.css";
import ErrorPage from "./pages/ErrorPage";
import chatBot from "./pages/chatBot";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <App />,
  //   errorElement: <ErrorPage />,
  // },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <RegisterPage />,
  },
  {
    path: "/chatBot",
    element: <chatBot />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
