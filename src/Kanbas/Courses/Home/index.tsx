import ModuleList from "../Modules/List";
import Status from "./status";
function Home() {
  return (
    <div className="container-fluid">
    <div className="row">
    <div className="column col-8 third">
      <ModuleList />
      </div>
    <div className="column col-3 fourth">
      <Status/>
      </div>
    </div>
    </div>
  );
}
export default Home;