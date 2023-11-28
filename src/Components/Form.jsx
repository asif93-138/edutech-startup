import classes from "../styles/form.module.css";
import Input from "./textinput";
export default function Form({ children, ...rest }) {
  return (
    <>
      <form {...rest}>{children}</form>
    </>
  );
}
