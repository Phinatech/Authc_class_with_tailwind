import { createBrowserRouter } from "react-router-dom";
import { Homelayout } from "../components/layouts";

import { Homescreen } from "../pages";

export const element = createBrowserRouter([
  {
    path: "/",
    element: <Homelayout />,
    children: [
      {
        index: true,
        element: <Homescreen />,
      },
    ],
  },
]);
