import { Link } from 'react-router-dom';
import imgLogo from '../img/logo.png';

export function Footer(props) {
    return (
        <footer>
            <div className="footer-section">
                <div className="footer-group">
                    <h4 className="footer-title">Services <span className="orange"> & Materiel</span></h4>
                    <a href="#">Dépannage Rapide</a>
                    <a href="#">Achat du matériel</a>
                    <a href="#">Plomberie</a>
                    <a href="#">Electricite</a>
                </div>

                <div className="footer-group">
                    <h4 className="footer-title">Support <span className="orange"> Technique</span></h4>
                    <a href="#">Base de connaissance</a>
                    <a href="#">Aide</a>
                </div>

                <div className="footer-group">
                    <h4 className="footer-title">Rapide <span className="orange"> Réparation</span></h4>
                    <Link to="entreprise">Qui sommes nous ?</Link>
                    <a href="#">Politique de confidentialité</a>
                </div>

                <div className="footer-group">
                    <h4 className="footer-title">Nos <span className="orange"> Contacts</span></h4>
                    <a>2021 - Rapide Reparation, <br/> Tous droits reserves.</a>
                    <a href="#">Email: info@rapide-reparation.ci</a>
                    <a href="#">Call Center: +225 25 22 40 78 90</a>
                    <a href="#">Telephone: +225 25 00 00 00 90</a>
                </div>
            </div>
        </footer>
    )
}