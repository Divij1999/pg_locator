import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import CollegeList from "./routes/CollegeList.jsx";
import PgList from "./routes/PgList.jsx";
import PgDetails from "./routes/PgDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/colleges/",
        loader: async () => {
          const response = await fetch("http://localhost:3000/colleges", {
            method: "GET",
          });

          return response;
        },
        element: <CollegeList />,
      },
      {
        path: "/colleges/:id",
        loader: async ({ params }) => {
          const response = await fetch(
            `http://localhost:3000/colleges/${params.id}`,
            {
              method: "GET",
            }
          );

          return response;
        },
        element: <PgList />,
      },
      {
        path: "/pg/:id",
        loader: async ({ params }) => {
          const response = await fetch(
            `http://localhost:3000/pg/${params.id}`,
            {
              method: "GET",
            }
          );
          return response;
        },
        element: <PgDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
