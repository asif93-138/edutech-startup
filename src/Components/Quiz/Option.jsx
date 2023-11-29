import classes from "../../styles/option.module.css";
export default function Option({ text }) {
  return (
    <div>
      <div className={classes.option}>
        <label>
          <input
            className={classes.radioInput}
            type="radio"
            name="answer"
            value="paris"
          />
          {text}
        </label>
      </div>
    </div>
  );
}
