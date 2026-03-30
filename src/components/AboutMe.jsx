import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AboutMe = () => {
  const [show, setShow] = useState(false);

  const paragraphs = [
    "As a recent Computer Science graduate from New Jersey Institute of Technology, I'm passionate about building meaningful applications that solve real-world problems such as my current project MechFind.",
    "My previous internship experience in Full-Stack Development allowed me to work across the entire software lifecycle, from designing user interfaces to managing backend logic and databases.",
    "Whether it's diving deeper into React, exploring new backend frameworks such as Springboot, or improving my understanding of system design, I'm eager to keep learning and growing as a software engineer."
  ];

  return (
    <div className="my-3 text-center text-md-start">
      <button
        className="btn btn-outline-light d-md-none mb-2 px-3 py-1 rounded"
        onClick={() => setShow(!show)}
        style={{ fontWeight: "500", fontSize: "0.95rem" }}
      >
        {show ? "▲ Hide About Me" : "▼ Show About Me"}
      </button>

      <AnimatePresence>
        {(show || window.innerWidth >= 768) && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
          >
            {paragraphs.map((p, idx) => (
              <p key={idx} className="lead mx-md-5 mb-3" style={{ lineHeight: 1.6 }}>
                {p}
              </p>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AboutMe;
