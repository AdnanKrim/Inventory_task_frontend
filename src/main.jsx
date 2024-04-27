import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Components/Login.jsx";
import Register from "./Components/Register.jsx";
import InventoryLIst from "./Components/Inventory/InventoryLIst.jsx";
import ItemsList from "./Components/Items/ItemsList.jsx";
import InventoryAdd from "./Components/Inventory/InventoryAdd.jsx";
import InventoryDetails from "./Components/Inventory/InventoryDetails.jsx";
import InventoryEdit from "./Components/Inventory/InventoryEdit.jsx";
import ItemsAdd from "./Components/Items/ItemsAdd";

const router = createBrowserRouter([
  {
    path: "/",
    element: <InventoryLIst />,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/registration",
    element: <Register />,
  },
  {
    path: "/",
    element: <InventoryLIst />,
  },
  {
    path: "/inverntoryAdd",
    element: <InventoryAdd />,
  },
  {
    path: "/inverntoryDetails/:inventoryId",
    element: <InventoryDetails />,
  },
  {
    path: "/inverntoryUpdate/:inventoryId",
    element: <InventoryEdit />,
  },
  {
    path: "/items",
    element: <ItemsList />,
  },
  {
    path: "/itemsAdd",
    element: <ItemsAdd />,
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
