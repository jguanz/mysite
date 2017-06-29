import React, {Component} from 'react';
import FPO_About from '../../assets/FPO_About.png'
import '../../stylesheets/about.css'

class About extends Component {
    render() {
        return (
            <div className="about-container">
                <img src={FPO_About}></img>
            </div>
        )
    };
}

export default About;