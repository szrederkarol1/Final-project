import supabase from "../../services/supabase";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import "./SignIn.scss";

const SignIn = () => {
  const [authError, setauthError] = useState(null);
  const navigation = useNavigate();
  const handleSignIn = async (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;

    let { error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });
    if (!error) {
      navigation("/Projects/NoteBook");
      return;
    }
    setauthError(error.message);
  };
  return (
    <>
      <div className="sign_in_section">
        <div className="form_container">
          <div className="form_content">
            <h1 className="heading_form">Sign In</h1>
            {authError && <div style={{ color: "red" }}>{authError}</div>}
            <form className="form" onSubmit={handleSignIn}>
              <input id="email" placeholder="Your email" />
              <input id="password" type="password" placeholder="Password" />
              <button className="btn_log_in">Log In</button>
            </form>
            <u>
              <h4 style={{ marginBottom: "1em" }}>Create an account</h4>
            </u>
            <Link
              to="/Projects/SignUp"
              style={{
                textDecoration: "none",
                color: "rgba(45, 89, 233)",
                width: "4em",
              }}
            >
              Sign Up
            </Link>
          </div>
          <div className="image"></div>
        </div>
      </div>
    </>
  );
};
export default SignIn;
