import React, { useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";
function Dashboard(
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }: {
    courses: any[]; course: any; setCourse: (course: any) => void;
    addNewCourse: () => void; deleteCourse: (course: any) => void;
    updateCourse: () => void; }) {
      
  return (
    <div className="p-4">
      <h1>Dashboard</h1>  
      <h5>Add Course</h5>
      <div style={{width:"50%"}}>
      <input placeholder={course.name} className="form-control"
             onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <input placeholder={course._id} className="form-control"
             onChange={(e) => setCourse({ ...course, _id: e.target.value }) } />
      <input placeholder={course.startDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
      <input placeholder={course.endDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
             </div>
      <button className="btn btn-outline-primary" onClick={addNewCourse} >
        Add
      </button>
      <button className="btn btn-outline-secondary" onClick={updateCourse} >
        Update
      </button>
            <hr />
      <h2>Published Courses ({courses.length})</h2> <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: 300 }}>
              <div className="card">
                <img src={require('./courses.gif')} className="card-img-top"
                     style={{ height: 150 }}/>
                <div className="card-body">
                  <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                    {course.name} 
                    
              </Link>
                  <p className="card-text">{course._id}</p>
                  <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">
                    Go </Link>
                    <button className="btn btn-secondary" onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                      }}>
                      Delete
                </button>
                <button className = "btn btn-dark"onClick={(event) => {
                event.preventDefault();
                setCourse(course);
              }}>
              Edit
            </button>

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

