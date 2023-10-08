import { lazy } from "react";
import Loadable from "../components/Loadable";

const Login = Loadable(lazy(() => import("../pages/Auth/Login")));

const LoginRoutes = {
  path: "/",
  children: [
    {
      path: "/login",
      element: <Login />,
    },
  ],
};

export default LoginRoutes;
