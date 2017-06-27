import React, {Component} from 'react';
import '../../stylesheets/navigation.css'
import Scroll from 'react-scroll';

var Link = Scroll.Link;

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

    render() {
        return (
            <div className={this.state.scrollPosition < this.state.splashHeight ? "navigation-dark" : "navigation-light"}>
                <Link to="Splash" activeClass="navigation-selected" className="navigation-base" smooth={true} spy={true}>Home </Link>
                <Link to="About" activeClass="navigation-selected" className="navigation-base" smooth={true} spy={true}>About</Link>
                <Link to="Projects" activeClass="navigation-selected" className="navigation-base" smooth={true} spy={true}> Projects </Link>
                <Link to="Contacts" activeClass="navigation-selected" className="navigation-base" smooth={true} spy={true}>Contact</Link>
            </div>
        )
    }
}

export default Navigation;
