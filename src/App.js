import "./App.css";
import Banner from "./components/Body/Banner";
import UserShowCast from "./components/Body/UserShowCast";
import Community from "./components/Community/Community";
import Courses from "./components/Courses";
import Curriculum from "./components/Curriculum/Curriculum";

import Footer from "./components/Footer";
import Impact from "./components/Impact";

import Navbar from "./components/Navbar/Navbar";

import Partners from "./components/Partners/Partners";
import Possibilities from "./components/Possibilities";

function App() {
  return (

    <div className="App">
           <Navbar/>
       <Banner/>
       <UserShowCast/>
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
