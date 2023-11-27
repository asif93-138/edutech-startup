import classes from "../styles/footer.module.css";
import footerLogo from "../assets/Images/Home Page/Learn_Daily_black-removebg-preview.png";
export default function Footer() {
  return (
    <div>
      <div className={classes.footer}>
        <div className={classes.footerContainer}>
          <div className={classes.footerLogo}>
            <img src={footerLogo} alt="Your Logo" width="250px" height="70px" />
            <h1>Your Website</h1>
          </div>
          <div className={classes.footerLinks}>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className={classes.footerContact}>
            <p>Contact Us:</p>
            <p>Email: dailylearn247@gmail.com</p>
            <p>Phone: +88 01891798387</p>
          </div>
        </div>
        <div className={classes.footerBottom}>
          <p>&copy; 2023 Your Website. All rights reserved.</p>
          <p>Designed by Minhaz Chowdhury</p>
        </div>
      </div>
    </div>
  );
}
