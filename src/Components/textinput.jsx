import classes from "../styles/input.module.css";
export default function Input({ ...rest }) {
  return (
    <div>
      <input className={classes.textInput} {...rest} />
    </div>
  );
}
