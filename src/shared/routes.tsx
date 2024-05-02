import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Cases from "../pages/cases/Cases";
import { PagesMenu } from "../pages/cases/Menu";
import App from "../App";
import MyDocument from "../pages/pdfPages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <div>
            <Home />
          </div>
        ),
      },
      {
        path: "/services",
        element: <div></div>,
      },
      {
        path: "/cases",
        element: (
          <div>
            <Cases />
          </div>
        ),
      },
      {
        path: "/publications",
        element: (
          <div>
            <PagesMenu />
          </div>
        ),
      },
      {
        path: "/contactUs",
        element: (
          <div>
            <PagesMenu />
          </div>
        ),
      },
      {
        path: "/aboutUs",
        element: (
          <div>
            <PagesMenu />
          </div>
        ),
      },
    ],
  },
]);
