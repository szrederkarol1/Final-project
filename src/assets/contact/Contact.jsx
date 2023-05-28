import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <>
      <a name="contact"></a>
      <div className="contact_section">
        <h2 className="tittle_contact">
          DROP<h2 className="tittle_red">ME</h2> A LINE
        </h2>
        <div
          className="dots"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "7em",
          }}
        >
          <i
            class="fa-solid fa-ellipsis-vertical fa-rotate-90 fa-2x"
            style={{ marginRight: "30px" }}
          ></i>
          <i class="fa-solid fa-arrow-down fa-fade fa-3x"></i>
          <i
            class="fa-solid fa-ellipsis-vertical fa-rotate-90 fa-2x"
            style={{ marginLeft: "30px" }}
          ></i>
        </div>
        <div className="all_container_data">
          <div className="data">
            <div className="data_container">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 550">
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <h2 className="tittle_contact_data">ADDRESS</h2>
              <div className="border"></div>
              <p className="paragraph_data">Wojska Polskiego 34B/13, Lębork</p>
            </div>
          </div>
          <div className="data">
            <div className="data_container">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM144 448c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16H160c-8.8 0-16 7.2-16 16zM304 64H80V384H304V64z" />
              </svg>
              <h2 className="tittle_contact_data">PHONE</h2>
              <div className="border"></div>
              <p className="paragraph_data">516-327-495</p>
            </div>
          </div>
          <div className="data">
            <div className="data_container">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" />
              </svg>
              <h2 className="tittle_contact_data">E-MAIL</h2>
              <div className="border"></div>
              <p className="paragraph_data">szrederkarol1@gmail.com</p>
            </div>
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
};

export default Contact;
