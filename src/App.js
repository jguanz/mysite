import React, { Component } from 'react';
import ScrollableAnchor, {configureAnchors} from 'react-scrollable-anchor'
import './App.css';
import Navigation from "./components/Navigation";
import Splash from './components/Splash';
import About from './components/About';
import Projects from "./components/Projects";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            splashHeight: 0,
            scrollPosition: 0
        }
    }

    componentDidMount() {
        let self = this;

        window.addEventListener("scroll", function (event) {
            self.setState({scrollPosition: this.scrollY})
        }, false);
    }

    componentWillMount() {
        configureAnchors({scrollDuration: 600, keepLastAnchorHash: true});
    }

    handleSplashHeight(height) {
        this.setState({splashHeight: height});
    }

  render() {
      let skills = [
          {
              "skillName":"Javascript",
              "skillLevel":"95"
          },
          {
              "skillName":"Python",
              "skillLevel":"90"
          },
          {
              "skillName":"Java",
              "skillLevel":"92"
          },
          {
              "skillName":"HTML/CSS",
              "skillLevel":"92"
          },
          {
              "skillName":"Objective C",
              "skillLevel":"85"
          },
          {
              "skillName":"Swift",
              "skillLevel":"85"
          },
          {
              "skillName":"React.js/React Native",
              "skillLevel":"95"
          },
          {
              "skillName":"Kotlin",
              "skillLevel":"85"
          }
      ]

    return (
      <div className="App">
        <Navigation splashHeight={this.state.splashHeight} scrollPosition={this.state.scrollPosition} />
        <ScrollableAnchor id={'Home'} className="element">
            <Splash handleSplashHeight={this.handleSplashHeight.bind(this)} splashHeight={this.state.splashHeight} scrollPosition={this.state.scrollPosition}/>
        </ScrollableAnchor>
        <ScrollableAnchor id={'About'} className="element">
            <About skills={skills}/>
        </ScrollableAnchor>
        <ScrollableAnchor id={'Projects'} className="element">
            <Projects />
        </ScrollableAnchor>
      </div>
    );
  }
}

export default App;
