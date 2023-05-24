import React from "react";
import "./Contact.scss";

function Contact() {
  return (
    <>
      <div className="contact_section">
        <div className="button_links">Click me!</div>
        <div className="form_container">
          <label for="name">Name</label>
          <input type="text" placeholder="Your name"></input>
          <label for="email">Email</label>
          <input type="text" placeholder="Your email"></input>
          <label for="number">Number</label>
          <input type="number" placeholder="Your number"></input>
          <input type="submit" value="Submit"></input>
        </div>
        <div className="contact_details"></div>
      </div>
    </>
  );
}

export default Contact;
