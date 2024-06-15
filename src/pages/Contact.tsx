import {MdOutlineEmail, MdOutlineLocationOn} from "react-icons/md";
import {SyntheticEvent, useRef, useState} from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {

    const form = useRef<HTMLFormElement>(null);

    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [stateMessage, setStateMessage] = useState<string>('Send Message');


    const sendEmail = (e: SyntheticEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStateMessage('Sending ...');

        if (form.current) {
            emailjs
                .sendForm(
                    'service_xrdc0cy',
                    'template_zkbv72n',
                    form.current,
                    {
                        publicKey: 'sdzuQ6CcmPtce_znK',
                    })
                .then(
                    () => {
                        console.log('SUCCESS!');
                        form.current?.reset();
                        setStateMessage('Send Message');
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    },
                );
        } else {
            console.error('Form ref is null');
            setIsSubmitting(false);
            setStateMessage('Send Message');
        }
    };

    return (
        <section className="section contact-section">
            <h2>Contact</h2>
            <div className="contact-container">
                <div className="contact-form-left">
                    <h2>Get in touch</h2>
                    <p>Please fill in the form to start a conversation.</p>
                    <div className="contact-info">
                        <div className="direct-contact"><MdOutlineLocationOn className="offset" /> Brisbane, Australia
                        </div>
                        <div className="direct-contact"><MdOutlineEmail className="offset" />
                            <a href="mailto:mail@karstenbeck.com">mail@karstenbeck.com</a></div>

                    </div>
                </div>
                <div className="contact-form-right">
                    <form ref={form} className="contact-form" onSubmit={sendEmail}>

                        <div className="form-item">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Your Name"
                                required
                            />
                        </div>

                        <div className="form-item">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Your Email"
                                required
                            />
                        </div>

                        <div className="form-item">
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                placeholder="Subject"
                            />
                        </div>

                        <div className="form-item">
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Message"
                                required
                            />
                        </div>

                        <div className="form-item">
                            <button
                                type="submit"
                                id="submit"
                                disabled={isSubmitting}
                            >{stateMessage}</button>
                        </div>

                    </form>
                </div>
            </div>
        </section>
    );
}