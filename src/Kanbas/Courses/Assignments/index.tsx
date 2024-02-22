import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
function Assignments() {
  const { courseId } = useParams();
  const assignmentList = db.assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <>
    <br></br>
                <div className="row">
                    <div className="col-md-8">
                        <input type="text" className="form-control" placeholder="Search for Assignments"/>
                    </div>
                    <div className="col-md-4">
                        <div className="d-flex float-end">
                            <button className="btn btn-light float-end">+ Group</button>
                            <button className="btn btn-danger float-end">+ Assignment</button>
                            <button className="btn btn-light float-end"><i className="fa fa-ellipsis-v"></i></button>
                        </div>

                    </div>
                </div>
                            <hr/>
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div>
            <FaEllipsisV className="me-2" /> ASSIGNMENTS
            <span className="float-end">
              <FaCheckCircle className="text-success" />
              <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
            </span>
          </div>
          <ul className="list-group">
            {assignmentList.map((assignment) => (
              <li className="list-group-item">
                <FaEllipsisV className="me-2" />
                <Link
                   to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link>
                <span className="float-end">
                  <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
              </li>))}
          </ul>
        </li>
      </ul>
      </>
);
}
export default Assignments;