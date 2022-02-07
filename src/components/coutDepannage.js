import { _Helpers } from "../_helpers";

export function CoutDepannage({state}) {
    const service = state.services.find(service => service.id === parseInt(state.serviceId));
    if (service){
        if (service.prix > 0) {
            return (
                <span style={{color: "#968A8A", maxWidth: "300px"}}>
                    <div style={{width:"100%"}}>
                        Estimation Total du Dépanage : <br />
                        <span style={{fontSize: "1.6rem", color: "red"}}>
                            {  _Helpers.Strings.priceFormat(service.prix * state.quantite) + " Fcfa"}</span>
                    </div>
                    <div>{service.description}</div>
                    <div style={{fontWeight: "bolder", color:"red", marginTop: "20px"}}>NB: Les prix affichés ne sont qu'a titre indicatif. Ils peuvent évoluer après la visite technique</div>
                </span>
            )
        }else {
            return (
                 <span style={{color: "#968A8A"}}>
                    <div style={{width:"100%"}}>
                        Estimation Total du Dépanage : <span style={{fontSize: "1.6rem", color: "red"}}>Sur devis</span>
                    </div>
                    <div>{service.description}</div>
                 </span>
            )
        }
    }else {
        return null;
    }
}