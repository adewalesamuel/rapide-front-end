import { Link } from 'react-router-dom';
import imgPresentation from '../img/presentation.png';
import imgService from '../img/services.png';
import imgHome from '../img/home.png';
import imgUrgence from '../img/urgences.png';
import imgAccount from '../img/account.png';

export function Footer(props) {
    return (
        <>
            <footer>
                <div className="footer-section">
                    <div className="footer-group">
                        <h4 className="footer-title">Services <span className="orange"> & Materiel</span></h4>
                        <Link to="/services">Dépannage Rapide</Link>
                        <a href="https://marketplace.rapide-reparation.com/" target={'_blank'} rel="noreferrer">Achat du matériel</a>
                        <Link to="/services">Plomberie</Link>
                        <Link to="/services">Electricite</Link>
                    </div>

                    <div className="footer-group">
                        <h4 className="footer-title">Support <span className="orange"> Technique</span></h4>
                        <Link to="#">Base de connaissance</Link>
                        <Link to="#">Aide</Link>
                    </div>

                    <div className="footer-group">
                        <h4 className="footer-title">Rapide <span className="orange"> Réparation</span></h4>
                        <Link to="/entreprise">Qui sommes nous ?</Link>
                        <Link to="/conditions-utilisation">Conditions d'utilisation</Link>
                    </div>

                    <div className="footer-group">
                        <h4 className="footer-title">Nos <span className="orange"> Contacts</span></h4>
                        <Link to="#">2021 - Rapide Reparation, <br/> Tous droits reserves.</Link>
                        <Link to="#">Email: info@rapide-reparation.ci</Link>
                        {/* <Link to="#">Call Center: +225 25 22 40 78 90</Link> */}
                        <Link to="#">Telephone: +225 25 22 01 61 26</Link>
                    </div>
                </div>
            </footer>
            <nav className="mobile-nav">
                <Link to="/presentation" className="bloc-icon">
                    <img src={imgPresentation} alt="" />
                    Présentation
                </Link>
                <Link to="/services" className="bloc-icon">
                    <img src={imgService} alt="" />
                    Services
                </Link>
                <Link to="/" className="bloc-icon">
                    <img src={imgHome} alt="" />
                    Accueil
                </Link>
                <Link to="/entreprise" className="bloc-icon">
                    <img src={imgUrgence} alt="" />
                    Entreprise
                </Link>
                <Link to="/inscription" className="bloc-icon">
                    <img src={imgAccount} alt="" />
                    Compte
                </Link>
            </nav>
        </>
    )
}