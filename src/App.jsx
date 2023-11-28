import { useState } from "react";
import reactLogo from "./assets/react.svg";
import CourseList from "./Components/Course_List/CourseList";
import "./styles/App.css";
import SignUp from "./Components/SignUp/signup";
import Login from "./Components/LoginPage/Login";

function App() {
  return (
    <div>
      <CourseList />
    </div>
  );
}

export default App;
