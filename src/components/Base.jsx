import Contact from "./contact/Contact.jsx";
import Location from "./my_location/Location.jsx";
import Navigation from "./first_view/Navigation.jsx";
import Skills from "./skills_view/Skills.jsx";
import FooterBase from "./footer_base/Footer-base.jsx";

const Base = () => {
  return (
    <>
      <Navigation />
      <Skills />
      <Location />
      <Contact />
      <FooterBase />
    </>
  );
};
export default Base;
