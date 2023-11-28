import { useState } from "react";
import reactLogo from "./assets/react.svg";
import CourseList from "./Components/Course_List/CourseList";
import "./styles/App.css";
import SignUp from "./Components/SignUp/signup";
import Quiz from "./Components/Quiz/Quiz";
function App() {
  return (
    <div>
      <Quiz />
    </div>
  );
}

export default App;
