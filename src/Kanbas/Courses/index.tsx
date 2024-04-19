import db from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Breadcrumb from "./Components/Breadcrumb";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import AssignmentAdd from "./Assignments/Editor/AssignmentAdd";

function Courses({ courses }: { courses: any[]; }) {
    const { courseId } = useParams();
    const course = courses.find((course) => course._id === courseId);
    //   return (
    //     <div>
    //       <h1><HiMiniBars3 /> Course {course?.name}</h1>
    //       <CourseNavigation />
    //       <div>
    //         <div
    //           className="overflow-y-scroll position-fixed bottom-0 end-0"
    //           style={{ left: "320px", top: "50px" }} >
    //           <Routes>
    //             <Route path="/" element={<Navigate to="Home" />} />
    //             <Route path="Home" element={<h1>Home</h1>} />
    //             <Route path="Modules" element={<h1>Modules</h1>} />
    //             <Route path="Piazza" element={<h1>Piazza</h1>} />
    //             <Route path="Assignments" element={<h1>Assignments</h1>} />
    //             <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
    //             <Route path="Grades" element={<h1>Grades</h1>} />
    //           </Routes>
    //         </div>
    //       </div>

    //     </div>
    //   );

    return (
        <div className="row">
            <Breadcrumb courseName={course?.name as String}/>
            <hr style={{ marginLeft: "15px", marginTop: "20px", width: "95%" }} />
            <CourseNavigation />
            <div className="col">
                <div
                    // className="overflow-y-scroll position-fixed bottom-0 end-0"
                    className="bottom-0 end-0"
                >
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home/>} />
                        <Route path="Modules" element={<Modules/>} />
                        <Route path="Piazza" element={<h1>Piazza</h1>} />
                        <Route path="Assignments" element={<Assignments/>} />
                        <Route path="Assignments/AddAssignment" element={<AssignmentAdd />}/>
                        <Route path="Assignments/:assignmentId"  element={<AssignmentEditor/>}/>
                        <Route path="Grades" element={<Grades/>} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}
export default Courses;