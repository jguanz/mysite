import React, {Component} from 'react';
import '../../stylesheets/splash.css';
import {goToAnchor} from 'react-scrollable-anchor'

class Splash extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.handleSplashHeight(document.getElementById("splash").clientHeight)

        let self = this;

        window.addEventListener("resize", function (event) {
            self.props.handleSplashHeight(document.getElementById("splash").clientHeight)
        }, false);
    }

    render() {
        var splashOpacity = 1 - this.props.scrollPosition / this.props.splashHeight;

        if(splashOpacity == NaN || splashOpacity > 1) {
            splashOpacity = 1;
        }

        return (
            <div className="splash-div" id="splash">
                <div id='stars'></div>
                <div id='stars2'></div>
                <div id='stars3'></div>
                <div id='title' style={{"opacity": isNaN(splashOpacity) ? 1 : splashOpacity}}>
                    <header>
                        Hello, World.
                    </header>
                    <p>My name is John Guanzon, I am a software engineer based in Seattle. Check out
                        some of the things I've worked on, and drop me a note if they interest you :). </p>
                    <Button />
                </div>
            </div>
        );
    }
}

class Button extends Component {


    render() {
        return (
            <div className="project-button-container" onClick={() => goToAnchor('Projects')}>
                <span className="project-button">
                    See Projects
                </span>
            </div>
        )
    }
}
;

export default Splash;
