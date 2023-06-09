import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Base from "./components/Base";
import Projects from "./components//projects/Projects";
import SignUp from "./components/log_reg/SignUp";
import SignIn from "./components/log_reg/SignIn";
import NoteBook from "./components//notebook_project/notebook";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Base />} />;
          <Route path="/Projects" element={<Projects />} />;
          <Route path="/Projects/SignIn" element={<SignIn />} />;
          <Route path="/Projects/SignUp" element={<SignUp />} />;
          <Route path="/Projects/NoteBook" element={<NoteBook />} />;
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
