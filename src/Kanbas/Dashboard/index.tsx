import React from "react";
import { Link } from "react-router-dom";
import db from "../Database";
function Dashboard() {
    const length = db.courses.length;
    const courses_list = db.courses;
  return (
    <div className="p-4">
      <h1>Dashboard</h1>              <hr />
      <h2>Published Courses ({length})</h2> <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses_list.map((course) => (
            <div key={course._id} className="col" style={{ width: 300 }}>
              <div className="card">
                <img src={require('./courses.gif')} className="card-img-top"
                     style={{ height: 150 }}/>
                <div className="card-body">
                  <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                    {course.name} </Link>
                  <p className="card-text">{course._id}</p>
                  <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">
                    Go </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;

