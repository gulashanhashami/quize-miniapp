import logo from './logo.svg';
import './App.css';
import { Home } from './components/home';
import { Route, Routes } from 'react-router-dom';

import { Quize } from './components/quize';
import { Navbar } from './components/Navbar';
import { Quize2 } from './components/quize2';
import { FinalScore } from './components/Final_score';
import { FirstComp } from './components/firstcomplete';

function App() {
  return (
    <div className="App">
      <Navbar />
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/quize' element={<Quize />} />
    <Route path='/quize2' element={<Quize2 />} />
    <Route path='/final' element={<FinalScore />} />
    <Route path='/first' element={<FirstComp />} />
  </Routes>
    
    </div>
  );
}

export default App;
