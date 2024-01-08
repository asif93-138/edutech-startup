import { Link } from "react-router-dom";
import footerLogo from "../assets/Images/Home Page/Learn_Daily_black-removebg-preview.png";
export default function Footer() {
  return (
    <footer className="text-bg-secondary mt-5">
      <section className="d-flex align-items-center footer-flex py-3">
      <h3 className="logo-txt m-0 border-end border-white p-3 px-sm-5 py-sm-4 f-b"><b>Learn Daily</b></h3>
     <article className="fl-sp">
     <p className="text-center">
      <i className="bi px-3 fs-3 bi-facebook"></i>
      <i className="bi px-3 fs-3 bi-linkedin"></i>
      <i className="bi px-3 fs-3 bi-youtube"></i>
      </p>
      <ul className="d-flex footer-links p-0">
          <li className="nav-item px-2">
            <Link className="nav-link link-txt link-txt-f" to="/">Home</Link>
          </li>
          <li className="nav-item px-2">
            <Link className="nav-link link-txt link-txt-f" to="/about">About</Link>
          </li>
          <li className="nav-item px-2">
            <Link className="nav-link link-txt link-txt-f" to="/courselist">Courses</Link>
          </li>
          <li className="nav-item px-2">
            <Link className="nav-link link-txt link-txt-f" to="/contact">Contact</Link>
          </li>
        </ul>
     </article>
      </section>
      <p className="text-center text-bg-dark py-2">Copyright &#169; 2024</p>
    </footer>
  );
}
