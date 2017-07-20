import React, {Component} from 'react';
import '../../stylesheets/about.css'
import AnimatedNumber from 'react-animated-number'
import star from '../../assets/FPO_Star.svg'

class About extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    getInitialState() {
        return ({
            summaryAnimationComplete: false,
            detailsAnimationComplete: false,
            skillsAnimationComplete: false
        })
    }

    componentDidUpdate() {
        if (!this.state.summaryAnimationComplete && this.props.scrollPosition > this.props.splashHeight * .3) {
            this.setState({summaryAnimationComplete: true});
        }

        if (!this.state.detailsAnimationComplete && this.props.scrollPosition > this.props.splashHeight * .8) {
            this.setState({detailsAnimationComplete: true});
        }

        if (!this.state.skillsAnimationComplete && this.props.scrollPosition > this.props.splashHeight * .9) {
            this.setState({skillsAnimationComplete: true});
        }
    }

    render() {
        return (
            <div className="about-container">
                <div className="about-summary">
                    <div
                        className={this.state.summaryAnimationComplete ? "load-summary-container" : "summary-container"}>
                        <div className="summary-header">
                            Personal Details
                            <span className="summary-title">Who am I?</span>
                            <span
                                className="summary-subtext">I'm a software engineer eager to write quality code.</span>
                        </div>
                        <div className="summary-who-am-i">
                            When someone looks at my code I want them to think, "this person cares about their code!".
                            Single responsibility methods, self-documenting code, use of appropriate design patterns;
                            anything that makes the future use and examination of the code easier.
                            My experience is broad: professionally I’ve written web
                            applications, Microsoft applications, IBM Z/os applications; front-end and back-end.  In my spare time I've experimented with
                            microcontrollers, mobile devlopment, VR and machine learning. 
                        </div>
                    </div>
                    {/*<div className="personal-details-container">*/}
                    {/*{this.props.personalDetails.map((detail) => <PersonalDetail*/}
                    {/*detailsAnimationComplete={this.state.detailsAnimationComplete}*/}
                    {/*position={detail.position} description={detail.description} title={detail.title}/>)}*/}
                    {/*</div>*/}
                    {/*<div className="about-resume">*/}
                    {/*Full Resume*/}
                    {/*</div>*/}
                    <div className="about-social-links">
                    </div>
                </div>
                <div className="about-skills">
                    <div className={this.state.skillsAnimationComplete ? "skills-header show" : "skills-header"}>
                        My Skills
                        <span> What I'm Best At</span>
                    </div>
                    <div className="skills-container">
                        {this.props.skills.map((skill) => <Skill key={skill.skillName} skillName={skill.skillName}
                                                                 skillLevel={skill.skillLevel}
                                                                 skillsAnimationComplete={this.state.skillsAnimationComplete}/>)}
                    </div>
                </div>
            </div>
        )
    };
}

function PersonalDetail(props) {
    return (
        <div className={props.detailsAnimationComplete ? "personal-detail-container" : props.position}>
            <div className="personal-detail-icon">
                <img src={star} className="personal-detail-icon"/>
            </div>
            <div className="personal-detail-title">
                {props.title}
            </div>
            <div className="personal-detail-description">
                {props.description}
            </div>
        </div>
    )
}

function Skill(props) {
    return (
        <div className={props.skillsAnimationComplete ? "skill-container show" : "skill-container"}>
            <span className="skill-name">{props.skillName}</span>
            <div className="battery-container">
                <div className={props.skillsAnimationComplete ? "battery-graphic show" : "batter-graphic"}>
                    <span className="battery-inactive-tick">
                        <span
                            className={props.skillsAnimationComplete ? "battery-active-tick show" : "battery-active-tick"}
                            style={{"width": props.skillLevel + '%'}}/>
                    </span>
                </div>
                <AnimatedNumber className="battery-level"
                                initialValue={0}
                                value={parseInt(props.skillLevel)}
                                duration={2000} stepPrecision={0}
                                formatValue={n => `${n}%`}/>
            </div>
        </div>
    )
}

export default About;

