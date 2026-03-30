const Section = ({ id, title, children }) => (
  <section id={id} className="container my-5">
    <h2 className="text-center mb-4">{title}</h2>
    <div className="row">{children}</div>
  </section>
);

export default Section;
