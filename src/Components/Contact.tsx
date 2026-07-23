import { useState } from "react";
import type { FormEvent } from "react";
import styles from "../Style/Contact.module.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio contact from ${name || "website visitor"}`
    );
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);

    window.location.href = `mailto:psc3.omaha@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <div className={styles.container}>
      <h1>Let's Connect</h1>

      <p className={styles.subtitle}>
        Whether you're looking to collaborate, have an opportunity, or just want
        to chat, feel free to reach out.
      </p>

      <div className={styles.content}>
        <div className={styles.info}>
          <h2>Contact Information</h2>

          <p>
            <strong>Email</strong>
            <br />
            <a href="mailto:psc3.omaha@gmail.com">psc3.omaha@gmail.com</a>
          </p>

          <p>
            <strong>LinkedIn</strong>
            <br />
            <a
              href="https://linkedin.com/in/psc3245"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/psc3245
            </a>
          </p>

          <p>
            <strong>GitHub</strong>
            <br />
            <a
              href="https://github.com/psc3245"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/psc3245
            </a>
          </p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <textarea
            rows={6}
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
