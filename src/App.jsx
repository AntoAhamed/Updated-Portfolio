import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/about/About';
import Education from './components/Education';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Achivements from './components/Achivements';
import Experiences from './components/Experiences';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import ProblemSolving from './components/ProblemSolving';
import { useState } from 'react';

function App() {
  const [dark, setDark] = useState(true);

  return (
    <div className={`App ${dark ? 'bg-gray-700' : 'bg-gray-100'} `}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar dark={dark} setDark={setDark} />}>
            <Route index element={<Home dark={dark} />} />
            <Route path='/about' element={<About dark={dark} />} />
            <Route path='/education' element={<Education dark={dark} />} />
            <Route path='/skills' element={<Skills dark={dark} />} />
            <Route path='/projects' element={<Projects dark={dark} />} />
            <Route path='/problem-solving' element={<ProblemSolving dark={dark} />} />
            <Route path='/achivements' element={<Achivements dark={dark} />} />
            <Route path='/experiences' element={<Experiences dark={dark} />} />
            <Route path='/contacts' element={<Contacts dark={dark} />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <Footer dark={dark} />
    </div>
  );
}

export default App;
