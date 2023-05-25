import React from "react";
import "./Contact.scss";

function Contact() {
  return (
    <>
      <div className="contact_section">
        <h2>
          DROP <h2 className="tittle_red">ME</h2> A LINE
        </h2>
        <div className="container_data">
          <div className="first_data">
            <h2>ADDRESS</h2>
          </div>
          <div className="secondary_data">
            <h2>PHONE</h2>
          </div>
          <div className="thirt_data">
            <h2>EMAIL</h2>
          </div>
        </div>
      </div>
      <div className="form_section">
        <div className="button_links">Click me!</div>
        <div className="form_container">
          <div className="left-form">
            <label for="name">First name</label>
            <input type="text" placeholder="Your name"></input>
            <label for="email">Email</label>
            <input type="text" placeholder="Your email"></input>
            <label for="number">Number</label>
            <input type="number" placeholder="Your number"></input>
          </div>
          <div
            className="right-form"
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
              height: "90%",
            }}
          >
            <label for="message">Message</label>
            <textarea
              rows="10"
              cols="30"
              style={{ marginBottom: "2em" }}
            ></textarea>
            <input
              className="submit"
              type="submit"
              value="Send message"
              style={{ cursor: "pointer", padding: "1em 2em 1em 2em" }}
            ></input>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
