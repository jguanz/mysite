import React, { Component } from 'react';
import ScrollableAnchor, {configureAnchors} from 'react-scrollable-anchor'
import './App.css';
import Navigation from "./components/Navigation";
import Splash from './components/Splash';
import About from './components/About';
import Projects from "./components/Projects";

class App extends Component {
    self = this;

    constructor(props) {
        super(props);

        this.state = {
            splashHeight: 0
        }
    }

    componentWillMount() {
        configureAnchors({scrollDuration: 600, keepLastAnchorHash: true});
    }

    handleSplashHeight(height) {
        self.setState({splashHeight: height});
    }

  render() {

    return (
      <div className="App">
        <Navigation splashHeight={this.state.splashHeight}/>
        <ScrollableAnchor id={'Home'} className="element">
            <Splash splashHeight={this.handleSplashHeight}/>
        </ScrollableAnchor>
        <ScrollableAnchor id={'About'} className="element">
            <About />
        </ScrollableAnchor>
        <ScrollableAnchor id={'Projects'} className="element">
            <Projects />
        </ScrollableAnchor>
      </div>
    );
  }
}

export default App;
