import db from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import "./index.css"
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
function Courses({ courses }: { courses: any[]; }) {
  const { courseId } = useParams();
  const course = courses.find(
    (course) => course._id === courseId);
  return (
    <div>
      <h4><HiMiniBars3 /> {course?._id} {course?.name}
      <div className="float-end">
                    <button type="button" className="btn btn-primary float-end m-1 p-1 color:  #333333;background-color:  azure; border:  #333333 solid 1px; ">
                        <i className="fa fa-eye-slash" aria-hidden="true"></i>
                        Student View</button>
                </div>
      </h4>
      <hr></hr>
      <CourseNavigation />
      <div>
        <div className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{ left: "320px", top: "50px" }} >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>}/>
            <Route path="Modules" element={<Modules/>} />
            <Route path="Assignments"
                   element={<Assignments/>} />
            <Route path="Assignments/:assignmentId"
                   element={<AssignmentEditor/>}/>
            <Route path="Grades" element={<Grades/>} />
          </Routes>
        </div>
      </div>
    </div>
);}
export default Courses;
