import "./App.css";
import Banner from "./components/Body/Banner";
import UserShowCast from "./components/Body/UserShowCast";
import Community from "./components/Community/Community";
import Curriculum from "./components/Curriculum/Curriculum";
import Navbar from "./components/Navbar/Navbar";
import Partners from "./components/Partners/Partners";

function App() {
  return (
    
     <>
       <Navbar/>
       <Banner/>
       <UserShowCast/>
       <Curriculum />
       <Community />
       <Partners />
     </>
      
    
  );
}

export default App;
