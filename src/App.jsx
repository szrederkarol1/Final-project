import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Base from "./components/Base";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Projects from "./projects/Projects";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Base />} />;
        <Route path="SignIn" element={<SignIn />} />;
        <Route path="SignUp" element={<SignUp />} />;
        <Route path="Projects" element={<Projects />} />
      </Routes>
    </Router>
  );
};

export default App;
