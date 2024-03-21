import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import db from "./Database";
import { useState } from "react";
function Kanbas() {
  const [courses, setCourses] = useState<any[]>(db.courses);
    const [course, setCourse] = useState({

      _id: "New Course ID", name: "New Course", number: "New Number",
      startDate: "2023-09-10", endDate: "2023-12-15",
      image: "/courses.gif"
    });
    const addNewCourse = () => {
      const newCourse = { ...course};
      setCourses([...courses, { ...course, ...newCourse }]);
    };
    const deleteCourse = (courseId: string) => {
      setCourses(courses.filter((course) => course._id !== courseId));
    };
    const updateCourse = () => {
      setCourses(
        courses.map((c) => {
          if (c._id === course._id) {
            return course;
          } else {
            return c;
          }
        })
      );
    };
  return (
    <div className="" style={{height:'100%'}}>
    <div className="row" style={{height:'100%'}}>
      <div className="col-md-1">
        <KanbasNavigation />
      </div>
  
      <div className="col-md-11">
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account" element={<h1>Account</h1>} />
            <Route path="Dashboard" element={
<Dashboard
              courses={courses}
              course={course}
              setCourse={setCourse}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse}/> } />
            <Route path="Courses/*" element={<Courses courses={courses} />} />
            <Route path="Courses/:courseId/*" element={<Courses courses={courses}/>} />
            <Route path="Calendar" element={<h1>Calendar</h1>} />
            <Route path="Index" element={<h1>Index</h1>} />
            <Route path="History" element={<h1>History</h1>} />
            <Route path="Studio" element={<h1>Studio</h1>} />
            <Route path="Help" element={<h1>Help</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default Kanbas;