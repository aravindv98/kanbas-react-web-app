import { Link, useLocation } from "react-router-dom";
import "./index.css"; // feel free to use the CSS from previous assignments
function CourseNavigation() {
  const links = ["Home", "Modules", "Piazza", "Grades", "Assignments","Quizzes","People",
"Panopto Video","Credentials","Progress Reports (EAB Navigate)"];
  const { pathname } = useLocation();
  const pageName = pathname.split('/').pop();
  console.log(pathname);
  return (
    

    <ul className="wd-navigation">
        <p className="color: darkgray; font-size: 13px; font-family: Lato Extended"><i>Spring 2024 </i></p>
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link) ? "wd-active" : ""}>
          <Link to={link}>{link}</Link>
        </li>
      ))}
    </ul>
  );
}
export default CourseNavigation;

