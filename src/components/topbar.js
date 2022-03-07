import imgChat from '../img/chat.png';
import imgMarker from '../img/marker.png';
import imgFacebook from '../img/facebook.png';
import imgLinkedin from '../img/linkedin.png';
import imgTwitter from '../img/twitter.png';
import imgInstagram from '../img/instagram.png';
import imgYoutube from '../img/youtube.png';

export function TopBar(props) {
    return (
        <div className="topbar-menu">
            <span className="info-1">Les experts chez vous.</span>
            <span className="info-2"><img src={imgChat}  alt=""/> Disponibilité 24h/7j</span>
            <span className="info-3"><img src={imgMarker}  alt=""/> Cocody Riviera Golf</span>
            <span className="info-4">
                <a href="https://www.facebook.com/Rapide-R%C3%A9paration-111599908121056" target={"_blank"} rel="noreferrer">
                    <img src={imgFacebook} alt="" />
                </a>
                <a href="https://www.linkedin.com/company/rapide-reparation/about/?viewAsMember=true" target={"_blank"} rel="noreferrer">
                    <img src={imgLinkedin} alt="" />
                </a>
                <a href="https://twitter.com/RAPIDREPARATION" target={"_blank"} rel="noreferrer">
                    <img src={imgTwitter} alt="" />
                </a>
                {/* <a href="" target={"_blank"} rel="noreferrer">
                    <img src={imgInstagram} alt="" />
                </a> */}
                <a href="https://www.youtube.com/channel/UCaUqVM-hYK2s50NMCwB64mg" target={"_blank"} rel="noreferrer">
                    <img src={imgYoutube} alt="" />
                </a>
            </span>
        </div>
    )
}