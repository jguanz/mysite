import React, {Component} from 'react';
import { browserHistory, Router, Route } from 'react-router';
import '../../stylesheets/navigation.css'
import { goToAnchor } from 'react-scrollable-anchor'

class Navigation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            scrollPosition: 0,
            splashHeight: 0,
        }

        self = this;

        window.addEventListener("scroll", function (event) {
            self.setState({scrollPosition: this.scrollY})
        }, false);
    }

    onAboutClick () {
        goToAnchor('About')
        this.props.router.push("test")
    }

    render() {
        return (
            <div className={this.state.scrollPosition < this.state.splashHeight ? "navigation-dark" : "navigation-light"}>
                <span className="navigation-base" onClick={() => goToAnchor('Home')}>Home </span>
                <span className="navigation-base" onClick={() => this.onAboutClick()}>About</span>
                <span className="navigation-base" onClick={() => goToAnchor('Projects')}> Projects </span>
                <span className="navigation-base" onClick={() => goToAnchor('Contacts')}>Contact</span>
            </div>
        )
    }
}

export default Navigation;
