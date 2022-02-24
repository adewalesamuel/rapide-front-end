import { Link } from 'react-router-dom';
import checkImg from '../img/check.png'

export function CommandeFin({state, method}) {
    return (
        <>
            <div className="">
                <h2 style={{color: '#968A8A'}}>Félicitations ! Votre commande a été reçu avec succès.</h2>
            </div>
            <p style={{color: '#968A8A'}}>Vous serez bientôt contacté par nos équipes.</p>   

            <form action="#">
                <img className="checkbox" style={{marginTop: '30px', width: "100px", height: 'auto'}} 
                src={checkImg} alt=""/>

                <div className="validate" style={{gridColumn: '1/3', display: "flex", alignItems: 'center', 
                justifyContent:'center'}}>
                    <Link to="/">
                        <button type="submit" style={{backgroundColor: '#ef8123', border: "none", color: '#fff', 
                        borderRadius:'5px', fontSize: '20px', padding:'20px', cursor:'pointer'}}>
                            Revenir à l'accueil
                        </button>
                    </Link>
                </div>
            </form>
        </>
    );
}