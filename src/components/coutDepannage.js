export function CoutDepannage({state}) {
    const service = state.services.find(service => service.id === parseInt(state.serviceId));
    if (service){
        if (service.prix > 0) {
            return (
                <span style={{color: "#968A8A"}}>Estimation Total du Dépanage : 
                    <h2>{  service.prix * state.quantite + " Fcfa"}</h2>
                </span>
            )
        }else {
            return (
                <span style={{color: "#968A8A"}}>Estimation Total du Dépanage : 
                    <h2> Sur devis </h2>
                </span>
            )
        }
    }else {
        return null;
    }
}