import './App.css';
import {HashRouter, Route} from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import NavBar from '../NavBar/NavBar';
import GoHome from '../GoHome/GoHome';





function App() {
  return (
    <div className="App">
      <HashRouter>
      <div>
        <NavBar/>
        <Route path = "/" exact component = {Home} /> 
        <Route path = "/about" exact component = {About} /> 
        <Route path = "/skills" exact component = {Skills} /> 
        <Route path = "/projects" exact component = {Projects} /> 
        <GoHome/>

      </div>
      </HashRouter>
    </div>
  );
}

export default App;
