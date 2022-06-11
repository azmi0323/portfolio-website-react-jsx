import React, { useContext } from "react";
import { useForm, ValidationError } from '@formspree/react';
import "./Contact.css";
import { themeContext } from "../../Context";
function ContactForm () {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [state, handleSubmit] = useForm("mayvkbzn");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{color: darkMode?'white': ''}}>Get in Touch</span>
          <span>Contact Me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
      <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
      </div>
    </div>
  );
};

function App() {
  return (
    <ContactForm />
  );
}
export default App
