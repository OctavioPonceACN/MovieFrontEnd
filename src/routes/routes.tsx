import type { RouteObject } from "react-router-dom";
import Main from "../components/layout/main";
import MovieList from "../components/movies/movieList";
import MovieWrapper from "../components/movies/movieWrapper";
import PageNotFound from "../components/layout/pageNotFound";
import Home from "../components/layout/home";
import UserForm from "../components/user/userForm";

export const appRoutes: RouteObject[] = [
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/movies",
        element: <MovieList />,
      },
      {
        path: "/movie/:id",
        element: <MovieWrapper />,
      },
      {
        path: "/user-form",
        element: <UserForm />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
];
