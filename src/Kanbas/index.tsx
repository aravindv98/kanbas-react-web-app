import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import db from "./Database";
import { useState , useEffect} from "react";
import store from "./Store";
import { Provider } from "react-redux";
import axios from "axios";
function Kanbas() {
  const [courses, setCourses] = useState<any[]>([]);
  const COURSES_API = "http://localhost:4000/api/courses";
  const findAllCourses = async () => {
    const response = await axios.get(COURSES_API);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
  }, []);
    const [course, setCourse] = useState({

      _id: "New Course ID", name: "New Course", number: "New Number",
      startDate: "2023-09-10", endDate: "2023-12-15",
      image: "/courses.gif"
    });
    const addNewCourse =  async () => {
      const response = await axios.post(COURSES_API, course);
      setCourses([ ...courses, response.data ]);  
    };
    const deleteCourse = async (courseId: string) => {
    const response = await axios.delete(
      `${COURSES_API}/${courseId}`
    );
    setCourses(courses.filter(
      (c) => c._id !== courseId));
    }
    const updateCourse = async () => {
      const response = await axios.put(
        `${COURSES_API}/${course._id}`,
        course
      );
      setCourses(
        courses.map((c) => {
          if (c._id === course._id) {
            return course;
          }
          return c;
        })
      );
    };  
  return (
    <Provider store={store}>
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
  </Provider>
  );
}

export default Kanbas;