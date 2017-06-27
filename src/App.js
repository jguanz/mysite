import React, { Component } from 'react';
import Scroll from 'react-scroll';
import './App.css';
import Navigation from "./components/Navigation";
import Splash from './components/Splash';
import About from './components/About';
import Projects from "./components/Projects";

var Link       = Scroll.Link;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;

class App extends Component {
    self = this;

    constructor(props) {
        super(props);

        this.state = {
            splashHeight: 0
        }
    }

    handleSplashHeight(height) {
        self.setState({splashHeight: height});
    }

  render() {
    return (
      <div className="App">
        <Navigation splashHeight={this.state.splashHeight}/>
        <Element name="Splash" className="element">
            <Splash splashHeight={this.handleSplashHeight}/>
        </Element>
        <Element name="About" className="element">
            <About />
        </Element>
        <Element name="Projects" className="element">
            <Projects />
        </Element>
      </div>
    );
  }
}

export default App;
