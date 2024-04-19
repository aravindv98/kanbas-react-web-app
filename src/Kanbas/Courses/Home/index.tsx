import ModuleList from "../Modules/List";
import Toolbar from "../Modules/Components/Toolbar";
import CourseStatus from "./Status";
import React from "react";
function Home() {
  return (
    <div className="d-flex">
      <div className="col-9">
        <ModuleList />
      </div>
      <CourseStatus />
    </div>
  );
}
export default Home;