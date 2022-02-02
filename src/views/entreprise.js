import imgICEl from '../img/ic_el.png'
import imgICAir from '../img/ic_air.png'
import imgICPaint from '../img/ic_paint.png'
import imgICPlumb from '../img/ic_plumb.png'
import imgRightArrow from '../img/right-arrow.png'
import imgRight from '../img/right.png'
import imgSearch from '../img/search.png'
import imgSelection from '../img/selection.png'
import imgCart from '../img/cart.png'
import imgBooks from '../img/books.png'
import { Link } from 'react-router-dom'
import { Components } from '../components'

export function Entreprise(props) {
    return (
        <> 
        <section className='block'>
            <div className="entre-text">
                <h1>Nous offrons les meilleurs services a domicile.</h1>
                <p>Un dépannage, c’est une affaire de confiance : le travail doit être bien fait, sans mauvaise surprise à la fin, ni les jours suivants.</p>

                <Link className="btn" to="/presentation">QUI SOMMES NOUS ?</Link>
            </div>
            <Components.DepannageRapideForm  classname="depannage-urg"/>
        </section>

        <div className="service-entreprise">

            <div className="services-boxurg">
                    <div className="service-cardurg nth-child(1)">
                        <img className="card-icon" src={imgICEl} alt="" />
                        <p className="card-title">Electricité</p>
                        <p className="card-detail">Textes</p>
                        <img className="card-next" src={imgRightArrow} alt="" />
                    </div>

                    <div className="service-cardurg nth-child(2)">
                        <img className="card-icon" src={imgICPlumb} alt="" />
                        <p className="card-title">Plomberie</p>
                        <p className="card-detail">Textes</p>
                        <img className="card-next" src={imgRightArrow} alt="" />
                    </div>

                    <div className="service-cardurg nth-child(3)">
                        <img className="card-icon" src={imgICAir} alt="" />
                        <p className="card-title">Froid</p>
                        <p className="card-detail">Textes</p>
                        <img className="card-next" src={imgRightArrow} alt="" />
                    </div>

                    <div className="service-cardurg nth-child(4)">
                        <img className="card-icon" src={imgICPaint} alt="" />
                        <p className="card-title">Peinture</p>
                        <p className="card-detail">Textes</p>
                        <img className="card-next" src={imgRightArrow} alt="" />
                    </div>
                </div>
        </div>
    
        <div className="tutorial">
            <div className="heading">
                <hr />
                <h4>Comment sa fonctionne ?</h4>
                <hr />
            </div>
            
            <h1>Commander en trois étapes</h1>
            
            <p>Voici en quelque étapes comment notre application fonctionne.</p>

            <div className="steps">

                <hr className="arrow-bar" />

                <div className="step step-1">
                    <div className="img-warpper">
                        <img src={imgSearch} alt="desc" className="step-img" />
                    </div>
                    <h3>
                        <span className="badge">1</span> 
                        Rechercher 
                    </h3>

                    <hr className="step-separator" />

                    <p>Rechercher le service qui vous interesse dans notre application.</p>
                </div>

                <div className="step step-2">
                    <div className="img-warpper">
                        <img src={imgRightArrow} alt="" className="right" />
                        <img src={imgSelection} alt="desc" className="step-img" />
                    </div>
                    
                    <h3>
                        <span className="badge">2</span> 
                        Selectionner 
                    </h3>

                    <hr className="step-separator" />

                    <p>Selectionner le service dont vous avez besoin dans l’urgence.</p>
                </div>

                <div className="step step-3">
                    <div className="img-warpper">
                        <img src={imgRightArrow} alt="" className="right" />       
                        <img src={imgCart} alt="desc" className="step-img" />
                    </div>
                    <h3>
                        <span className="badge">3</span> 
                        Demander 
                    </h3>

                    <hr className="step-separator" />

                    <p>Passer maintenant votre commande de Reparation.</p>
                </div>
            </div>
            
        </div>

        <div className="plaquette">
            <div className="about-wrapper">
                <div className="inner-content">
                    <h1 className="heading-title">Télecharger notre Plaquette</h1>
                    
                    <p>Pour en savoir plus sur Rapide Réparation, sur grille tarifaire, sur nos services et sur notre mode de fonctionnement, nous vous conseillons de telecharger notre librairie digitale.</p>

                    <Link className="links" to="#" style={{color: '#EF8123'}}>
                        <img src={imgRight} alt="alt" width="30px" />
                        &nbsp; Plaquette de Présentation
                    </Link>

                    <Link className="links" to="#">
                        <img src={imgRight} alt="alt" width="30px" />
                        &nbsp; 
                        Matrice de Prix
                    </Link>
                </div>

                <img src={imgBooks} alt="" />
            </div>
        </div>
        </>
    )
}