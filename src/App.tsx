import "./App.css";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { Contact } from "./components/Contact";

function App() {
  return (
    <div className="bg-zinc-900 text-white min-h-screen font-sans">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
