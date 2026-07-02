import { useState } from 'react'
import Header from "./Components/Header";
import Projects from './Components/Projects';
import './App.css'

function App() {
  const [menuExpanded, setMenuExpanded] = useState(false);

  return (
      <div className='outer-body'>
        <section className='header'>
          <Header menuExpanded={menuExpanded} setMenuExpanded={setMenuExpanded}/>
        </section>
        <div className='inner-body'>
          <Projects/>
        </div>
      </div>
  );
}

export default App
