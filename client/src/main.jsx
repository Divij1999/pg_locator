import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import CollegeList, { get_colleges } from "./routes/CollegeList.jsx";
import PgList, { get_pg_list } from "./routes/PgList.jsx";
import PgDetails, { get_pg_details } from "./routes/PgDetails.jsx";
import AddPgForm from "./routes/AddPgForm.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/colleges/",
        loader: get_colleges,
        element: <CollegeList />,
      },
      {
        path: "/colleges/:id",
        loader: get_pg_list,
        element: <PgList />,
      },
      {
        path: "/pg/:id",
        loader: get_pg_details,
        element: <PgDetails />,
      },
      {
        path: "/pg/add-pg",

        element: <AddPgForm />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
