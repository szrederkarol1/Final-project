import "./Projects.scss";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <>
      <div className="projects_content">
        <div className="register_content">
          <Link
            to="/Projects/SignUp"
            className="register"
            style={{
              textDecoration: "none",
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <span className="line"></span>Thoughst
            <span className="fancy">Wandering</span> Lines
            <span className="line"></span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Projects;
