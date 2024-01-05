
import Form from "../Form";

import Navbar from "../Navbar";
import Footer from "../Footer";
import Input from "../textinput";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div>
    
        <Navbar />
        <div>
          <div></div>
          <div>
            <Form action="/" method="post">
              <Input type="text" placeholder="Username or Email Address" />
              <Input type="password" placeholder="Password" />
              <Input type="submit" value="Log In" />
            </Form>
            <div>
              একাউন্ট করা নেই ?
              <Link to="/signup">
                <span>একাউন্ট তৈরী করুন</span>
              </Link>
            </div>
            <div>OR</div>
            <button type="button">SignUp with Google</button>
          </div>
        </div>
        <Footer />
    
    </div>
  );
}
