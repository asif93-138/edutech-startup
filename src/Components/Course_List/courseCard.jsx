import classes from "../../styles/coursecard.module.css";
export default function Course(props) {
  const { image, courseName, coursePrice } = props;
  return (
    <div>
      <div className={classes.card}>
        <img src={image} alt="Product Image" />
        <div className={classes.cardContent}>
          <div className={classes.cardHeading}>{courseName}</div>
          <div className={classes.cardPrice}>{coursePrice}</div>
          <a href="#" className={classes.buyNowBtn}>
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
}
