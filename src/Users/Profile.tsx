import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
export default function Profile() {
    const [profile, setProfile] = useState({
        username: "", password: "",
        firstName: "", lastName: "", dob: "", email: "", role: "USER"
    });
    const navigate = useNavigate();
    const fetchProfile = async () => {
        const account = await client.profile();
        setProfile(account);
    };
    useEffect(() => {
        fetchProfile();
    }, []);
    const save = async () => {
        await client.updateUser(profile);
    };
    const signout = async () => {
        await client.signout();
        navigate("/Kanbas/Account/Signin");
    };

    return (
        <div className="container mt-5">
            <h1>Profile</h1>
            {profile && (
                <div>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input className="form-control"
                            id="username"
                            value={profile.username}
                            onChange={(e) => setProfile({ ...profile, username: e.target.value })} />
                    </div>
                    <br />
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input className="form-control"
                            id="password"
                            value={profile.password}
                            onChange={(e) => setProfile({ ...profile, password: e.target.value })} />
                    </div>
                    <br />
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input className="form-control"
                            value={profile.firstName}
                            id="firstName"
                            onChange={(e) => setProfile({ ...profile, firstName: e.target.value })} />
                    </div>
                    <br />
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input className="form-control"
                            id="lastName"
                            value={profile.lastName}
                            onChange={(e) => setProfile({ ...profile, lastName: e.target.value })} />
                    </div>
                    <br />
                    <div className="form-group">
                        <label htmlFor="dob">DOB</label>
                        <input className="form-control"
                            id="dob"
                            value={profile.dob}
                            type="date"
                            onChange={(e) => setProfile({ ...profile, dob: e.target.value })} />
                    </div>
                    <br />
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input className="form-control"
                            id="email"
                            value={profile.email}
                            onChange={(e) => setProfile({ ...profile, email: e.target.value })} />
                    </div>
                    <br />
                    <div className="form-group">
                        <label htmlFor="role">Role</label>
                        <select className="form-control" onChange={(e) =>
                            setProfile({ ...profile, role: e.target.value })}>
                            <option value="USER">User</option>
                            <option value="ADMIN">Admin</option>
                            <option value="FACULTY">Faculty</option>
                            <option value="STUDENT">Student</option>
                        </select>
                    </div>
                    <br />
                    <button className="btn btn-primary" onClick={save}>
                        Save
                    </button>
                    &nbsp;
                    <button className="btn btn-danger" onClick={signout}>
                        Signout
                    </button>
                    &nbsp;
                    <Link to="/Kanbas/Account/Admin/Users"
                        className="btn btn-warning">
                        Users
                    </Link>

                </div>
            )}
        </div>
    );
}
