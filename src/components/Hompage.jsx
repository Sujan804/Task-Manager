import React from "react";
import { Route, Routes } from "react-router-dom";
import AddTask from "./AddTask";
import Sidebar from "./Sidebar";
import TaskList from "./TaskList";

const Hompage = () => {
  return (
    <div className="container relative">
      <Sidebar />
      <Routes>
        <Route path="/" element={<TaskList />}></Route>
        <Route path="/add-task" element={<AddTask />} />
      </Routes>
    </div>
  );
};

export default Hompage;
