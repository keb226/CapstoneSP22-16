import './App.css';
import React, {Component} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Error from "./components/Error";
import Navigation from "./components/Navigation";

class App extends Component{
  render(){
    console.log("inside App");
    return(
      <BrowserRouter>
      <div>
        <Navigation/>
        <Routes>
          <Route path="/" component={Home} exact/>
          <Route path="/home" component={Home}/>
          <Route path="/about" component={About}/>
          <Route component={Error}/>
        </Routes>
      </div>
    </BrowserRouter>
    );
  }
}
/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/
export default App;