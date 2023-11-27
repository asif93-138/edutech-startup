import classes from "../../styles/sidebar.module.css";
export default function SideBar() {
  return (
    <div>
      <div className={classes.sidebar}>
        <h1>কোর্স খুঁজুন</h1>
        <div className={`${classes.category} ${classes.one}`}>
          <h2>কোর্স টাইপ:</h2>
          <div className={classes.inputBox}>
            <input type="checkbox" id="checkbox" name="checkbox" />
            <label htmlFor="checkbox">মিনি কোর্স</label>
          </div>
          <div className={classes.inputBox}>
            <input type="checkbox" id="checkbox" name="checkbox" />
            <label htmlFor="checkbox">লং কোর্স</label>
          </div>
        </div>
        <div className={`${classes.category} ${classes.two}`}>
          <h2>শ্রেণি:</h2>
          <div className={classes.inputBox}>
            <input type="checkbox" id="checkbox" name="checkbox" />
            <label htmlFor="checkbox">৯ম-১০ম শ্রেণি</label>
          </div>
          <div className={classes.inputBox}>
            <input type="checkbox" id="checkbox" name="checkbox" />
            <label htmlFor="checkbox">একাদশ-দ্বাদশ</label>
          </div>
          <div className={classes.inputBox}>
            <input type="checkbox" id="checkbox" name="checkbox" />
            <label htmlFor="checkbox">এডমিশন</label>
          </div>
          <div className={classes.inputBox}>
            <input type="checkbox" id="checkbox" name="checkbox" />
            <label htmlFor="checkbox">৬ষ্ঠ-৮ম</label>
          </div>
        </div>
        <div className={`${classes.category} ${classes.two}`}>
          <h2>বিভাগ:</h2>
          <div className={classes.inputBox}>
            <input type="checkbox" id="checkbox" name="checkbox" />
            <label htmlFor="checkbox">বিজ্ঞান</label>
          </div>
          <div className={classes.inputBox}>
            <input type="checkbox" id="checkbox" name="checkbox" />
            <label htmlFor="checkbox">মানবিক</label>
          </div>
          <div className={classes.inputBox}>
            <input type="checkbox" id="checkbox" name="checkbox" />
            <label htmlFor="checkbox">বাণিজ্য</label>
          </div>
        </div>
      </div>
    </div>
  );
}
