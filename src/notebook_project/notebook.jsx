import { useNavigate } from "react-router-dom";
import supabase from "../services/supabase";
import { useEffect, useState } from "react";
import "./notebook.scss";

function NoteBook() {
  const navigation = useNavigate();
  let alreadyMounted = false;

  const [session, setSession] = useState(null);
  const [entries, setEntries] = useState(null);
  useEffect(() => {
    if (!alreadyMounted) {
      getSession();
    }
    alreadyMounted = true;
  }, []);

  useEffect(() => {
    if (session) {
      getEntries();
    }
  }, [session]);

  const getSession = async () => {
    const { data, error } = await supabase.auth.getSession();

    if (!data.session) {
      navigation("/Projects/SignIn");
      return;
    }
    setSession(data);
  };

  const getEntries = async () => {
    let { data, error } = await supabase
      .from("Notebook")
      .select("*")
      .eq("author", session.session.user.email);
    if (!error) {
      setEntries(data);
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

    const { data, error } = await supabase
      .from("Notebook")
      .insert([{ entry: text.value, author: session.session.user.email }])
      .select("*");
    if (!error) {
      setEntries((prev) => [...prev, data[0]]);
    }
  };

  return (
    <div className="notebook">
      <div className="notebook_header">Notebook</div>
      <div className="notebook_content">
        <form onSubmit={handleSaveNote}>
          <textarea id="text" placeholder="Wpisz notatkę.."></textarea>
          <button>Zapisz</button>
        </form>
        {entries && (
          <ul>
            {entries.map(({ entry, id }) => (
              <li style={{ listStyleType: "none" }} key={id}>
                {entry}
              </li>
            ))}
          </ul>
        )}
        <button onClick={handleLogout}>Log out</button>
      </div>
    </div>
  );
}

export default NoteBook;
