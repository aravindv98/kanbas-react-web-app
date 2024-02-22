import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaInbox, FaHistory, FaVideo, FaCreativeCommons, FaQuestionCircle } from "react-icons/fa";
function KanbasNavigation() {
    
  const links = [
    { label: "Northeastern",   icon: <img src={require('./NU_logo.png')} />},
    { label: "Account",   icon: <img src={require('./aravind.png')} className="avatar"/>  },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" />  },
    { label: "Courses",   icon: <FaBook className="fs-2" />           },
    { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-2" /> },
    { label: "Inbox",  icon: <FaInbox className="fs-2" /> },
    { label: "History",  icon: <FaHistory className="fs-2" /> },
    { label: "Studio",  icon: <FaVideo className="fs-2" /> },
    { label: "Commons",  icon: <FaCreativeCommons className="fs-2" /> },
    { label: "Help",  icon: <FaQuestionCircle className="fs-2" /> }
  ];
  const { pathname } = useLocation();
  return (
    <ul className="wd-kanbas-navigation">
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
          <Link to={`/Kanbas/${link.label}`}> {link.icon} {link.label} </Link>
        </li>
      ))}
    </ul>
  );
}
export default KanbasNavigation;

