import Contact from "./contact/Contact.jsx";
import Location from "./my_location/Location.jsx";
import Navigation from "./first_view/Navigation.jsx";
import Skills from "./skills_view/Skills.jsx";
const Base = () => {
  return (
    <>
      <Navigation />
      <Skills />
      <Location />
      <Contact />
    </>
  );
};
export default Base;
