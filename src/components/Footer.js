const Footer = () => (
  <footer
    className="bg-dark text-light py-4 mt-auto"
    style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
  >
    <div className="container text-center">
      <p className="mb-1">
        &copy; {new Date().getFullYear()} Ghulam Ahmed. All rights reserved.
      </p>
      <div className="d-flex justify-content-center gap-3">
        <a
          href="https://www.linkedin.com/in/ghulam-ahmed-b79b13252/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-light text-decoration-none"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/ghxlam"
          target="_blank"
          rel="noopener noreferrer"
          className="text-light text-decoration-none"
        >
          GitHub
        </a>
      </div>
      <small className="d-block mt-2 text-white-50">
        Built with React & Bootstrap with EmailJS functionality
      </small>
    </div>
  </footer>
);

export default Footer;
