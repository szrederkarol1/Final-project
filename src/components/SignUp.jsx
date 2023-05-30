import { useNavigate } from "react-router-dom";
import supabase from "../services/supabase";

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
      navigation("/");
      return;
    }
    console.error(error);
  };

  return (
    <>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp}>
        <input id="email" placeholder="Enter Your email" />
        <input id="password" type="password" placeholder="Enter the password" />
        <input
          id="password_confirm"
          type="password"
          placeholder="Confirm password"
        />
        <button>Register</button>
      </form>
    </>
  );
};
export default SignUp;
