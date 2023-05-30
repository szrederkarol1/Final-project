import supabase from "../services/supabase";
const SignIn = () => {
  const handleSignIn = asunc(e) =>
  {
    e.preventDefault();
    const {email, password} = e.target.elements;

    let { data, error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value
    });
    if(!error) {
     console.log(data);
     return;
    }
    console.error(error);
  }
  return (
    <>
      <h1>Sign In</h1>
      <form onSubmit={handleSignIp}>
        <input id="email" placeholder="Enter Your email" />
        <input id="password" type="password" placeholder="Enter the password" />
        <button>Log in</button>
      </form>
    </>
  );
};
export default SignIn;
