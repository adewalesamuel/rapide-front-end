import imgPlaystore from '../img/playstore.png'
import imgAppstore from '../img/appstore.png'
import imgPlumbing from '../img/plumbing.png'
import imgElectricity from '../img/electricity.png'
import imgAc from '../img/ac.png'
import imgMaconerie from '../img/masonerie.png'
import imgPainting from '../img/painting.png'
import imgCarpentry from '../img/carpentry.png'
import imgJardinage from '../img/jardinage.png'
import imgMain from '../img/main.png'
import imgMobile2 from '../img/mobile2.png'
import { Link } from 'react-router-dom'
import {useState, useEffect} from 'react';
import { Services } from '../services';
import { Components } from '../components'

export function Acceuil(props) {
    const abortController = new AbortController();

    const [categories, setCategories] = useState([]);

    useEffect(() => {
      Services.Categorie.getAll(abortController.signal)
      .then(result => setCategories(result.data))
      .catch(err => console.log(err));

      return () => {
          abortController.abort()
      }
    
    }, []);

    function renderImgFromName(imgName, index) {
        try {
            const imgSlug = imgName.toLowerCase().replace(/ /g, '_')
            .replace(/é/g, 'e').replace(/ç/g, 'c');
            console.log(imgSlug)
            const img = require('../img/' + imgSlug + '.png');
            return <img className={"service " + "service-" + (index +1)} src={img} alt={imgName} key={index}/>;
        } catch (error) {
            return null;
        }

    }
    
    return (
        <>
            <header>
                <div className="heading-info">
                    <h1>Nous offrons les meilleurs services a domicile.</h1>
                    <div className="stores">
                        <img src={imgPlaystore} alt="" />
                        <img src={imgAppstore} alt="" />
                    </div>
                </div>

                <div className="card-services">
                    <img className="main" src={imgMain} alt="" />

                    {/* <img src={imgPlumbing} alt="" className="service service-1" />
                    <img src={imgElectricity} alt="" className="service service-2" />
                    <img src={imgAc} alt="" className="service service-3" />
                    <img src={imgMaconerie} alt="" className="service service-4" />
                    <img src={imgPainting} alt="" className="service service-5" />
                    <img src={imgCarpentry} alt="" className="service service-6" />
                    <img src={imgJardinage} alt="" className="service service-7" /> */}
                    {categories.map((categorie, index) => {
                        return renderImgFromName(categorie.nom, index)
                        })}
                </div>
            </header>

            <div className="depannage-urgence">
                <div className="top-band"></div>
                <div className="bottom-band"></div>

                <div className="text-urgence">

                    <div className="heading-info">
                        <h1>Notre Solution <br/>d'Urgence</h1>
                        <p>Un dépannage, c’est une affaire de confiance : le travail doit être bien fait, sans mauvaise surprise à la fin, ni les jours suivants. C’est pour cela que notre entreprise s’engage depuis sa création à ne travailler qu’avec des professionnels fiables.
                        </p>
                    </div>
            
                    <Components.DepannageRapideForm  categories={categories}/>
                </div>
            </div>
            
            <div className="bref-desc">
                <h1>Qui sommes nous ?</h1>
                
                <p>Cette entreprise est née de la volonté de facilité l’accès aux services liés à la remise en état de vos bureaux et appartements. Rapide Réparation offre la possibilité à ses clients et partenaires de bénéficier de services de qualités à travers ses différentes plateformes (site internet, Application mobile, Réseaux sociaux) 7j/7j.</p>

                <Link to="/presentation">VOIR PRESENTATION</Link>
            </div>

            <div className="mobile-section">
                <div className="mobile-app">
                    <div className="heading-info">
                        <h2 className="bold">
                            Télécharger l'application mobile<br/>
                            <span className="rapide">R</span>apide
                            <span className="rapide">R</span>éparation
                        </h2>

                        <h2 className="normal">
                            pour une meilleures experience, nous<br/>
                            avons pensé a tout.
                        </h2>

                        <div className="stores">
                            <Link to="#"><img src={imgPlaystore} alt="" /></Link>
                            <Link to="#"><img src={imgAppstore} alt="" /></Link>
                        </div>
                    </div>
            
                    <div className="images">
                        <img src={imgMobile2} alt="" />
                    </div>
                </div>
            </div>

            {/* <div className="partners-section">
                <h2>Ils nous font tous confiance</h2>

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