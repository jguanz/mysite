import React, {Component} from 'react';
import '../../stylesheets/splash.css';
import { goToAnchor } from 'react-scrollable-anchor'

class Splash extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.splashHeight(document.getElementById("splash").clientHeight)
    }

    componentDidUpdate() {
        this.props.splashHeight(document.getElementById("splash").clientHeight)
    }

    render() {
        return (
            <div className="splash-div" id="splash">
                <div id='stars'></div>
                <div id='stars2'></div>
                <div id='stars3'></div>
                <div id='title'>
                    <header>
                        Hello, World.
                    </header>
                    <p>My name is John Guanzon, I am a software engineer based in Seattle.  Check out
                    some of the things I've worked on, and drop me a note if they interest you :).  </p>
                </div>
                <Button />
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
};

export default Splash;
