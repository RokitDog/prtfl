import React from 'react'
import { Background } from './Background'
import { Title } from './Title'
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { ContactItem } from './ContactItem';

export const Contact = () => {
    return (
        <section className="contactContainer">
            <Background />
            <div className="wrapper">
            <div id="contact"></div>

                <Title title={'Contact'} span={'Contact'}/>
                <div className="wrapper2 contact-section">
                    <div className="left-content">
                        <div className="contact-title">
                            <h4>Get In Touch</h4>
                        </div>
                        <form className="form"  action="https://formsubmit.io/send/dbce51cd-b6b5-4605-9883-366b3feb9dd9" method="POST">
                            <div className="form-field">
                                <label htmlFor="name">Enter your name*</label>
                                <input name="name" id="name" type="text"/>
                            </div>
                            <div className="form-field">
                                <label htmlFor="Email">Enter your Email*</label>
                                <input name="email" id="email" type="email"/>
                            </div>
                            <div className="form-field">
                                <label htmlFor="subject">Subject*</label>
                                <input id="subject" type="text"/>
                            </div>
                            <div className="form-field">
                                <label htmlFor="text-area">Message</label>
                                <textarea name="textarea" id="textarea" cols="30" rows="10"></textarea>
                            </div>
                            <input name="_formsubmit_id" type="text" style={{display: 'none'}}></input>
                            <div className="form-field">
                                <input value="submit" type="submit"></input>
                            </div>
                            <input name="_redirect" type="hidden" id="redirect" value="https://portfolio-a933d.web.app/"></input>
                        </form>
                    </div>

                    <div className="right-content">        
                        <ContactItem 
                        icon={<EmailIcon />}
                        title={'Email'}
                        contact1={'bojanforgaming@hotmail.com'}
                        />
                        <ContactItem 
                        icon={<LocationOnIcon />}
                        title={'Location'}
                        contact2={'Novi Sad, Serbia'}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
