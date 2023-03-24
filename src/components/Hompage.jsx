import React from "react";
import MemberList from "./MemberList";
import Sidebar from "./Sidebar";

const Hompage = () => {
  return (
    <div className="container relative">
      <Sidebar />
      <MemberList />
    </div>
  );
};

export default Hompage;
