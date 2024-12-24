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

function App() {
  return (
    <div className="App bg-gray-100">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/education' element={<Education />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/achivements' element={<Achivements />} />
            <Route path='/experiences' element={<Experiences />} />
            <Route path='/contacts' element={<Contacts />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
