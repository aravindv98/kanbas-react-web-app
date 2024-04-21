import ModuleList from "../Modules/List";
import Toolbar from "../Modules/Components/Toolbar";
import CourseStatus from "../Home/Status"

function Home() {
  return (
    <div className="d-flex">
      <div className="col-9">
        <ModuleList />
      </div>
      <CourseStatus />
    </div>
  );
}
export default Home;