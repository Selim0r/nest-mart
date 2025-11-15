import React from "react";
import Navber from "./component/home/Navber";
import { Outlet } from "react-router";
import Footer from "./component/home/Footer";

function Root() {
  return (
    <div>
      <Navber></Navber>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default Root;
