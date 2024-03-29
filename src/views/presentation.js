import imgRight from '../img/right.png'
import imgICHero from '../img/ic_hero.png'
import imgBooks from '../img/plaquette-presentation.png'
import { Link } from 'react-router-dom'
import { Components } from '../components'
import {useState, useEffect} from 'react'
import { Services } from '../services'

export function Presentation(props) {
    let [categories, setCategories] = useState([]);


    useEffect(() => {
        const abortController = new AbortController();

        if (categories.length > 0) return;
        
        Services.Categorie.getAll(abortController.signal)
        .then(result => setCategories(result.data))
        .catch(err => console.log(err));

        return () => {
            abortController.abort();
        }
    }, [categories])

    function renderImgFromName(imgName) {
        try {
            const imgSlug = imgName.toLowerCase().replace(/ /g, '_')
            .replace(/é/g, 'e').replace(/ç/g, 'c');
            const img = require('../img/ic_' + imgSlug + '.png');
            return <img className="card-icon" src={img} alt={imgName}
            style={{width: "auto", height:"101px"}}/>;
        } catch (error) {
            return null;
        }

    }

    return (
        <> 
            <section>
                <div className="introduction">
                    <img src={imgICHero} alt="" width="100%" />
                </div>

                <div className="services">
                    <h1>Qui Sommes Nous ?</h1>

                    <p>Créée en 2020, Rapide Réparation est une entreprise digitale de réparation spécialisée   en Plomberie, Electricité, étanchéité, maçonnerie, menuiserie, froid et climatisation, soudure, carrelage, peinture, aménagement, déménagement, nettoyage, jardinage, désinfection dans les locaux professionnels et particuliers. Cette entreprise est née de la volonté de faciliter l’accès aux services liés à la remise en état de vos bureaux et appartements. <br /><br />
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
                        <p>Confiez vos travaux de réparation domestique à <br /> des professionnels.
                        </p>
                    </div>
            
                    <Components.ServiceBox categories={categories}
                    renderImgFromName={renderImgFromName}/>

                </div>
            </div>
            
            <div className="plaquette">
                <div className="about-wrapper">
                    <div className="inner-content">
                        <h1 className="heading-title">Télecharger notre Plaquette</h1>
                        
                        <p>Pour en savoir plus sur Rapide Réparation, sur grille tarifaire, sur nos services et sur notre mode de fonctionnement, nous vous conseillons de telecharger notre librairie digitale.</p>

                        <a className="links" to="#" style={{color: "#2a265b"}}
                        href="/plaquette-presentation.PDF" download={"Plaquette de presenation"}>
                            <img src={imgRight} alt="alt" width="30px" />
                            &nbsp; Plaquette de présentation
                        </a>
                    
                        <a className="links" href="/matrice-prix.pdf" download={"Matrice de prix"} style={{color: "#2a265b"}}>
                            <img src={imgRight} alt="alt" width="30px" />
                            &nbsp; 
                            Matrice de Prix
                        </a>
                    </div>

                    <img src={imgBooks} alt="" style={{paddingTop:"20px"}}/>
                </div>
            </div>

            {/* <div className="partners-container">
                <h2>Nos Partenaires & Fournisseurs</h2>

                <div className="partners">
                    <img src={imgSippec} alt="" />
                    <img src={imgBernabe} alt="" />
                    <img src={imgBollore} alt="" />
                    <img src={imgOrange} alt="" />
                </div>
            </div> */}
        </>
    )
}