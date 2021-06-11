import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import NavBar from '../NavBar/NavBar';
import GoHome from '../GoHome/GoHome';



const sample  = () =>{
  return(
    <div>
      <h1>i am home page</h1>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div>
        <NavBar/>
        <Route path = "/" exact component = {Home} /> 
        <Route path = "/about" exact component = {About} /> 
        <Route path = "/skils" exact component = {Skills} /> 
        <Route path = "/projects" exact component = {Projects} /> 
        <GoHome/>

      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
