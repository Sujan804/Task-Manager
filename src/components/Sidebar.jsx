import React from "react";
import MemberList from "./MemberList";
import ProjectList from "./ProjectList";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ProjectList />
      <MemberList />
    </div>
  );
};

export default Sidebar;
