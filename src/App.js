import "./App.css";
import Community from "./components/Community/Community";
import Curriculum from "./components/Curriculum/Curriculum";
import Partners from "./components/Partners/Partners";

function App() {
  return (
    <div className="App">
      <Curriculum />
      <Community />
      <Partners />
    </div>
  );
}

export default App;
