import React, {Component} from 'react';
import '../../stylesheets/about.css'
import AnimatedNumber from 'react-animated-number'
import aboutSummary from '../../assets/FPO_Work_Summary.png'

class About extends Component {
    render() {
        return (
            <div className="about-container">
                <div className="about-summary">
                    <img src={aboutSummary} />
                </div>
                <div className="about-skills">
                    <div className="skills-header">
                        My Skills
                        <span> What I'm Best At</span>
                    </div>
                    <div className="skills-container">
                        {this.props.skills.map((skill) => <Skill key={skill.skillName} skillName={skill.skillName} skillLevel={skill.skillLevel} />)}
                    </div>
                </div>
            </div>
        )
    };
}

function Skill(props) {
    return (
        <div className="skill-container">
            <span className="skill-name">{props.skillName}</span>
            <div className="battery-container">
                <div className="battery-graphic">
                    <span className="battery-inactive-tick">
                        <span className="battery-active-tick" style={{"width": props.skillLevel + '%'}}/>
                    </span>
                </div>
                <AnimatedNumber className="battery-level"
                                initialValue={0}
                                value={props.skillLevel}
                                duration={2000} stepPrecision={0}
                                formatValue={n => `${n}%`}/>
            </div>
        </div>
    )
}

export default About;

