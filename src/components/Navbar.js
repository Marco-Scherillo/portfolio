import linkedInLogo from "../assets/linkedInLogo.svg";
import githubLogo from "../assets/githubLogo.svg";
import "../css/Navbar.css";

const Navbar = () => (
  <div className="navbar d-flex justify-content-between align-items-center bg-dark px-3 py-3 sticky-top shadow flex-nowrap">
    <div className="navbar-brand d-flex flex-nowrap ms-2 order-0 order-sm-1">
      <a
        className="mx-1 mx-sm-2 nav-icon"
        href="https://www.linkedin.com/in/ghulam-ahmed-b79b13252/"
      >
        <img src={linkedInLogo} alt="LinkedIn" width={26} height={22} />
      </a>
      <a className="mx-1 mx-sm-2 nav-icon" href="https://github.com/ghxlam">
        <img src={githubLogo} alt="GitHub" width={26} height={22} />
      </a>
    </div>

    <nav className="nav nav-masthead d-flex flex-nowrap overflow-auto order-1 order-sm-0">
      {["Home", "Experience", "Projects", "Skills", "Education", "Contact"].map(
        (section) => (
          <a
            key={section}
            href={`#${section.toLowerCase()}`}
            className="nav-link link-light mx-2 mx-sm-3"
          >
            {section}
          </a>
        )
      )}
    </nav>
  </div>
);

export default Navbar;
