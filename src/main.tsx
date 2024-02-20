import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./routes/App.tsx";
import HomePage from "./routes/HomePage.tsx";
import DriftPage from "./routes/DriftPage.tsx";
import TimeAttackPage from "./routes/TimeAttackPage.tsx";
import ForzaPage from "./routes/ForzaPage.tsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "drift",
          element: <DriftPage />,
        },
        {
          path: "timeattack",
          element: <TimeAttackPage />,
        },
        {
          path: "forza",
          element: <ForzaPage />,
        },
      ],
    },
  ],
  {
    basename:
      process.env.NODE_ENV === "production" ? "/ra-react-router-menu" : "",
  },
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
