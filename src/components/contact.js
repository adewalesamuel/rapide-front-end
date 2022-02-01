import imgFacebook from '../img/facebook.png';
import imgLinkedin from '../img/linkedin.png';
import imgTwitter from '../img/twitter.png';
import imgInstagram from '../img/instagram.png';
import imgYoutube from '../img/youtube.png';

export default function Contact() {
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

                        <form action="#">
                            <input type="text" placeholder="Nom & Prénoms" />
                            <input type="text" placeholder="Numéro Télephone" />
                            <input type="text" placeholder="Email" />
                            <input type="text" placeholder="Objet du message" />

                            <textarea name="" id="" cols="30" rows="10" defaultValue="Message"></textarea>

                            <div className="btn-wrapper">
                                <button type="submit">Envoyer</button>
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