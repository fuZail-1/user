import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Userlist from "./Components/Userlist";
import UserDetailModal from "./Components/UserDetailModal";
const Rout = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Userlist />} />
          <Route path="/userdetail/:id" element={<UserDetailModal />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Rout;
