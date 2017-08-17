import React, {Component} from 'react';
import '../../stylesheets/about.css';
import AnimateNumber from 'react-animate-number';
// import star from '../../assets/FPO_Star.svg';
import BicycleIcon from '../../assets/FPO_Philosphy.png';

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

        if (!this.state.skillsAnimationComplete && this.props.scrollPosition > this.props.splashHeight ) {
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
                            {/*<span className="summary-title">Who am I?</span>*/}
                            <span
                                className="summary-subtext"></span>
                        </div>
                        <div className="summary-who-am-i">
                            I've written software for a decade.  I'm eager to try new things and see what works best.
                        </div>
                    </div>
                    <div className="personal-details-container">
                        {this.props.personalDetails.map((detail) => <PersonalDetail
                        detailsAnimationComplete={this.state.detailsAnimationComplete} icon={detail.icon}
                        position={detail.position} description={detail.description} title={detail.title}/>)}
                    </div>
                </div>
                <div className="about-skills">
                    <div className={this.state.skillsAnimationComplete ? "skills-header show" : "skills-header"}>
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
                <img src={props.icon} className="personal-detail-image"/>
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
                <span className="battery-level"><AnimateNumber start={props.skillsAnimationComplete} number={parseInt(props.skillLevel)} speed={20}/>%</span>
            </div>
        </div>
    )
}

export default About;

