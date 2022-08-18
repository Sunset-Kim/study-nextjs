import { useState } from "react";
import classes from "./newsletter-registration.module.scss";

function isEamil(email) {
  const emailValidate = /^[a-zA-Z0-9+-\_.]+@[[a-zA-Z0-9]+\.(com|co|net)+$/gm;
  const regexp = RegExp(emailValidate);

  return regexp.test(email);
}

function NewsletterRegistration() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  function registrationHandler(event) {
    event.preventDefault();

    fetch("/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    })
      .then((response) => response.json())
      .then((data) => data);
  }

  const inputChangeHandler = (e) => {
    setEmail(e.target.value);
    setError(!isEamil(e.target.value));
  };

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            value={email}
            onChange={inputChangeHandler}
          />

          <button disabled={error}>Register</button>
        </div>
        {<p className={`${classes.error} ${error ? classes.isActive : ""}`}>올바른 이메일 형식을 입력해주세요</p>}
      </form>
    </section>
  );
}

export default NewsletterRegistration;
