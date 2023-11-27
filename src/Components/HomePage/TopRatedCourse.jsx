import classes from "../../styles/Topratedcoure.module.css";

export default function TopRatedCourse(props) {
  const { image, price, duration, instructorName, institution, department } =
    props;
  return (
    <div>
      <a href="#">
        <div className={classes.item}>
          <img src={image} alt="" height="200px" width="200px" />
          <div className={classes.courseInfo}>
            <span className={classes.price}>
              মূল্য: <span className={classes.number}>{price}</span>
            </span>
            <span className={classes.duration}>
              ব্যাপ্তি: <span className={classes.durationText}>{duration}</span>
            </span>
            <br />
            <span className={classes.instructor}>ইনস্ট্রাক্টর</span>

            <span className={classes.instructorName}>{instructorName}</span>
            <span className={classes.instructorInfo}>{department}</span>
            <span className={classes.instructorInfo}>{institution}</span>
          </div>
        </div>
      </a>
    </div>
  );
}
