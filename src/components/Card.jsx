import { useState } from "react";
import "../css/Card.css";

const Card = ({
  title,
  company,
  date,
  description,
  image,
  link,
  linkLabel,
  pdfLink,
  pdfLinkLabel,
}) => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => setShowDescription((prev) => !prev);

  return (
    <div className="mb-4">
      <div className="card mb-4 shadow-sm h-100 border-0">
        <div className="row g-0 h-100">
          <div className="col-md-4">
            <div className="card-img-wrapper">
              <img src={image} alt={title} className="card-img-custom" />
            </div>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title text-light">{title}</h5>
              <h6 className="card-subtitle mb-2">
                {company} • {date}
              </h6>

              {/* Mobile toggle button */}
              <div className="mobile-btn-wrapper d-md-none mb-2">
                <button
                  className={`mobile-toggle-btn ${
                    showDescription ? "active" : ""
                  }`}
                  onClick={toggleDescription}
                >
                  <span className="arrow">
                    {showDescription ? "▲" : "▼"}
                  </span>{" "}
                  {showDescription
                    ? "Hide Description"
                    : "View Description"}
                </button>
              </div>

              {/* Description */}
              <div
                className={`mobile-description ${
                  showDescription ? "show" : ""
                }`}
              >
                <p className="card-text text-light">
                  {description.split("\n").map((line, index) => (
                    <span key={index}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
              </div>

              {/* Link buttons */}
              <div className="btn-wrapper mt-2">
                {link && (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-outline-primary me-2 mb-2"
                  >
                    {linkLabel || "Learn More"}
                  </a>
                )}

                {pdfLink && (
                  <a
                    href={pdfLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-outline-success mb-2"
                  >
                    {pdfLinkLabel || "View PDF"}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
