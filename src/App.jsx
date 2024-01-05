import SignUp from "./Components/SignUp/signup";
import Login from "./Components/LoginPage/Login";
import Quiz from "./Components/Quiz/Quiz";
import HomePage from "./Components/HomePage/Home";
import CourseList from "./Components/Course_List/CourseList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./Components/Error";
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courselist" element={<CourseList />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App;
