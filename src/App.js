import React from 'react';
import './App.scss';
import './fonts.css';

import NavBox from './components/NavBox/NavBox';
import Home from './components/Sections/Home';
import About from './components/Sections/About';
import Projects from './components/Sections/Projects';
import Contact from './components/Sections/Contact';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBox />
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    );
  }
}
