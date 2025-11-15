import { createBrowserRouter } from "react-router";
import Root from "../Root";
import Home from "../page/Home";
import About from "../page/About";
import Blog from "../page/Blog";
import { FaThemeco } from "react-icons/fa";
import Mega_Menu from "../page/Mega_Menu";
import Contract from "../page/Contract";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "/",
        loader: () =>
          Promise.all([
            fetch("/small.json").then((r) => r.json()),
            fetch("/Product.json").then((r) => r.json()),
          ]).then(([smallSection, productData]) => ({
            smallSection,
            productData,
          })),
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/blog",
        Component: Blog,
        loader: () => fetch("/Block.json").then((res) => res.json()),
      },
      {
        path: "/contract",
        Component: Contract,
      },
      {
        path: "/mega",
        Component: Mega_Menu,
      },
    ],
  },
]);

export default router;
