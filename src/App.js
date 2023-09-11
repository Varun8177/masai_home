import "./App.css";
import Community from "./components/Community/Community";
import Curriculum from "./components/Curriculum/Curriculum";
import News from "./components/news/News";

function App() {
  return (
    <div className="App">
      <Curriculum />
      <Community />
      <News/>
    </div>
  );
}

export default App;
