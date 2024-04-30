import { deflate } from 'three/examples/jsm/libs/fflate.module.js';
import './App.css'
import { NavBar } from './components/NavBar.js';
import { Projects } from './components/Projects.js';

function App() {
    return (
        <div className='App'>
            <Projects/>
        </div>
    );
}

export default App; 