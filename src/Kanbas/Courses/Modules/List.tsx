import React, { useState } from "react";
import "./index.css";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import db from "../../Database";

function ModuleList() {
    const { courseId } = useParams();
    const modulesList = db.modules.filter((module) => module.course === courseId);
    const [selectedModule, setSelectedModule] = useState(modulesList[0]);
  return (
<div className="container-fluid">
    <div className="btn-group">
    <div className="btn btn-outline-secondary ">View Progress</div>
    <div className="btn btn-outline-secondary">Collapse All</div>
    <div className="btn-group">
      <button
        type="button"
        className="btn btn-outline-secondary dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
       
      >
        <FaCheckCircle style={{ color: 'green' }}></FaCheckCircle> Publish All
      </button>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="#">Unpublish</a></li>
        <li><a className="dropdown-item" href="#">Publish Selected action</a></li>
        <li><a className="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div>
    <div className="btn btn-danger " style={{ marginLeft: '5px' }}> + Module </div>
    <div className="btn btn-outline-secondary ">
      <FaEllipsisV></FaEllipsisV>
    </div>
  </div>
  <hr></hr>
  <br></br>
  <br></br>

    <ul className="list-group wd-modules">
        {modulesList.map((module, index) => (
          <li key={index}
            className="list-group-item"
            onClick={() => setSelectedModule(module)}>
            <div>
              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson, index) => (
                  <li className="list-group-item" key={index}>
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ModuleList;