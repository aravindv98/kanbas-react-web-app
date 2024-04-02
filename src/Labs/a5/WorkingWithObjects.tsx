import React, { useState } from "react";
function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
  });
  const [module, setModule] = useState({
    id: 1, name: "NodeJS and MongoDB",
    description: "Create a NodeJS server with ExpressJS, MongoDB",
    course: "CS5610: Web Development"
  });
  const ASSIGNMENT_URL = "http://localhost:4000/a5/assignment"
  const MODULE_URL = "http://localhost:4000/a5/module"
  return (
    <div>
      <h3>Working With Objects</h3>
      <h4>Retrieving Objects</h4>
      <a className="btn btn-primary" href="http://localhost:4000/a5/assignment">
        Get Assignment
      </a>
      <h4>Retrieving Properties</h4>
      <a className="btn btn-primary" href="http://localhost:4000/a5/assignment/title">
        Get Title
      </a>
      <h4>Modifying Properties</h4>
      <a href={`${ASSIGNMENT_URL}/title/${assignment.title}`}>
        Update Title
      </a>
      <input type="text" 
        onChange={(e) => setAssignment({ ...assignment,
            title: e.target.value })}
        value={assignment.title}/>
        <h4>Modifying Assignment Score</h4>
      <a href={`${ASSIGNMENT_URL}/score/${assignment.score}`}>
        Update Score
      </a>
      <input type="number" 
        onChange={(e) => setAssignment({ ...assignment,
            score: parseInt(e.target.value) })}
        value={assignment.score}/>
        <h4>Modifying Assignment Completion</h4>
      <a href={`${ASSIGNMENT_URL}/moduleCompletion/${assignment.completed}`}>
        Update Completion
      </a>
      <input type="checkbox" 
        onChange={(e) => 
          setAssignment({ ...assignment,
            completed: e.target.checked })}
            checked={assignment.completed}/>
        <h4>Retrieving Module Object</h4>
      <a className="btn btn-primary" href="http://localhost:4000/a5/module">
        Get Module
      </a>
      <h4>Retrieving Module Properties</h4>
      <a className="btn btn-primary" href="http://localhost:4000/a5/module/name">
        Get Module Name
      </a>
      <h4>Modifying Module Name</h4>
      <a href={`${MODULE_URL}/name/${module.name}`}>
        Update Name
      </a>
      <input type="text" 
        onChange={(e) => setModule({ ...module,
            name: e.target.value })}
        value={module.name}/>
        <h4>Modifying Module Description</h4>
      <a href={`${MODULE_URL}/description/${module.description}`}>
        Update Description
      </a>
      <input type="text" 
        onChange={(e) => setModule({ ...module,
            description: e.target.value })}
        value={module.description}/>
    </div>
    
  );
}
export default WorkingWithObjects;