import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeScreen from "../Screens/HomeScreen";
import { Provider } from "react-redux";
import store from "./app/store";
import ProfileScreen from "../Screens/ProfileScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/profile",
    element: <ProfileScreen />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
