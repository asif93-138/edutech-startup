
import Form from "../Form";

import Navbar from "../Navbar";
import Footer from "../Footer";
import Input from "../textinput";
import { Link } from "react-router-dom";
export default function SignUp() {
  return (
  <>
        <Navbar />
      {/* <div>
        <div></div>
        <div>
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
          <div>
            একাউন্ট করা আছে?{" "}
            <Link to="/login">
              <span>লগ-ইন করুন</span>
            </Link>
          </div>
          <div>OR</div>
          <button type="button">SignUp with Google</button>
        </div>
      </div> */}
      <Footer />
  </>
  );
}
