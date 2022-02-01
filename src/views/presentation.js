import imgSippec from '../img/sippec.png'
import imgBernabe from '../img/bernabe.png'
import imgBollore from '../img/bollore.png'
import imgOrange from '../img/orange.png'
import imgRight from '../img/right.png'
import imgICHero from '../img/ic_hero.png'
import imgICEl from '../img/ic_el.png'
import imgICAir from '../img/ic_air.png'
import imgICPaint from '../img/ic_paint.png'
import imgICMac from '../img/ic-mac.png'
import imgICPlumb from '../img/ic_plumb.png'
import imgICMas from '../img/ic_mas.png'
import imgICCarp from '../img/ic_carp.png'
import imgRightArrow from '../img/right-arrow.png'
import imgBooks from '../img/books.png'
import { Link } from 'react-router-dom'

export function Presentation(props) {
    return (
        <> 
            <section>
                <div className="introduction">
                    <img src={imgICHero} alt="" width="100%" />
                </div>

                <div className="services">
                    <h1>Qui Sommes Nous ?</h1>

                    <p>Créé en 2020, Rapide Réparation est une entreprise digitale de réparation spécialisée   en Plomberie, Electricité, étanchéité, maçonnerie, menuiserie, froid et climatisation, soudure, carrelage, peinture, aménagement, déménagement, nettoyage, jardinage, désinfection dans les locaux professionnels et particuliers. Cette entreprise est née de la volonté de facilité l’accès aux services liés à la remise en état de vos bureaux et appartements. <br /><br />
                            Rapide Réparation offre la possibilité à ses clients et partenaires de bénéficier de services de qualités à travers ses différentes plateformes (site internet, Application mobile, Réseaux sociaux) 7j/7j.
                            Plus d’une centaine de Jeunes professionnels, expérimentés, dynamiques et bien encadrés répondent efficacement à tous vos besoins quotidiens en matière de réparation.<br /><br />
                            Nous nous appuyons sur un pôle d’ingénieurs et techniciens issus des écoles locales et internationales et sur un réseau de partenaires local. C’est avec ces compétences que nous relevons les défis sur des projets conséquents en respectant les délais. 
                            Notre objectif étant d’être la référence digitale en matière de réparation dans les locaux sur toute l’étendu de la côte d’Ivoire, La satisfaction client, la proximité et la qualité des services sont implicitement des valeurs que nous intégrons dans notre politique produit. </p>

                    <Link className="btn" to="/contact">Contactez-nous</Link>
                </div>
            </section>

            <div className="presentation-services">

                <div className="service-section">

                    <div className="introduction">
                        <h1>Nos Services</h1>
                        <p>Confier vos travaux de réparation domestique à <br /> professionnel qui a de l’expérience.
                        </p>
                    </div>
            
                    <div className="service-container">
                        <div className="service-box nth-child(1)">
                            <img className="card-icon" src={imgICEl} alt="" />
                            <p className="card-title">Electricité</p>
                            <p className="card-detail">Detail</p>
                            <img className="card-next" src={imgRightArrow} alt="" />
                        </div>

                        <div className="service-box nth-child(2)">
                            <img className="card-icon" src={imgICAir} alt="" />
                            <p className="card-title">Froid</p>
                            <p className="card-detail">Detail</p>
                            <img className="card-next" src={imgRightArrow} alt="" />
                        </div>

                        <div className="service-box nth-child(3)">
                            <img className="card-icon" src={imgICPaint} alt="" />
                            <p className="card-title">Peinture</p>
                            <p className="card-detail">Detail</p>
                            <img className="card-next" src={imgRightArrow} alt="" />
                        </div>

                        <div className="service-box nth-child(4)">
                            <img className="card-icon" src={imgICMac} alt="" width="80px;" />
                            <p className="card-title">Maçonnerie</p>
                            <p className="card-detail">Detail</p>
                            <img className="card-next" src={imgRightArrow} alt="" />
                        </div>
                    </div>

                    <div className="service-container centered">
                        <div className="service-box nth-child(5)">
                            <img className="card-icon" src={imgICPlumb} alt="" />
                            <p className="card-title">Plomberie</p>
                            <p className="card-detail">Detail</p>
                            <img className="card-next" src={imgRightArrow} alt="" />
                        </div>

                        <div className="service-box nth-child(6)">
                            <img className="card-icon" src={imgICMas} alt="" />
                            <p className="card-title">Jardinage</p>
                            <p className="card-detail">Detail</p>
                            <img className="card-next" src={imgRightArrow} alt="" />
                        </div>

                        <div className="service-box nth-child(7)">
                            <img className="card-icon" src={imgICCarp} alt="" />
                            <p className="card-title">Ménuserie</p>
                            <p className="card-detail">Detail</p>
                            <img className="card-next" src={imgRightArrow} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="plaquette">
                <div className="about-wrapper">
                    <div className="inner-content">
                        <h1 className="heading-title">Télecharger notre Plaquette</h1>
                        
                        <p>Pour en savoir plus sur Rapide Réparation, sur grille tarifaire, sur nos services et sur notre mode de fonctionnement, nous vous conseillons de telecharger notre librairie digitale.</p>

                        <Link className="links" to="#" style={{color: "#EF8123"}}>
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

            <div className="partners-container">
                <h2>Nos Partenaires & Fournisseurs</h2>

                <div className="partners">
                    <img src={imgSippec} alt="" />
                    <img src={imgBernabe} alt="" />
                    <img src={imgBollore} alt="" />
                    <img src={imgOrange} alt="" />
                </div>
            </div>
        </>
    )
}