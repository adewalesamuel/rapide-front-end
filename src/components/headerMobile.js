import backImg from '../img/back.png';
import { useNavigate } from 'react-router-dom';

export function HeaderMobile(props) {
    const navigate = useNavigate();

    if (window.location.pathname.endsWith('mobile/') || 
    window.location.pathname.endsWith('mobile'))
     {
         return null;

     }else {
        return (
            <div className="nav-mobile">
               <img src={backImg} alt="retour" onClick={() => navigate('/mobile/')}/>
            </div>
        )
     }
}