import React from "react";
import "./contact.css";

const Contact = () => {
  const sendMessage = (e) => {
    e.preventDefault();
    alert("nice");
  };
  const show = (e) => {
    e.preventDefault();
    console.log(
      document.getElementsByClassName("projects")[0].getBoundingClientRect()
    );
  };

  return (
    <div className="contact my__flex">
      <div className="contactForm">
        <h1>Contact</h1>
        <form className="contactForm__form">
          <label className="con_name">
            <span>Name</span>
            <input type="text" />
          </label>
          <label className="con_message">
            <span>Message</span>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </label>
          <button onClick={(e) => sendMessage(e)}>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
