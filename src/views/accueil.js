import imgPlaystore from '../img/playstore.png'
import imgAppstore from '../img/appstore.png'
import imgMobile2 from '../img/mobile2.png'
import imgMain from '../img/services/11zon_cropped-4.png'
import downloadImg from '../img/download-app.jpg'
import { Link } from 'react-router-dom'
import {useState, useEffect} from 'react';
import { Services } from '../services';
import { Components } from '../components';
import {useNavigate} from 'react-router-dom';

export function Accueil(props) {
    const abortController = new AbortController();

    const navigate = useNavigate()

    const [categories, setCategories] = useState([]);
    const [hasDowloaded, setHasDownloaded] = useState(false);
    const storeHasDowloaded = () => {
        if ('localStorage' in window) {
            window.localStorage.setItem("hasDownloaded", true);
            setHasDownloaded(true);
        }
    }

    useEffect(() => {
      Services.Categorie.getAll(abortController.signal)
      .then(result => setCategories(result.data))
      .catch(err => console.log(err));

      if ('localStorage' in window) {
          if (window.localStorage.getItem("hasDownloaded")) {
              setHasDownloaded(true);
          }
      }

      return () => {
          abortController.abort()
      }
    
    }, []);

    function renderImgFromName(categorie, index) {
        try {
            const imgSlug = categorie.nom.toLowerCase().replace(/ /g, '_')
            .replace(/é/g, 'e').replace(/ç/g, 'c');
            const img = require('../img/' + imgSlug + '.png');

            return <img className={"service " + "service-" + (index +1)} src={img}
            alt={categorie.nom} key={index} onClick={event => navigate('/commandes/' + categorie.id)}
            style={{cursor: 'pointer'}}/>;
        } catch (error) {
            return null;
        }

    }
    
    return (
        <>
            {hasDowloaded ? null :
            <div className="download-app">
            <span className='close' onClick={() => setHasDownloaded(true)}>&times;</span>
            <div className='content'>
                <img className="download-img" src={downloadImg} alt="rapide reparation"/>
                <div className='download-txt'>
                    <h4 className='download-title'>Commander dans l'application</h4>
                    <div className='download-desc' style={{fontSize:"14px"}}>
                        Utiliser notre application gratuite sur 
                        playstore pour commander plus simplement nos services.
                    </div>
                </div>
            </div>
            <a className="download-btn" href="https://play.google.com/store/apps/details?id=com.davekabiyesis.rradnroid"
            onClick={() => storeHasDowloaded()}>
                Téléchargez l'application
            </a>
            </div> 
            }
            <header>
                <div className="heading-info">
                    <h1>Nous offrons les meilleurs services à domicile.</h1>
                    <div className="stores">
                        <img src={imgPlaystore} alt="" />
                        <img src={imgAppstore} alt="" />
                    </div>
                </div>

                <div className="card-services">
                    <img className="main" src={imgMain} alt="" />

                    {categories.map((categorie, index) => {
                        return renderImgFromName(categorie, index)
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
                
                <p>Cette entreprise est née de la volonté de faciliter l’accès aux services liés à la remise en état de vos bureaux et appartements. Rapide Réparation offre la possibilité à ses clients et partenaires de bénéficier de services de qualités à travers ses différentes plateformes (site internet, Application mobile, Réseaux sociaux) 7j/7j.</p>

                <Link to="/presentation">VOIR PRESENTATION</Link>
            </div>

            <div className="mobile-section">
                <div className="mobile-app">
                    <div className="heading-info">
                        <h2 className="bold">
                            Téléchargez l'application mobile<br/>
                            <span className="rapide">R</span>apide
                            <span className="rapide">R</span>éparation
                        </h2>

                        <h2 className="normal">
                            pour une meilleure experience, nous<br/>
                            avons pensé à tout.
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