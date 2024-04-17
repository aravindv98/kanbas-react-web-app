import React, { useEffect, useState } from "react";
import "./index.css";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import * as client from "./client";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules
} from "./reducer";
import { KanbasState } from "../../Store";
function ModuleList() {
    const { courseId } = useParams();
    useEffect(() => {
      client.findModulesForCourse(courseId)
        .then((modules) =>
          dispatch(setModules(modules))
      );
    }, [courseId]);  
    const moduleList = useSelector((state: KanbasState) => 
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => 
    state.modulesReducer.module);
  const dispatch = useDispatch();
  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };
  const handleDeleteModule = (moduleId: string) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };
  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };
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
    <div className="btn btn-outline-secondary ">
      <FaEllipsisV></FaEllipsisV>
    </div>
  </div>
  <hr></hr>

  <h3>Modules</h3>
    
  <button onClick={handleAddModule}
  className="btn btn-danger"> + Module</button>
  <button onClick={handleUpdateModule} className="btn btn-success">
                Update
        </button>

        <input className = "form-control" value={module.name}
          onChange={(e) =>
            dispatch(setModule({ ...module, name: e.target.value }))
          }
        />
        <input className = "form-control" value={module._id}
          onChange={(e) =>
            dispatch(setModule({ ...module, _id: e.target.value }))
          }
        />
        <textarea className = "form-control" value={module.description}
           onChange={(e) =>
            dispatch(setModule({ ...module, description: e.target.value }))}
        />
    <ul className="list-group wd-modules">
  <br></br>
  <br></br>
    {moduleList
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li key={index} className="list-group-item" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
              <h5><strong>{module.name}</strong></h5>
              <p>{module.description}</p>
              <p>{module._id}</p>
          </div>
          <button className="btn btn-success btn-lg"
              onClick={() => dispatch(setModule(module))}>
              Edit
            </button>

          <button className="btn btn-success btn-lg" onClick={() => handleDeleteModule(module._id)}>
              Delete
          </button>
      </li>
      ))}

      </ul>
    </div>
  );
}
export default ModuleList;