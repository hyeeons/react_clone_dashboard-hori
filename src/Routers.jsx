// import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./views/home/MainDashboard";
import Marketplace from "./views/marketplace/Marketplace";
import DataTables from "./views/datatables/DataTables";
import Profile from "./views/Profile/Profile";
import SignIn from "./views/signin/SignIn";
import RtlAdmin from "./views/rtladmin/RtlAdmin";
import Layout, { LayoutNone } from "./components/layout/Layout";
import MainDashboard from "./views/home/MainDashboard";

const RouteArr = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/marketplace",
    element: <Marketplace />,
  },
  {
    path: "/datatables",
    element: <DataTables />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
];

const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<MainDashboard />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/datatables" element={<DataTables />} />
            <Route path="profile" element={<Profile />} />

            {/* {RouteArr.map((item, index) => (
              <Route key={index} path={item.path} element={item.element} />
            ))} */}
          </Route>

          <Route element={<LayoutNone />}>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/rtladmin" element={<RtlAdmin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routers;
