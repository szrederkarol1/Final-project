import { useNavigate } from "react-router-dom";
import supabase from "../services/supabase";
import { useEffect, useState } from "react";

function NoteBook() {
  const navigation = useNavigate();
  const [flag, setFlag] = useState(false);
  let alreadyMounted = false;

  useEffect(() => {
    if (!alreadyMounted) {
      getSession();
    }
    alreadyMounted = true;
  }, []);

  const getSession = async () => {
    const { data, error } = await supabase.auth.getSession();
    console.log(data);
    if (!data.session) {
      navigation("/Projects/SignIn");
    }
  };

  const handleLogout = async () => {
    let { error } = await supabase.auth.signOut();
    if (!error) {
      navigation("/Projects/SignIn");
    }
    navigation("/Projects/SignIn");
  };
  const handleSaveNote = async (e) => {
    e.preventDefault();

    const { text } = e.target.elements;

    let { data: Notebook, error } = await supabase
      .from("Notebook")
      .select("id");
    if (error) {
      console.log(data);
    }
  };

  
  return (
    <div>
      <button onClick={handleLogout}>Log out</button>
      <form onSubmit={handleSaveNote}>
        <input id="text" type="text" placeholder="Wpisz notatkę.." />
        <button>Zapisz</button>
      </form>
      <h1>Hello! This is my NoteBook!</h1>
    </div>
  );
}

export default NoteBook;
