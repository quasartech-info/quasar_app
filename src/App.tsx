import React from "react";
import HomePage from "./pages/home-page/home-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";




const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
])
const App: React.FC = () => {
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
};

export default App;
