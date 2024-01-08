import icon from '../../assets/Images/Login Page/login-icon.png';
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div>
    
        <Navbar />
        <h2 className='container text-center mt-5'>Log in</h2>
        <div className="container mt-5 d-sm-flex justify-content-around">
          <img src={icon} className='w-25 rounded elm-blocking' />
        <form className="bg-light p-4 w-50 frm-sz rounded text-center">
    <div className="form-floating mb-3 mt-3">
      <input type="text" className="form-control" id="email" placeholder="Enter email" name="email" />
      <label htmlFor="email">Email</label>
    </div>
    <div className="form-floating mt-3 mb-3">
      <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" />
      <label htmlFor="pwd">Password</label>
    </div>
    <button type="submit" className="btn btn-outline-dark mb-3 card-btn rounded w-100">Submit</button>
    <p><b>Don't have an account?</b></p>
    <div><b>Please, <Link to='/signup' className='btn p-0 sp mb-1 ms-2'><h5 className='d-inline m-0'>Sign Up</h5></Link></b></div>
  </form>
        </div>
        <Footer />
    
    </div>
  );
}
