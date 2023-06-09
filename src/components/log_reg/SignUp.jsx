import { useNavigate, Link } from "react-router-dom";
import supabase from "../../services/supabase";
import "./SignUp.scss";

const SignUp = () => {
  const navigation = useNavigate();

  //wysłanie formularza rejestracji
  const handleSignUp = async (e) => {
    e.preventDefault();
    const { email, password, password_confirm } = e.target.elements;
    if (!email.value.includes("@")) {
      alert("Email must have @");
    } else if (password.value !== password_confirm.value) {
      alert("Both passwords are different.");
    }

    let { error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
    });

    if (!error) {
      navigation("/Projects/SignIn");
      return;
    }
    console.error(error);
  };

  return (
    <>
      <div className="register_section">
        <div className="form_container">
          <div className="form_content">
            <h1 className="heading_form">Sign Up</h1>
            <form className="form" onSubmit={handleSignUp}>
              <input id="email" placeholder="Your email" />
              <input id="password" type="password" placeholder="Password" />
              <input
                id="password_confirm"
                type="password"
                placeholder="Repeat Your password"
              />
              <button className="btn_register">Sign Up</button>
            </form>
            <u>
              <h4 style={{ marginBottom: "1em" }}>Do you have an account?</h4>
            </u>
            <Link
              to="/Projects/SignIn"
              style={{
                textDecoration: "none",
                color: "rgba(45, 89, 233)",
                width: "3em",
              }}
            >
              Sign In
            </Link>
          </div>
          <div className="image"></div>
        </div>
      </div>
    </>
  );
};
export default SignUp;
