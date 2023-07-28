import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Base from "./components/Base";
import Projects from "./components//projects/Projects";
import SignUp from "./components/log_reg/SignUp";
import SignIn from "./components/log_reg/SignIn";
import NoteBook from "./components/notebook_project/notebook";
import Home from "./components/give_items_project/src/components/Home/Home";
import SignInItems from "./components/give_items_project/src/components/SignIn/SignInItems";
import SignUpItems from "./components/give_items_project/src/components/SignUp/SignUpItems";
import LogOutItems from "./components/give_items_project/src/components/LogOut/LogOut";

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
          <Route path="/Projects/GiveITems" element={<Home />} />;
          <Route
            path="/Projects/GiveItems/logowanie"
            element={<SignInItems />}
          />
          ;
          <Route
            path="/Projects/GiveItems/rejestracja"
            element={<SignUpItems />}
          />
          ;
          <Route
            path="/Projects/GiveItems/wylogowanie"
            element={<LogOutItems />}
          />
          ;
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
