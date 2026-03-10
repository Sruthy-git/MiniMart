import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-container">

        <h2 className="contact-title">Contact Us</h2>

        <p className="contact-text">
          Have questions about our products or your order?  
          Our team at MiniMart is here to help.  
          Feel free to reach out to us anytime and we will respond as soon as possible.
        </p>

        <form className="contact-form">

          <input 
            type="text" 
            placeholder="Your Name"
            required
          />

          <input 
            type="email" 
            placeholder="Your Email"
            required
          />

          <textarea 
            placeholder="Your Message"
            rows="4"
            required
          ></textarea>

          <button type="submit" className="contact-btn">
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
}

export default Contact;