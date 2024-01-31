// import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./views";
import Marketplace from "./views/Marketplace";
import DataTables from "./views/DataTables";
import Profile from "./views/Profile";
import SignIn from "./views/SignIn";
import RtlAdmin from "./views/RtlAdmin";

const RouteArr = [
  {
    path: "/",
    element: <Home />,
    background: "lightblue",
  },
  {
    path: "/marketplace",
    element: <Marketplace />,
    background: "lightblue",
  },
  {
    path: "/datatables",
    element: <DataTables />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/rtladmin",
    element: <RtlAdmin />,
  },
];

const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {RouteArr.map((item, index) => (
            <Route key={index} path={item.path} element={item.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routers;
