import {useRef} from 'react';

import { Components } from ".";
import { Forms } from "../_helpers/forms";

export function UserForm({state, method}) {
    const formElement = useRef();

    return (
        <>
            <div className="steps-wrapper">
                <div className="steps">
                    <div className="step">
                        <span className="idx">1</span>
                        <span className="desc">Choisir le <br />service</span>
                    </div>

                    <div className="step active">
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

            <div className="accept-acount">
                <h2 style={{color: '#968A8A'}}>Avez vous déjà un compte ?</h2>
                <span className="checkbox" style={{marginRight: '30px', fontWeight: 'bold', color:"#968A8A"}}> 
                Oui<input type="radio" name="has_account" style={{cursor:'pointer'}} 
                onChange={() => method.setHasAccount(true)} checked={state.hasAccount ? true : false}/></span>
                <span className="checkbox"  style={{fontWeight: 'bold', color:"#968A8A"}}> 
                Non<input type="radio" name="has_account" style={{cursor:'pointer'}} 
                onChange={() => method.setHasAccount(false)} checked={state.hasAccount ? false : true}/></span>
            </div>


            <form action="#" ref={formElement}>
                {!state.hasAccount ? 
                    <>
                        <input type="text" name="nom_prenoms" required value={state.nomPrenoms} 
                        onChange={event => method.setNomPrenoms(event.target.value)} placeholder="Nom & Prénoms" />
                        <input type="password" name="password" required value={state.password} 
                        onChange={event => method.setPassword(event.target.value)} placeholder="Definissez votre mot de passe" />
                        <input type="email" name="mail" required value={state.mail} 
                        onChange={event => method.setMail(event.target.value)} placeholder="Adresse Email" />
                        <input type="password" name="cpassword" required value={state.cpassword} 
                        onChange={event => method.setCpassword(event.target.value)} placeholder="Retapez votre mot de passe" />
                        <input type="text" name="telephone" minLength={10} required value={state.telephone} 
                        onChange={event => method.setTelephone(event.target.value)} placeholder="Numéro téléphone" />
                        {state.isEntreprise ?
                            <>
                            <input type="text" name="nom_entreprise" required value={state.nomEntreprise} 
                            onChange={event => method.setNomEntreprise(event.target.value)} placeholder="Nom de l'entreprise" />
                            <input type="text" name="registre_commerce" required value={state.registreCommerce} 
                            onChange={event => method.setRegistreCommerce(event.target.value)} placeholder="Registre de commerce" />
                            <input type="text" name="dfe" required value={state.dfe} 
                            onChange={event => method.setDfe(event.target.value)} placeholder="Numéro contribuable" />
                            </> : null
                        }
                        <input type="text" name="" placeholder="Lieu de Residence"  
                        style={{visibility: 'hidden',gridColumn:'1/3', maxHeight:"0px", marginTop: "-30px"}} disabled/>
                    </> : 
                    <>
                        <input type="email" name="mail" required value={state.mail} 
                        onChange={event => method.setMail(event.target.value)} placeholder="Adresse Email" />
                        <input type="password" name="password" required value={state.password} 
                        onChange={event => method.setPassword(event.target.value)} placeholder="Entrez votre mot de passe" />
                    </>
                    }

                <Components.CoutDepannage state={state}/>

                <div className="validate" 
                style={{gridColumn: "1/3", display:"flex", alignItems:"center", justifyContent:'center'}}>
                    <button type="submit" style={{backgroundColor: "#2A265B", border:"none", color: "#fff", 
                padding: "7px 40px", borderRadius: "5px", cursor: 'pointer'}} onClick={event => {
                    method.handleUserFormSubmit(event);
                    Forms.validateForm(formElement.current)
                }}
                disabled={state.isLoading ? true : false}>
                    {state.isLoading ? "En cours de chargement..." : "Suivant"}
                </button>
                </div>
            </form>
        </>
    );
}