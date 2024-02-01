"use client";

import { IoPaperPlane } from "react-icons/io5";
import { IoCheckmarkCircle } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";


export default function Contact() {
    const [formState, setFormState] = useState({
        fullname: '',
        email: '',
        message: '',
    });
    const [isFormValid, setIsFormValid] = useState(false);
    const [isMessageSent, setIsMessageSent] = useState(false);
    const formRef = useRef(null);

    useEffect(() => {
        setIsFormValid(formRef.current.checkValidity());
    }, [formState]);

    const handleInputChange = (event) => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (isFormValid) {
            // Clear the form
            setFormState({
                fullname: '',
                email: '',
                message: '',
            });

            // Show the "Message Sent" text and icon
            setIsMessageSent(true);

            // Hide the "Message Sent" text and icon after 5 seconds
            setTimeout(() => {
                setIsMessageSent(false);
            }, 5000);
        }
    };

    return (
        <article className="contact active" data-page="contact">

            <header>
                <h2 className="h2 article-title">Contact</h2>
            </header>

            <section className="mapbox" data-mapbox>
                <figure>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.499305022!2d90.25487485406434!3d23.781067237446248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1706775356012!5m2!1sen!2sbd"
                        width="400" height="300" loading="lazy"></iframe>
                </figure>
            </section>

            <section className="contact-form">
                <h3 className="h3 form-title">Contact Form</h3>
                <form ref={formRef} onSubmit={handleSubmit} action="#" className="form" data-form>
                    <div className="input-wrapper">
                        <input type="text" name="fullname" value={formState.fullname} onChange={handleInputChange} className="form-input" placeholder="Full name" required data-form-input />
                        <input type="email" name="email" value={formState.email} onChange={handleInputChange} className="form-input" placeholder="Email address" required data-form-input />
                    </div>
                    <textarea name="message" value={formState.message} onChange={handleInputChange} className="form-input" placeholder="Your Message" required data-form-input></textarea>
                    <button className="form-btn" type="submit" disabled={!isFormValid} data-form-btn>
                        {isMessageSent ? <IoCheckmarkCircle className="ion-icon"/> : <IoPaperPlane className="ion-icon"/>}
                        <span>{isMessageSent ? 'Message Sent' : 'Send Message'}</span>
                    </button>
                </form>
            </section>

        </article>
    )
}