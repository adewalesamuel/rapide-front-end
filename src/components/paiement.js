import { Components } from '.';
import imgCash from '../img/cash2.png'
export function Paiement({state, method}) {
    return (
        <>
            <div className="steps-wrapper">
                <div className="steps">
                    <div className="step">
                        <span className="idx">1</span>
                        <span className="desc">Choisir le <br />service</span>
                    </div>

                    <div className="step ">
                        <span className="idx">2</span>
                        <span className="desc">Information Personnel</span>
                    </div>

                    <div className="step active">
                        <span className="idx">3</span>
                        <span className="desc">Paiement</span>
                    </div>
                </div>


                <hr className="divider-step" />
            </div>

            <div className='accept-account' style={{maxWidth: "750px", marging: 'auto', paddingBottom:'20px'}}>
                <Components.CoutDepannage state={state}/>
            </div>


            <form action="#">
                <h3 style={{color: '#968A8A'}}>Selectionnez votre methode de paiement: </h3>
                <select name="" id="">
                    <option value="">Paiement au depannage</option>

                </select>
                
                <img className="checkbox" style={{marginRight: '30px', width: "180px", height: 'auto'}} 
                src={imgCash} alt=""/>

                <div className="validate" style={{gridColumn: '1/3', display: "flex", alignItems: 'center', 
                justifyContent:'center'}}>
                    <button type="submit" style={{backgroundColor: '#ef8123', border: "none", color: '#fff', 
                    borderRadius:'5px', fontSize: '20px', padding:'20px', cursor:'pointer'}}
                    onClick={method.handleCommandeSubmit} disabled={state.isLoading ? true : false}>
                        {state.isLoading ? "En cours de chargement..." : "Finaliser votre commande"}
                    </button>
                </div>
            </form>
        </>
    );
}