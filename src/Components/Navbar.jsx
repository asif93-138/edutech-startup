import SearchBar from "./searchBar";
import classes from "../styles/Navbar.module.css";
import Logo from "../assets/Images/Learn Daily.jpg";
export default function Navbar() {
  return (
    <div>
      <div className={classes.navbar}>
        <div className={classes.logo}>
          <img src={Logo} width="250px" height="70px" alt="" />
        </div>
        <SearchBar />
        <ul className={classes.navitems}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Courses</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">
              <button className={classes.signupBtn}>Login</button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
