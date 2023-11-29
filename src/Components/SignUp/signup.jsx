import classes from "../../styles/signup.module.css";
import Form from "../Form";
import Container from "../Container";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Input from "../textinput";
import { NavLink } from "react-router-dom";
export default function SignUp() {
  return (
    <Container>
      <Navbar />
      <div className={classes.mainContainer}>
        <div class={classes.signupImage}></div>
        <div className={classes.formContainer}>
          <Form action="/" method="post">
            <Input type="text" placeholder="First Name" required />
            <Input type="text" placeholder="Last Name" required />
            <Input type="text" placeholder="Username" required />
            <Input type="text" placeholder="Date of Birth" required />
            <Input type="email" placeholder="Email" required />
            <Input type="password" placeholder="Password" required />
            <Input type="password" placeholder="Confirm Password" required />
            <Input type="submit" value="SignUp" />
          </Form>
          <div className={classes.logIn}>
            একাউন্ট করা আছে?{" "}
            <NavLink to="/login">
              <span className={classes.loginText}>লগ-ইন করুন</span>
            </NavLink>
          </div>
          <div className={classes.text}>OR</div>
          <button type="button">SignUp with Google</button>
        </div>
      </div>
      <Footer />
    </Container>
  );
}
