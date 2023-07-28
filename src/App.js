import './App.css';
import Home from './routes/Home';
import { Route, Routes } from "react-router-dom";
import Team from './routes/Team';
import About from './routes/AboutUs';
import Collaborators from './routes/Collaborators';
import Publications from './routes/Publications';
import Contact from './routes/Contact';
import Projects from './routes/Projects';
import Lab from './routes/Lab';
import Conference from './routes/Conference';
import Workshop from './routes/Workshop';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/collab" element={<Collaborators/>} />
        <Route path='/public' element={<Publications/>} />
        <Route path='/cont' element={<Contact/>}/>
        <Route path='/projects' element={<Projects/>}/>
        
        <Route path='/lab' element={<Lab/>} />
        <Route path='/confer' element={<Conference/>}/>
        <Route path='/workshop' element={<Workshop/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
