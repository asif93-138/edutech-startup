import classes from "../../styles/signup.module.css";
import Form from "../Form";
import Container from "../Container";
import Navbar from "../Navbar";
import Footer from "../Footer";
export default function SignUp() {
  return (
    <Container>
      <Navbar />
      <div className={classes.mainContainer}>
        <div class={classes.signupImage}></div>
        <div className={classes.formContainer}>
          <Form action="/" method="post" />
          <div className={classes.logIn}>
            একাউন্ট করা আছে?<a href="">লগ-ইন করুন</a>
          </div>
          <div className={classes.text}>OR</div>
          <button type="button">SignUp with Google</button>
        </div>
      </div>
      <Footer />
    </Container>
  );
}