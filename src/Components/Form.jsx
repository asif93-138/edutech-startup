import classes from "../styles/form.module.css";
import Input from "./textinput";
export default function Form({ ...rest }) {
  return (
    <>
      <form {...rest}>
        <Input type="text" placeholder="First Name" required />
        <Input type="text" placeholder="Last Name" required />
        <Input type="text" placeholder="Username" required />
        <Input type="text" placeholder="Date of Birth" required />
        <Input type="email" placeholder="Email" required />
        <Input type="password" placeholder="Password" required />
        <Input type="password" placeholder="Confirm Password" required />
        <Input type="submit" value="SignUp" />
      </form>
    </>
  );
}
