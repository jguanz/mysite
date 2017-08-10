import React, {Component} from 'react';
import '../../stylesheets/contact.css';

class Contact extends Component {
    render() {
        return (
            <div className="contact-container">
                <div className="contact-header" >
                    Contact Me
                </div>
                <div className="contact-title" >
                    I'd Love To Hear From You
                </div>
                <div className="contact-subtext" >
                </div>
                <div className="contact-form-container">
                    <div className="contact-form-top-container">
                        <div className="contact-form-left">
                            <p className="input-title">YOUR NAME</p>
                            <input className="contact-input"></input>
                            <p className="input-title">EMAIL ADDRESS *</p>
                            <input className="contact-input"></input>
                            <p className="input-title">PHONE NUMBER</p>
                            <input className="contact-input"></input>
                        </div>
                        <div className="contact-form-right">
                            <p className="input-title">YOUR MESSAGE</p>
                            <input className="contact-input-message"></input>
                        </div>
                    </div>
                    <div className="contact-form-bottom-container">
                        <div className="reset-button" >
                            RESET
                        </div>
                        <div className="send-button" >
                            SEND
                        </div>
                    </div>
                </div>
            </div>

        )
    };
}

export default Contact;