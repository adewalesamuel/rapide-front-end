import {useRef} from 'react';
import { Components } from ".";
import { Forms } from '../_helpers/forms';

export function CommandeForm({state, method}) {
    let formElement = useRef("");

    return (
        <>
            <div className="steps-wrapper">
                <div className="steps">
                    <div className="step active">
                        <span className="idx">1</span>
                        <span className="desc">Choisir le <br />service</span>
                    </div>

                    <div className="step">
                        <span className="idx">2</span>
                        <span className="desc">Information Personnel</span>
                    </div>

                    <div className="step">
                        <span className="idx">3</span>
                        <span className="desc">Paiement</span>
                    </div>
                </div>


                <hr className="divider-step" />
            </div>

            <form action="#" ref={formElement}>
                <select required name="sous_categories" id="" onChange={method.handleSousCategorieChange}>
                    <option value="">(1) Choisissez une sous categorie</option>
                    {state.sousCategories.map((sousCategorie, index) => {
                        return (
                            <option value={sousCategorie.id} key={index}>
                                {sousCategorie.nom}
                            </option>
                        )
                    })}
                </select>

                <select required name="prestations" id="" value={state.prestationId} onChange={method.handlePrestationChange}>
                    <option value="">(2) Choisissez une prestation</option>
                        {state.prestations.map((prestation, index) => {
                            return (
                                <option value={prestation.id} key={index}>
                                    {prestation.nom}
                                </option>
                            )
                        })}
                </select>


                <select required name="service_id" id="" value={state.serviceId} onChange={method.handleServiceChange}>
                    <option value="">(3) Choisissez un service</option>
                        {state.services.map((service, index) => {
                            return (
                                <option value={service.id} key={index}>
                                    {service.nom}
                                </option>
                            )
                        })}
                </select>

                <input required type="number" name="quantite" value={state.quantite} min={1} placeholder="(4) Quantité" 
                onChange={(event) => method.setQuantite(event.target.value)}/> 
                <input required type="text" name="lieu" value={state.lieu} placeholder="(5) Adresse de depannage" 
                onChange={(event) => method.setLieu(event.target.value)}/>
                <input type="file" disabled placeholder="Ajouter une photo descriptive de votre besoin " 
                style={{visibility: 'hidden'}}/>

                {(state.quantite && state.quantite > 0) ?
                    <Components.CoutDepannage state={state}/>
                    : null
                }

                <textarea placeholder="Exprimer brièvement votre besoin...." name="" id="" value={state.description}
                style={{gridColumn: "1/3", backgroundColor: "#f0f0f0", borderRadius: "5px", borderColor: "#E0E0E0", 
                padding: "4px 7px", fontFamily: "Gothic", fontSize: '1rem'}} cols="30" rows="10" 
                onChange={(event) => method.setDescription(event.target.value)}></textarea>

                <div className="validate" 
                style={{gridColumn: "1/3", display:"flex", alignItems:"center", justifyContent:'center'}}>
                    <button type="submit" style={{backgroundColor: "#2A265B", border:"none", color: "#fff", 
                    padding: "7px 40px", borderRadius: "5px", cursor: 'pointer'}} onClick={event => {
                        method.handleNextClick(event); 
                        Forms.validateForm(formElement.current)}}
                    disabled={state.isLoading ? true : false}>
                        {state.isLoading ? "En cours de chargement..." : "Suivant"}
                    </button>
                </div>
                
            </form>
        </>
    );
}