import imgFacebook from '../img/facebook.png';
import imgLinkedin from '../img/linkedin.png';
import imgTwitter from '../img/twitter.png';
import imgInstagram from '../img/instagram.png';
import imgYoutube from '../img/youtube.png';

import {useState, useRef} from 'react';

import { Forms } from '../_helpers/forms';
import { Services } from '../services';

export function Contact() {
    const formElement = useRef();
    const abortController = new AbortController();
    const [nomPrenoms, setNomPrenoms] = useState("");
    const [mail, setMail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [objet, setObject] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    function handleContactFormSubmit(event) {
        event.preventDefault();

        if (!mail || !message) 
            return alert("Le mail ou le message n'a pas été défini");

        const payload = {
            "nom_prenoms": nomPrenoms,
            "email": mail,
            "telephone": telephone,
            "message": message
        };

        setIsLoading(true);
        Services.Contact.sendForm(JSON.stringify(payload), abortController.signal)
        .then(res => {
            setIsLoading(false);
            resetForm();
            alert("Votre message a bien été envoyé!");
        })
        .catch(err => {
            setIsLoading(false);
            alert("Une erreure est survenue. Veuillez réessayer plus tard!");
        });
    }

    function resetForm() {
        setMail("");
        setNomPrenoms("");
        setTelephone("");
        setObject("");
        setMessage("");
    }

    return (
        <>
            <section className='contactSection'>
                <h1>Contactez - Nous</h1>
            </section>

            <div className="contact-container">

                <div className="contact-box">

                    <div className="contact-info">
                        <h1>Ecrivez-nous</h1>
                        <hr className="underliner" />

                        <form action="#" ref={formElement} onSubmit={event => {
                                handleContactFormSubmit(event);
                                Forms.validateForm(formElement.current)
                            }}>
                            <input type="text" placeholder="Nom & Prénoms" value={nomPrenoms} 
                            onChange={event => setNomPrenoms(event.target.value)}/>
                            <input type="text" placeholder="Numéro Télephone" value={telephone} 
                            onChange={event => setTelephone(event.target.value)} minLength={10}/>
                            <input type="email" placeholder="Email" value={mail} required 
                            onChange={event => setMail(event.target.value)} />
                            <input type="text" placeholder="Objet du message" value={objet} 
                            onChange={event => setObject(event.target.value)} required/>

                            <textarea name="" id="" cols="30" rows="10" value={message} 
                            onChange={event => setMessage(event.target.value)} placeholder="Votre message"></textarea>

                            <div className="btn-wrapper">
                                <button type="submit"disabled={isLoading ? true : false}>
                                {isLoading ? "En cours de chargement..." : "Envoyer"}</button>
                            </div>
                        </form>
                    </div>
            
                    <div className="contact-form">
                        <div className="coordonnees-info">
                            <span className="title">Nos <span className="bolder">Coordonnées</span></span>

                            <hr className="separator" />

                            <h3>Emplacement</h3>
                            <p>Abidjan - Cococy Riviera Golf</p>

                            <h3>Appelez-nous</h3>
                            <p>+225 25 22 40 78 90</p>

                            <h3>Ecrivez-nous</h3>
                            <p>info@rapide-reparation.ci</p>
                        </div>

                        <div className="socials">
                            <h3>Réseaux Sociaux</h3>
                            <div className="networks">
                                <img src={imgFacebook} alt="" />
                                <img src={imgTwitter} alt="" />
                                <img src={imgInstagram} alt="" />
                                <img src={imgLinkedin} alt="" />
                                <img src={imgYoutube} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="about-us">
                <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.53
                30479648983!2d-3.979605416963003!3d5.342682372228755!2m3!1f0!2f0!3f0!3m2!1i
                1024!2i768!4f13.1!3m3!1m2!1s0xfc1f111bac5bd87%3A0xbde4f242deef9cc0!2sRapid
                e%20Reparation!5e0!3m2!1sen!2sci!4v1629711534768!5m2!1sen!2sci" width="100%" 
                height="650" style={{border: '0'}} allowFullScreen="" loading="lazy"></iframe>
            </div>
        </>
    );
}