import React from 'react';
import './App.css';
import './fonts.css';
import NavBox from './components/NavBox/NavBox';
import Home from './components/Sections/Home';
import About from './components/Sections/About';
import Projects from './components/Sections/Projects';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBox />
        <Home />
        <About />
        <Projects />
      </div>
    );
  }
}
