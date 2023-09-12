import "./App.css";
import Banner from "./components/Body/Banner";
import UserShowCast from "./components/Body/UserShowCast";
import Community from "./components/Community/Community";
import Courses from "./components/Courses";
import Curriculum from "./components/Curriculum/Curriculum";
import News from "./components/news/News";

import Footer from "./components/Footer";
import Impact from "./components/Impact";

import Navbar from "./components/Navbar/Navbar";

import Partners from "./components/Partners/Partners";
import Possibilities from "./components/Possibilities";
import OutcomePage from "./components/Body/OutcomePage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <UserShowCast />
      <OutcomePage />
      <Courses />
      <Curriculum />
      <Community />
      <Partners />
      <Impact />
      <Possibilities />
      <News />
      <Footer />
    </div>
  );
}

export default App;
