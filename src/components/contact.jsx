function Contact() {
  return (
    <section className="contact" id="contact" >
     
      <div className="contact-card">
        <h2>Contact Me</h2>

        <p>
          I'd love to hear from you! Feel free to contact me for
          collaboration or any opportunities.
        </p>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
