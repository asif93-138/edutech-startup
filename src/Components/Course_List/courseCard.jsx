
export default function Course(props) {
  const { image, courseName, coursePrice } = props;
  return (
    <div>
      <div>
        <img src={image} alt="Product Image" />
        <div>
          <div>{courseName}</div>
          <div>{coursePrice}</div>
          <a href="#">
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
}
