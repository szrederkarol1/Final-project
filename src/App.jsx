import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Base from "./components/Base";
import Projects from "./projects/Projects";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Base />} />;
          <Route path="/Projects" element={<Projects />} />;
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
