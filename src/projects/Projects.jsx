import { Component } from "react";
import "./Projects.scss";
import SignIn from "../components/SignIn";

export default class Projects extends Component {
  render() {
    return (
      <div className="registration_container">
        <SignIn/>
        <SignUp/>
      </div>
    );
  }
}
