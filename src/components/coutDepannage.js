import { _Helpers } from "../_helpers";

export function CoutDepannage({state}) {
    const service = state.services.find(service => service.id === parseInt(state.serviceId));

    if (service){
        if (state.isUrgent || service.prix <= 0) {
            return (
                <span style={{color: "#968A8A"}}>
                    <div style={{width:"100%"}}>
                        Estimation Total du Dépanage : 
                        <span style={{fontSize: "1.6rem", color: "#ef8123"}}>Sur devis</span>
                    </div>
                    <div>{service.description}</div>
                </span>
            )
        } else {
            return (
                <span style={{color: "#968A8A", gridColumn:'1/3', textAlign: "justify"}}>
                    <div style={{width:"100%"}}>
                        Estimation Total du Dépanage :
                        <span style={{fontSize: "1.6rem", color: "#ef8123", marginLeft: '10px'}}>
                            {  _Helpers.Strings.priceFormat(service.prix * state.quantite) + " Fcfa"}</span>
                    </div>
                    <div>{service.description}</div>
                    <div style={{fontWeight: "bolder", color: "red", marginTop: "20px"}}>NB: Le montant 
                    affiché représente uniquement le coût de la main d'oeuvre. Il peut être modifié après 
                    une visite sur les lieux et fonction des réalités du terrain.</div>
                </span>
            )
        }
    }else {
        return null;
    }
}