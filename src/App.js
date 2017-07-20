import React, {Component} from 'react';
import ScrollableAnchor, {configureAnchors} from 'react-scrollable-anchor'
import './App.css';
import Navigation from "./components/Navigation";
import Splash from './components/Splash';
import About from './components/About';
import Projects from "./components/Projects";
import Contact from "./components/Contact";

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
                "skillName": "Java",
                "skillLevel": "95"
            },
            {
                "skillName": "Python",
                "skillLevel": "95"
            },
            {
                "skillName": "Javascript",
                "skillLevel": "90"
            },
            {
                "skillName": "HTML/CSS",
                "skillLevel": "90"
            },
            {
                "skillName": "React.js/React Native",
                "skillLevel": "90"
            },
            {
                "skillName": "Swift",
                "skillLevel": "85"
            }
        ]

        let personalDetails = [
            {
                "title" : "Philosophy",
                "description" : "I believe quality software adheres to well established design patterns, software that is thoughtfully designed for extensibility and ease of maintenance.  Code should be self-documenting, composed of single-responsibility methods and does not repeat itself.",
                "position" : "left"
            },
            {
                "title" : "Hobbies",
                "description" : "I like to spend time with family and friends, a picnic at the park, or a stroll along Lake Washington boulevard.  I keep things pretty quiet.",
                "position" : "bottom"
            },
            {
                "title" : "Tunes",
                "description" : "On any given day there’s a 90% chance that I’m listening to Marvin Gaye or John Legend.  When I feel like a podcast: Software Engineering Daily, Planet Money, and Conversations With Tyler.",
                "position" : "right"
            }
        ]

        return (
            <div className="App">
                <Navigation splashHeight={this.state.splashHeight} scrollPosition={this.state.scrollPosition}/>
                <ScrollableAnchor id={'Home'} className="element">
                    <Splash handleSplashHeight={this.handleSplashHeight.bind(this)}
                            splashHeight={this.state.splashHeight} scrollPosition={this.state.scrollPosition}/>
                </ScrollableAnchor>
                <ScrollableAnchor id={'About'} className="element">
                    <About splashHeight={this.state.splashHeight} scrollPosition={this.state.scrollPosition}
                           skills={skills} personalDetails={personalDetails}/>
                </ScrollableAnchor>
                <ScrollableAnchor id={'Projects'} className="element">
                    <Projects />
                </ScrollableAnchor>
                <ScrollableAnchor id={'Contact'} className="element">
                    <Contact />
                </ScrollableAnchor>
            </div>
        );
    }
}

export default App;
