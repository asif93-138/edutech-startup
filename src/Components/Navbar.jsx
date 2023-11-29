import SearchBar from "./searchBar";
import classes from "../styles/Navbar.module.css";
import Logo from "../assets/Images/Home Page/Learn Daily.jpg";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <div className={classes.navbar}>
        <div className={classes.logo}>
          <NavLink to="/">
            <img src={Logo} width="250px" height="70px" alt="" />
          </NavLink>
        </div>
        <SearchBar />
        <ul className={classes.navitems}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/courselist">Courses</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/login">
              <button className={classes.signupBtn}>Login</button>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
