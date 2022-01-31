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
            <span className="info-2"><img src={imgChat} /> Disponibilité 24h/7j</span>
            <span className="info-3"><img src={imgMarker} /> Cocody Riviera Golf</span>
            <span className="info-4">
                <img src={imgFacebook} alt="" />
                <img src={imgLinkedin} alt="" />
                <img src={imgTwitter} alt="" />
                <img src={imgInstagram} alt="" />
                <img src={imgYoutube} alt="" />
            </span>
        </div>
    )
}