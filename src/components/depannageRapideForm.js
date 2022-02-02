
import {useState} from 'react';
import { Services } from '../services';

export function DepannageRapideForm(props) {
    const abortController = new AbortController();
    const [categorieId, setCategorieId] = useState("");
    const [sousCategories, setSousCategories] = useState([]);
    const [prestations, setPrestations] = useState([]);
    const [services, setServices] = useState([]);
    const [serviceId, setServiceId] = useState("");

    function handleCategorieChange(event) {
        event.preventDefault();
        
        const categorieId = event.target.value;

        if (Number.isNaN(parseInt(categorieId))) return;

        Services.Categorie.getAllSousCategorie(categorieId, abortController.signal)
        .then(result => {
            setSousCategories(result.data);
            setPrestations([]);
            setServices([]);
            
        })
        .catch(err => console.log(err));
    }

    function handleSousCategorieChange(event) {
        event.preventDefault();
        
        const sousCategorieId = event.target.value;

        if (Number.isNaN(parseInt(sousCategorieId))) return;

        Services.SousCategorie.getAllPrestation(sousCategorieId, abortController.signal)
        .then(result => {
            setPrestations(result.data);
            setServices([]);
            
        })
        .catch(err => console.log(err));
    }

    function handlePrestationChange(event) {
        event.preventDefault();
        
        const prestationId = event.target.value;

        if (Number.isNaN(parseInt(prestationId))) return;

        Services.Prestation.getAllService(prestationId, abortController.signal)
        .then(result => {
            setServices(result.data);
            
        })
        .catch(err => console.log(err));
    }

    function handleSubmit(event) {
        event.preventDefault();
        
        if (!event.target.form.quantite.value || event.target.form.lieu.value === "" || 
        !serviceId || serviceId === "") 
            return alert("Vous devez remplir tous champs");

        event.target.form.submit();
    }
    return (
        <div className="urgence-form">
            <form action="/commandes">
                <h3>Dépannage Rapide</h3>

                <div className="select-group">
                    <select required onChange={handleCategorieChange}>
                        <option>Choisissez une categorie</option>
                        {props.categories.map((categorie, index) => {
                            return (
                                <option value={categorie.id} key={index}>
                                    {categorie.nom}
                                </option>
                            )
                        })}
                    </select>
                </div>

                <div className="select-group">
                    <select required onChange={handleSousCategorieChange}>
                        <option defaultValue={""}>Choisissez une sous categorie</option>
                        {sousCategories.map((sousCategorie, index) => {
                            return (
                                <option value={sousCategorie.id} key={index}>
                                    {sousCategorie.nom}
                                </option>
                            )
                        })}
                    </select>
                </div>

                <div className="select-group">
                    <select required onChange={handlePrestationChange}>
                        <option defaultValue={""}>Choisissez une prestation</option>
                        {prestations.map((prestation, index) => {
                            return (
                                <option value={prestation.id} key={index}>
                                    {prestation.nom}
                                </option>
                            )
                        })}
                    </select>
                </div>

                <div className="select-group">
                    <select required name="service_id" onChange={(event) => setServiceId(event.target.value)}>
                        <option defaultValue={""}>Choisissez un service</option>
                        {services.map((service, index) => {
                            return (
                                <option value={service.id} key={index}>
                                    {service.nom}
                                </option>
                            )
                        })}
                    </select>
                </div>

                <div className="form-group">
                    <input required type="number" name="quantite" min={1} placeholder="Quantité" />
                </div>
                
                <div className="form-group">
                    <input required type="text" name="lieu" placeholder="Adressse de dépannage" />
                </div>
                <button type="submit" onClick={handleSubmit}>
                    VALIDER
                </button>
            </form>
        </div>
    )
}