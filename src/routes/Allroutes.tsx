import { createBrowserRouter } from "react-router-dom";
import Homelayout from "../components/layouts/Homelayout";
import Home from "../pages/Home";
import SignIn from "../pages/Auth/SignIn";
import Signup from "../pages/Auth/Signup";

export const element = createBrowserRouter([
  {
    path: "/",
    element: <Homelayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
]);
