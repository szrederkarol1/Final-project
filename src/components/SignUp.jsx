import { useNavigate, Link } from "react-router-dom";
import supabase from "../services/supabase";
import "./SignUp.scss";

const SignUp = () => {
  const navigation = useNavigate();
  const handleSignUp = async (e) => {
    e.preventDefault();
    const { email, password, password_confirm } = e.target.elements;

    if (password.value !== password_confirm.value) {
      alert("Both passwords are different.");
      return;
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
      <div className="register_container">
        <div className="form_container">
          <h1>Sign Up</h1>
          <form className="form" onSubmit={handleSignUp}>
            <input id="email" placeholder="Your email" />
            <input
              id="password"
              type="password"
              placeholder="password"
            />
            <input
              id="password_confirm"
              type="password"
              placeholder="Repeat Your password"
            />
            <button>Register</button>
          </form>
          <Link to="/Projects/SignIn">Log In</Link>
        </div>
      </div>
    </>
  );
};
export default SignUp;
