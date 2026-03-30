import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const App = () => (
  <div className="d-flex h-100 text-center text-bg-dark">
    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <header className="mb-auto sticky-top shadow">
        <Navbar />
      </header>
      <Hero />
      <div></div>
      <Footer />
    </div>
  </div>
);

export default App;
