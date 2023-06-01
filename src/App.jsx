import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Base from "./components/Base";
import Projects from "./projects/Projects";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import NoteBook from "./notebook_project/notebook";

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
