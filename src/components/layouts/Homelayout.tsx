// import React from 'react'
import { Outlet } from "react-router-dom";
import Header from "../blocks/Header";

const Homelayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Homelayout;
