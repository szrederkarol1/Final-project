import supabase from "../services/supabase";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

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
      navigation("/");
      return;
    }
    setauthError(error.message);
  };
  return (
    <>
      <h1>Sign In</h1>
      {authError && <div style={{ color: "red" }}>{authError}</div>}
      <form onSubmit={handleSignIn}>
        <input id="email" placeholder="Enter Your email" />
        <input id="password" type="password" placeholder="Enter the password" />
        <button>Log in</button>
      </form>
    </>
  );
};
export default SignIn;
