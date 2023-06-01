import { useNavigate } from "react-router-dom";
import supabase from "../services/supabase";

function MainSupabase() {
  const navigation = useNavigate();
  consthandleLogout = async () => {
    let { error } = await supabase.auth.signOut();
    if(!error) {
        navigation ('/Projects/SignIn');
    }
    navigation("/Projects/SignIn");
  };
  return (
    <div>
      <button onClick={handleLogout}>Log out</button>
      <h1>Hello!</h1>
    </div>
  );
}

export default MainSupabase;
