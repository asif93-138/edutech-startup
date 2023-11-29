import classes from "../../styles/login.module.css";
import Form from "../Form";
import Container from "../Container";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Input from "../textinput";
import { NavLink } from "react-router-dom";
export default function Login() {
  return (
    <div>
      <Container>
        <Navbar />
        <div className={classes.mainContainer}>
          <div class={classes.signupImage}></div>
          <div className={classes.formContainer}>
            <Form action="/" method="post">
              <Input type="text" placeholder="Username or Email Address" />
              <Input type="password" placeholder="Password" />
              <Input type="submit" value="Log In" />
            </Form>
            <div className={classes.logIn}>
              একাউন্ট করা নেই ?
              <NavLink to="/signup">
                <span className={classes.signupText}>একাউন্ট তৈরী করুন</span>
              </NavLink>
            </div>
            <div className={classes.text}>OR</div>
            <button type="button">SignUp with Google</button>
          </div>
        </div>
        <Footer />
      </Container>
    </div>
  );
}
