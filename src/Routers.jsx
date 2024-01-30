import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import styled from "styled-components";
import Home from "./views";
import Marketplace from "./views/Marketplace";
import DataTables from "./views/DataTables";
import Profile from "./views/Profile";
import SignIn from "./views/SignIn";
import RtlAdmin from "./views/RtlAdmin";

const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/datatables" element={<DataTables />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/rtladmin" element={<RtlAdmin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routers;
