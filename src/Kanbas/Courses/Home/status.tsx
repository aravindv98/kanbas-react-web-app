import React from "react";
import './status.css';
function Status(){
    return (
        <div>
        <h2 className="mt-4">Course Status</h2>
        <div className="mb-3 row">
            <div className="col">
                <button className="btn btn-secondary">Unpublished</button>
            </div>
            <div className="col">
                <button className="btn btn-success">Published</button>
            </div>
        </div>
        
        <ul className="list-group mb-4">
            <li className="list-group-item"><button className='btnCss'>Importing Existing content</button></li>
            <li className="list-group-item"><button className='btnCss'>Import from Commons</button></li>
            <li className="list-group-item"><button className='btnCss'>Choose from Home Page</button></li>
            <li className="list-group-item"><button className='btnCss'>View Course Stream</button></li>
            <li className="list-group-item"><button className='btnCss'>New Announcement</button></li>
            <li className="list-group-item"><button className='btnCss'>New Analytics</button></li>
            <li className="list-group-item"><button className='btnCss'>View Course Notifications</button></li>
        </ul>

        <h2 className="mt-4">Coming Up</h2>
        <button className="text-red mb-3 d-block">View Calendar</button>
        <ul className="list-unstyled">
            <li className="mb-1"><button className="text-red">Lecture CS5610 Sep7 at 11:45 am</button></li>
            <li className="mb-1"><button className="text-red">Lecture CS4550 Sep 11 at 11:45 am</button></li>
            <li className="mb-1"><button className="text-red">Lecture CS5610 Sep 11 at 6 pm</button></li>
        </ul>
</div>
    );
}
export default Status;