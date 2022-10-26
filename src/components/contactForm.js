
import React, { useState } from "react";

const FORM_ENDPOINT = "https://getform.io/f/228f12af-4909-42c0-8233-f1657757e5d8"; 

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <h2>Thank you!</h2>
        <div>We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
      <div>
        <input type="text" placeholder="Your name" name="name" required />
      </div>
      <div>
        <input type="email" placeholder="Email" name="email" required />
      </div>
      <div>
        <textarea placeholder="(Optional)" name="message" required />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default ContactForm;