import React, { useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";
function Dashboard() {
    const [courses, setCourses] = useState(db.courses);
    const course = {
      _id: "0", name: "New Course", number: "New Number",
      startDate: "2023-09-10", endDate: "2023-12-15",
      image: "/courses.gif"
    };
    const addNewCourse = () => {
      const newCourse = { ...course,
                          _id: new Date().getTime().toString() };
      setCourses([...courses, { ...course, ...newCourse }]);
    };
  
  return (
    <div className="p-4">
      <h1>Dashboard</h1>  
      <button onClick={addNewCourse} >
        Add
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

