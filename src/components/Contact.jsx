import React from "react";
import Button from "./Button";
import "../styles/contact.scss";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact me.</h2>
      <p>Lets work together. I&apos;m available in:</p>
      <div className="button-container">
        <Button
          text="Linkedin"
          icon={faLinkedin}
          href="https://www.linkedin.com/in/danielcortesdev/"
          className={"btn-secondary"}
        />
        <Button
          text="Email"
          icon={faAt}
          href="mailto:danieldevcode@gmail.com"
          className={"btn-secondary"}
        />
        <Button
          text="Github"
          icon={faGithub}
          href="https://github.com/danieldevcode"
          className={"btn-secondary"}
        />
      </div>
    </section>
  );
}

export default Contact;
