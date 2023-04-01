import { useLocation, Route, Routes } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

import './App.css';
import Home from './Home/Home';
import Logo from './Logo/Logo.jsx';
import NavBar from './Navbar/Navbar';
import SkillsContent from './Skills/SkillsContent';
import AboutContent from './About/AboutContent';
import ContactContent from './Contact/ContactContent';

function App() {
  const location = useLocation();
  
  return (
    <div className="App">

      <Logo />
      <NavBar />

      <SwitchTransition>
        <CSSTransition
        key={location.pathname}
        timeout={300}
        classNames="page"
        unmountOnExit>
        <Routes>
          <Route index exact="true" element={<Home />} />
          <Route path='/skills' element={<SkillsContent />}/>
          <Route path='/about' element={<AboutContent />}/>
          <Route path='/contact' element={<ContactContent />}/>
        </Routes>

        </CSSTransition>
      </SwitchTransition>



    </div>
  );
}

export default App;
