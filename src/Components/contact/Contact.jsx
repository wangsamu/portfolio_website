import React from "react";
import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { RiMessengerLine } from "react-icons/ri";
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hhbbu7z",
        "template_400x2du",
        form.current,
        "SAQP_Tp4ekMBPzpWa"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact</h2>

      <div className="container contact__container">
        <div className="contact__options">
          {/* LinkedIn */}
          <article className="contact__option">
            <BsLinkedin className=".contact__option-icon" />
            <h4>LinkedIn</h4>
            <a href="https://www.linkedin.com/in/wangsamu/" target="_blank">
              Connect{" "}
            </a>
          </article>
          {/* Github */}
          <article className="contact__option">
            <BsGithub className=".contact__option-icon" />
            <h4>Github</h4>
            {/* <h5>@wangsamu</h5> */}
            <a href="https://github.com/wangsamu" target="_blank">
              Connect
            </a>
          </article>
          {/* Email */}
          <article className="contact__option">
            <HiOutlineMail className=".contact__option-icon" />
            <h4>Email</h4>
            <h5>mail@wangsamu.com</h5>
            <a href="mailto:mail@wangsamu.com" target="_blank">
              Send an email
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Mesasage"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
