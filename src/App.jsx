import Navbar from "./components/Navbar/Navbar";
import { Home, About, Skills, Projects, Contact } from "./components";

function App() {
  return (
    <div className="div">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
