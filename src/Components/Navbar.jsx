
import Logo from "../assets/Images/Home Page/Learn Daily.jpg";
import { Link, NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
    <div className="container">
      <Link className="navbar-brand me-5" to="/"><h5 className="logo-txt m-0"><b>Learn Daily</b></h5></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="mynavbar">
          <div className="d-flex mt-2 mt-sm-0 me-auto">
      <div className="input-group">
        <input type="text" className="form-control pe-5" placeholder="search..." name="email" />
        <button className="input-group-text btn btn-outline-dark">Search</button>
      </div>
      </div>
        <ul className="navbar-nav me-2">
          <li className="nav-item">
            <NavLink className={({isActive}) => isActive ? "active" : "nav-link link-txt"} to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({isActive}) => isActive ? "active" : "nav-link link-txt"} to="/about">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({isActive}) => isActive ? "active" : "nav-link link-txt"} to="/courselist">Courses</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({isActive}) => isActive ? "active" : "nav-link link-txt"} to="/contact">Contact</NavLink>
          </li>
        </ul>
  <NavLink className={({isActive}) => isActive ? "active-log" : ""} to="/login"><button type="button" className="btn btn-outline-dark">Log in</button></NavLink>
      </div>
    </div>
  </nav>
  );
}
