import "./App.css";
import Community from "./components/Community/Community";
import Courses from "./components/Courses";
import Curriculum from "./components/Curriculum/Curriculum";
import Footer from "./components/Footer";
import Impact from "./components/Impact";
import Partners from "./components/Partners/Partners";
import Possibilities from "./components/Possibilities";

function App() {
  return (
    <div className="App">
      <Courses />
      <Curriculum />
      <Community />
      <Partners />
      <Impact />
      <Possibilities />
      <Footer />
    </div>
  );
}

export default App;
