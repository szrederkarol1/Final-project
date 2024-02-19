import React from "react";
import "./Footer.scss";

const FooterBase = () => {
  return (
    <>
      <div className="form_section">
        <div className="form_container">
          <form
            action="https://formsubmit.io/send/karolszreder1@gmail.com"
            method="POST"
            className="left-form"
          >
            <label for="name">First name</label>
            <input type="text" placeholder="Your name"></input>
            <label for="email">Email</label>
            <input type="text" placeholder="Your email"></input>
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
          </form>
        </div>
      </div>
    </>
  );
};

export default FooterBase;
