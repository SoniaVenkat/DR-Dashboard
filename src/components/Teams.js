import React from "react";
import MainHeader from "./MainHeader";
import Sidebar from "./Sidebar";
const Teams = () => {
  return (
    <div className="header">
      <MainHeader></MainHeader>
      <Sidebar></Sidebar>
      <span className="title">Teams</span>
    </div>
  );
};

export default Teams;
