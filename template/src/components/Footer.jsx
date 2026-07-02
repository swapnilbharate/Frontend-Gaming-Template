import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-left">
          <h2>Join Our <span>Tournaments</span></h2>
          <p>
            Register with your email to participate in upcoming gaming tournaments
            and receive updates directly.
          </p>
        </div>

        <div className="footer-right">
          <form
            action="mailto:bharateswapnil969696@gmail.com"
            method="POST"
            encType="text/plain"
          >
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />

            <textarea
              name="message"
              placeholder="Message (optional)"
            ></textarea>

            <button type="submit">Register Now</button>
          </form>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} GameZone. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
