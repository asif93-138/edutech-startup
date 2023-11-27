import { useState } from "react";
import reactLogo from "./assets/react.svg";
import HomePage from "./Components/HomePage/Home";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <HomePage />
    </div>
  );
}

export default App;
