import React from "react";
import Button from "./Button";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../styles/contact.scss";

function Contact() {
  return (
    <section id="contact" className="contact">
      <p className="contact-header">
        Let&apos;s build your next project, <span>the right way.</span>
      </p>
      <div className="contact-buttons-container">
        <Button
          text="LinkedIn"
          icon={faLinkedin}
          href="https://www.linkedin.com/in/danielcortesdev/"
          className={"btn-block"}
        />
        <Button
          text="Email"
          icon={faEnvelope}
          href="mailto:1vd9idpmg@mozmail.com"
          className={"btn-block"}
        />
        <Button
          text="GitHub"
          icon={faGithub}
          href="https://github.com/danieldevcode"
          className={"btn-block"}
        />
      </div>
    </section>
  );
}

export default Contact;
