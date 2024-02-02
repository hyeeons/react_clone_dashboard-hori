// import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./views/home";
import Marketplace from "./views/marketplace/Marketplace";
import DataTables from "./views/datatables/DataTables";
import Profile from "./views/Profile/Profile";
import SignIn from "./views/signin/SignIn";
import RtlAdmin from "./views/admin/RtlAdmin";

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
