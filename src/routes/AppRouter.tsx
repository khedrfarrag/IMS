import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import SingUp from "../pages/SingUp";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Dashboard from "../pages/Dashboard";
import Inventory from "../pages/Inventory";
import Reports from "../pages/Reports";
import "./AppRout.css";
const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AuthLayout />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Login />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "sign-up",
          element: <SingUp />,
        },
        {
          path: "forgot-password",
          element: <ForgotPassword />,
        },
        {
          path: "reset-passwrd",
          element: <ResetPassword />,
        },
        {
          path: "dashboard",
          element: <MainLayout />,
          errorElement: <NotFound />,
          children: [
            {
              index: true,
              element: <Dashboard />,
            },
            {
              path: "inventory",
              element: <Inventory />,
            },
            {
              path: "reports",
              element: <Reports />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRouter;
