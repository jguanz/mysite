import React, {Component} from 'react';
import { withRouter } from 'react-router';
import '../../stylesheets/navigation.css';
import { goToAnchor } from 'react-scrollable-anchor';
import FPO_Menu from '../../assets/FPO_Menu.svg'

class Navigation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            scrollPosition: 0,
            splashHeight: 0,
            navModal: false
        }
    }

    componentDidMount() {
        self = this;

        window.addEventListener("scroll", function (event) {
            self.setState({scrollPosition: this.scrollY})
        }, false);
    }

    onSmallNavClick () {
        this.setState({
            navModal: !this.state.navModal
        });
    }

    render() {
        return (
            <div className="nav-container">
                <div className={this.state.scrollPosition < this.state.splashHeight ? "navigation-dark" : "navigation-light"}>
                    <Links />
                </div>
                <div className={this.state.navModal ? "small-nav open" : "small-nav"} onClick={() => this.onSmallNavClick()} >
                    <span />
                    <span />
                    <span />
                    {/*<img src={FPO_Menu} className="small-nav" onClick={() => this.onSmallNavClick()} />*/}
                </div>
                <div className={this.state.navModal ? "nav-modal" : "nav-modal hidden"}>
                    <Links />
                </div>
            </div>
        )
    }
}

function Links(props) {
    return (
    <div>
        <span className={window.location.hash === "#Home" || window.location.hash === "" ? "navigation-base navigation-selected" : "navigation-base"} onClick={() => goToAnchor('Home')} alt="Home">Home </span>
        <span className={window.location.hash === "#About" ? "navigation-base navigation-selected" : "navigation-base"} onClick={() => goToAnchor('About')} alt="About">About</span>
        <span className={window.location.hash === "#Projects" ? "navigation-base navigation-selected" : "navigation-base"} onClick={() => goToAnchor('Projects')} alt="Projects"> Projects </span>
        <span className={window.location.hash === "#Contact" ? "navigation-base navigation-selected" : "navigation-base"} onClick={() => goToAnchor('Contacts')} alt="Contact">Contact</span>
    </div>
    )
}

export default withRouter(Navigation);
