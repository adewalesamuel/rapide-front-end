import imgLogo from '../img/logo.png'
import { Link } from 'react-router-dom'

export function NavBar(props) {
    return (
        <div className="navbar-navigation">
            <img src={imgLogo} alt="" className="logo" />
            <div className="navigation">
                <Link to='/'>Accueil</Link>
                <Link to='/presentation'>Présentation</Link>
                <Link to='/entreprise'>Entreprise</Link>
                <Link to='/services'>Services</Link>
                <Link to='/services'>Dépanage d'urgence</Link>
                <Link to='/contact'>Contact</Link>
                <a className="marketpalce" href="https://marketplace.rapide-reparation.com/" 
                target={'_blank'} rel="noreferrer">Marketpalce</a>
                <Link className="login" to="/inscription">Inscription</Link>
            </div>
        </div>
    )
}