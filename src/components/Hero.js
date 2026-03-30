import myPic from "../assets/mainImage.jpg";
import skyitPic from "../assets/skyitLogo.png";
import cognizantPic from "../assets/cognizantLogo.png";
import momentumPic from "../assets/momentumLogo.png";
import mechFindPic from "../assets/mechFindLogo.png";
import coveyMonPic from "../assets/coveymonLogo.png";
import liveLawyerPic from "../assets/liveLawyerLogo.png";
import ecommercePic from "../assets/ecommerceLogo.png";
import njitPic from "../assets/njitLogo.png";
import ridesharePic from "../assets/rideshareLogo.png";
import peakFitPic from "../assets/peakFitLogo.png";
import liveLawyerPoster from "../assets/liveLawyerPoster.png";
import Card from "./Card";
import Section from "./Section";
import ContactForm from "./ContactForm";
import AboutMe from "./AboutMe";

const Hero = () => (
  <main className="px-3 text-center" style={{ paddingTop: "2rem" }}>
    {/* HOME / LANDING*/}
    <section id="home">
      <img
        src={myPic}
        alt="My pic"
        className="img-fluid rounded-circle shadow"
        style={{ width: "200px", height: "200px", objectFit: "cover" }}
      />
      <h1>Ghulam Ahmed</h1>
      <p className="lead">Software Engineer | Full-Stack | CS @ NJIT</p>
      <AboutMe />
      <a
        href={`${process.env.PUBLIC_URL}/Ghulam_Ahmed-Resume.pdf`}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-lg btn-light fw-bold border-white bg-white"
      >
        See Resume
      </a>
    </section>

    {/* EXPERIENCE SECTION */}
    <Section id="experience" title="Experience">
      <Card
        title=" Full-Stack Software Developer Intern"
        company="SkyIT Services"
        date="May 2024 - Sep 2024"
        description="▪ Maintained and improved a full-stack employee portal serving 600+ users. 
▪ Developed a task platform with React and PostgreSQL, improving task completion rates by 20%. 
▪ Fixed high-priority bugs and launched enhancements, reducing task completion time by 10%. 
▪ Shipped 5+ features, including Google Calendar API integration for live scheduling. 
▪ Led sprint planning & code reviews as Team Lead in a SCRUM/Agile environment for a team of 8 interns. "
        image={skyitPic}
        link="https://skyit.services/"
        linkLabel="View Company Website"
        pdfLink={`${process.env.PUBLIC_URL}/Ghulam-Ahmed-SkyIT-Reference.pdf`}
        pdfLinkLabel="View Letter of Reccomendation"
      />
      <Card
        title="Generative AI Extern"
        company="Cognizant"
        date="June 2024 - July 2024"
        description="▪ Fine-tuned Hugging Face models, including GPT-2, for text classification & generation tasks. 
▪ Used Parameter Efficient Fine-Tuning (PEFT) to boost model accuracy by 15%, reducing training time by 20%. 
▪ Applied data preprocessing, model evaluation, and hyperparameter tuning to optimize model performance."
        image={cognizantPic}
        link="https://www.cognizant.com/us/en"
        linkLabel="View Company Website"
      />
      <Card
        title="Brand Ambassador"
        company="Momentum Solar"
        date="Jan 2023 - May 2024"
        description="▪ Consistently exceeded goals by 30%, generating 50+ quality leads monthly through sales & customer service skills. 
▪ Ranked in the top 5% for key performance indicators among 80+ peers as the youngest member on the team. 
▪ Simplified & explained complex concepts clearly, a valuable skill for engineering & project management."
        image={momentumPic}
        link="https://www.momentumsolar.com/"
        linkLabel="View Company Website"
      />
    </Section>

    {/* PROJECTS SECTION */}
    <Section id="projects" title="Projects">
      <Card
        title="MechFind | Founder & Software Engineer"
        company="Personal Project"
        date="June 2025 - Present"
        description="▪ Co-developing a web/mobile app to increase mechanic revenue (SAS), using Google Maps API for precise discovery. 
▪ Using Software Engineering best practices, including unit testing, modularity, and Test Driven Development. 
▪ Leveraging full stack development skills to implement user authentication and mechanic profiles through Firebase. "
        image={mechFindPic}
      />
      <Card
        title="Live Lawyer | Project Manager & Software Engineer"
        company="LiveLawyerLLC"
        date="January 2025 - May 2025"
        description="▪ Leading development of a web/mobile app to connect users with lawyers, using React Native & TypeScript.
▪ Manage a team of 5 developers and coordinate with stakeholders to align app development with business goals. 
▪ Implementing real-time lawyer-client communication with Twilio for chat and video calls 
▪ Utilizing Supabase & Prisma ORM for secure, scalable database management, including profiles & authentication. 
▪ Integrating Docker for containerization to standardize environment, with plans for seamless deployment soon. "
        image={liveLawyerPic}
        link="https://www.livelawyerapp.com/"
        linkLabel="View Project Details"
        pdfLink={liveLawyerPoster}
        pdfLinkLabel="View Poster"
      />
      <Card
        title="PeakFit | Software Engineer"
        company="Class Project"
        date="January 2025 - April 2025"
        description="▪ Built a Kotlin-based Android fitness app with Google OAuth, enabling users to create, favorite, and share custom workouts. 
▪ Integrated Firebase Firestore and SQLite for persistent data storage, supporting step tracking and personalized workout routines. 
▪ Implemented keyword search, filtering, and community-shared workouts via the Code Ninjas Exercises API, enhancing user engagement and discoverability. "
        image={peakFitPic}
        link="https://github.com/ghxlam/peakfit"
        linkLabel="View Repository"
        pdfLink={"https://i.imgur.com/cNBZGTB.mp4"}
        pdfLinkLabel="View Demo"
      />
      <Card
        title="Covey-Mon | Software Engineer"
        company="Personal Class Project"
        date="September 2024 - December 2024"
        description="▪ Extended Covey.Town framework by integrating a Pokémon-inspired game using TypeScript & React. 
▪ Utilized RESTful PokéAPI to integrate Pokémon stats, abilities, and moves into a multiplayer environment. 
▪ Collaborated in a SCRUM team using Agile methodologies, contributing to sprint planning & code reviews. 
▪ Gained experience with SDLC, CI/CD pipelines, and open-source collaboration while deploying new features. "
        image={coveyMonPic}
        link="https://github.com/ghxlam/covey-mon"
        linkLabel="View Repository"
        pdfLink={"https://i.imgur.com/6HFg1ug.gif"}
        pdfLinkLabel="View Demo"
      />
      <Card
        title="RideShare | Software Engineer"
        company="Personal Project"
        date="September 2024 - November 2024"
        description="▪  Developed a React-based MVP web app simulating a mobile ride-sharing interface, demonstrating end-to-end user flows for posting and joining campus carpools. 
▪ Designed a responsive UI/UX with React and CSS, showcasing scalability for future mobile and full-stack expansion. 
▪ Built a lightweight, modular proof-of-concept, highlighting potential for a campus-specific, student-to-student carpooling platform."
        image={ridesharePic}
        link="https://github.com/ghxlam/rideshare"
        linkLabel="View Repository"
        pdfLink={"https://i.imgur.com/6RaUPn0.gif"}
        pdfLinkLabel="View Demo"
      />
      <Card
        title="Ecommerce Website | Software Developer"
        company="Class Project"
        date="March 2024 - April 2024"
        description="▪  Built an e-commerce project on Linux, utilizing a Bash script to automate the download of numerous product links and efficiently extract DOM data, leveraging Tagsoup for parsing.
▪ Developed a Python script to process XHTML files, extracting key data points and seamlessly transferring the information into a MySQL database for storage and retrieval.
▪ Employed PHP to dynamically fetch and display data from the MySQL database, hosting the website on an Apache web server to ensure robust and reliable performance.
"
        image={ecommercePic}
        link="https://github.com/ghxlam/ecommerce-website"
        linkLabel="View Repository"
        pdfLink={"https://i.imgur.com/ZXzjOqt.gif"}
        pdfLinkLabel="View Demo"
      />
    </Section>

    {/* SKILLS SECTION */}
    <Section id="skills" title="Skills">
      <div className="d-flex flex-column align-items-center gap-4 text-center">
        {/* Languages */}
        <div>
          <h5 className="text-light">Languages:</h5>
          <div className="d-flex flex-wrap justify-content-center gap-2">
            {[
              "TypeScript",
              "Java",
              "SQL",
              "Python",
              "C++",
              "C",
              "JavaScript",
              "Kotlin",
              "Bash",
              "HTML",
              "CSS",
            ].map((skill) => (
              <span key={skill} className="badge bg-primary text-light p-2">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Frontend */}
        <div>
          <h5 className="text-light">Frontend:</h5>
          <div className="d-flex flex-wrap justify-content-center gap-2">
            {["React.js", "Next.js", "React Native", "Tailwind CSS"].map(
              (skill) => (
                <span key={skill} className="badge bg-primary text-light p-2">
                  {skill}
                </span>
              )
            )}
          </div>
        </div>

        {/* Backend */}
        <div>
          <h5 className="text-light">Backend:</h5>
          <div className="d-flex flex-wrap justify-content-center gap-2">
            {["Node.js", "Express", "GraphQL", "REST APIs", "Prisma ORM"].map(
              (skill) => (
                <span key={skill} className="badge bg-primary text-light p-2">
                  {skill}
                </span>
              )
            )}
          </div>
        </div>

        {/* Databases */}
        <div>
          <h5 className="text-light">Databases:</h5>
          <div className="d-flex flex-wrap justify-content-center gap-2">
            {["PostgreSQL", "MongoDB", "Oracle SQL", "MySQL"].map((skill) => (
              <span key={skill} className="badge bg-primary text-light p-2">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Tools & Platforms */}
        <div>
          <h5 className="text-light">Tools & Platforms:</h5>
          <div className="d-flex flex-wrap justify-content-center gap-2">
            {[
              "Git",
              "GitHub",
              "Docker",
              "Jest",
              "AWS",
              "Azure",
              "Linux",
              "Supabase",
              "Firebase",
              "Postman",
            ].map((skill) => (
              <span key={skill} className="badge bg-primary text-light p-2">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>

    {/* EDUCATION SECTION */}
    <Section id="education" title="Education">
      <Card
        title="Bachelor of Science in Computer Science"
        company="New Jersey Institute of Technology"
        date="2021 - 2025"
        description="▪ GPA: 3.3/4.0
▪ Relevant Coursework: Object-Oriented Programming (C++, Java), Data Structures & Algorithms, Systems
Programming (C, Bash), Machine Learning & Data Science (Python, Pandas, Scikit-learn), Database Design (SQL
& NoSQL), Mobile App Development (Kotlin), Web Development (HTML, CSS, JavaScript)
"
        image={njitPic}
        pdfLink={`${process.env.PUBLIC_URL}/Ghulam_Ahmed_Diploma.pdf`}
        pdfLinkLabel="View Diploma"
      />
      <p style={{ marginBottom: 0, fontStyle: "italic" }}>
        For transcript, please contact me
      </p>
    </Section>

    <Section id="contact" title="Contact Me">
      <ContactForm />
    </Section>
  </main>
);

export default Hero;
