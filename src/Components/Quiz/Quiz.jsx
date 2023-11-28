import classes from "../../styles/quiz.module.css";
import Container from "../Container";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Option from "./Option";
export default function Quiz() {
  return (
    <div>
      <Container>
        <Navbar />
        <div className={classes.quizSection}>
          <div className={classes.quizContainer}>
            <h2>What is the capital of France?</h2>
            <div className={classes.options}>
              <Option text="Paris" />
              <Option text="Rome" />
              <Option text="Dhaka" />
              <Option text="Mumbai" />
            </div>
          </div>
        </div>
        <button className={classes.nextButton}>Next</button>
        <Footer />
      </Container>
    </div>
  );
}
