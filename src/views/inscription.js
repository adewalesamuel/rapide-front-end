import {useState, useRef} from 'react';
import { Link } from 'react-router-dom';
import { Services } from '../services';
import { Forms } from '../_helpers/forms';

import { useLocation } from 'react-router-dom';

import checkImg from '../img/check.png';


function Inscription(props) {
    const location = useLocation();
    const formElement = useRef();
    const abortController = new AbortController();
    const userType = "client";
    const [nomPrenoms, setNomPrenoms] = useState("");
    const [mail, setMail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [password, setPassword] = useState("");
    const [cPassword, setCpassword] = useState("");
    const [type, setType] = useState("particulier")
    const [nomEntreprise, setNomEntreprise] = useState("");
    const [registreCommerce, setRegistreCommerce] = useState("");
    const [dfe, setDfe] = useState("");
    const [pcCode, setPcCode] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [hasSignedUp, setHasSignedUp] = useState(false);
    const [hasAcceptedTerms, setHasAcceptedTerms] = useState(false);

    function toggleHasAcceptedTerms() {
        setHasAcceptedTerms(!hasAcceptedTerms);
        console.log(hasAcceptedTerms)
    }

    function handleUserFormSubmit(event) {
        event.preventDefault();

        if (type === "entreprise" && (!nomEntreprise || !registreCommerce || !dfe))
                return alert("Veuillez remplir tout les champs");

        const payload = {
            'nom_prenoms': nomPrenoms,
            'mail': mail,
            'telephone': telephone,
            'password': password,
            'type': userType,
            'pc_code': pcCode,
            'nom_entreprise': nomEntreprise,
            'registre_commerce': registreCommerce,
            'dfe': dfe
        };

        if (telephone.length !== 10) return alert("Le numéro de téléphone doit contenir 10 caractères !");
        if (password.length < 6) return alert("Le mot de passe doit avoir au moins 6 catractères !");
        if (password !== cPassword) return alert('Les mots de passe ne correspondent pas !');
        if (!hasAcceptedTerms) return alert("Vous devez accepter les termes et conditions d'utilisation !");

        setIsLoading(true);
        Services.Auth.register(JSON.stringify(payload), abortController.signal)
        .then(result => {
            setHasSignedUp(true);
            setIsLoading(false);
        })
        .catch(err => {
            setHasSignedUp(false);
            setIsLoading(false);
            alert("Une erreur est survenue. Veuillez réessayer");
        });
    }
    return (
        <div className='inscription'>
           <div className='form-container'>
               <br />
               <br />
               <br />
               {!hasSignedUp ?
                   <div className='coordinates register-form-container'>
                        <h1>Inscription</h1>
                        <p>Remplissez le formulaire d'inscription pour créer votre compte</p>
                        <br />
                        <form ref={formElement}>
                            <input type="text" name="nom_prenoms" required value={nomPrenoms} 
                            onChange={event => setNomPrenoms(event.target.value)} placeholder="Nom & Prénoms" />
                            <input type="email" name="mail" required value={mail} 
                            onChange={event => setMail(event.target.value)} placeholder="Adresse Email" />
                            <input type="text" name="telephone" minLength={10} required value={telephone} 
                            onChange={event => setTelephone(event.target.value)} placeholder="Numéro téléphone" />
                            <select name="type" id="" style={{width: '100%', marginTop:"15px"}} value={type} 
                            onChange={event => setType(event.target.value)}>
                                <option value="particulier" key="1">
                                    Particulier
                                </option>
                                <option value="entreprise" key="2">
                                    Entreprise
                                </option>
                            </select>
                            {type === "entreprise" ?
                            <>
                                <input type="text" name="nom_entreprise" required value={nomEntreprise} 
                                onChange={event => setNomEntreprise(event.target.value)} placeholder="Nom de l'entreprise" />
                                <input type="text" name="registre_commerce" required value={registreCommerce} 
                                onChange={event => setRegistreCommerce(event.target.value)} placeholder="Registre de commerce" />
                                <input type="text" name="dfe" required value={dfe} 
                                onChange={event => setDfe(event.target.value)} placeholder="Numéro contribuable" />
                            </> : null
                            }
                            <input type="password"autoComplete="on" name="password" minLength={6} required value={password} 
                            onChange={event => setPassword(event.target.value)} placeholder="Definissez votre mot de passe" />
                            <input type="password"autoComplete="on" name="cpassword" minLength={6} required value={cPassword} 
                            onChange={event => setCpassword(event.target.value)} placeholder="Retapez votre mot de passe" />
                            <input type="text" name="pc_code" value={pcCode}
                            onChange={event => setPcCode(event.target.value)} placeholder="PC Code (optionnel)" />
                            <div style={{display:"flex", justifyContent: 'flex-start', marginTop: "20px"}}>
                                <input type="checkbox" name="has_accepted_terms" value={hasAcceptedTerms} checked={hasAcceptedTerms}
                                style={{width: "30px", marginTop: "0", marginRight: "20px"}}
                                onChange={event => toggleHasAcceptedTerms()}/>
                                <small>Veuillez accepter les termes et conditions d'utilisation</small>
                            </div>

                            <div className="validate" style={{gridColumn: "1/3", display:"flex", alignItems:"center", 
                            justifyContent:'center', marginTop: "30px"}}>
                                <button type="submit" style={{backgroundColor: "#2A265B", border:"none", color: "#fff", 
                            padding: "20px 40px", borderRadius: "5px", cursor: 'pointer'}} onClick={event => {
                                handleUserFormSubmit(event);
                                Forms.validateForm(formElement.current)
                            }}
                            disabled={isLoading ? true : false}>
                                {isLoading ? "En cours de chargement..." : "Creer mon compte"}
                            </button>
                            </div>
                        </form>
                    </div> : 
                    <div className='coordinates register-form-container'>
                        <div className="">
                            <h2 style={{color: '#968A8A'}}>Félicitations ! Votre inscritpion est un succès</h2>
                        </div>
                        <p style={{color: '#968A8A'}}>Vous pouvez désormais passer commande</p>   
            
                        <form action="#">
                            <img className="checkbox2" style={{margin: '30px auto', width: "100px", height: 'auto', display: 'block'}} 
                            src={checkImg} alt=""/>
            
                            <div className="validate" style={{gridColumn: '1/3', display: "flex", alignItems: 'center', 
                            justifyContent:'center'}}>
                                <Link to={location.pathname.includes('mobile') ? "/mobile/" : "/"}>
                                    <button type="submit" style={{backgroundColor: '#ef8123', border: "none", color: '#fff', 
                                    borderRadius:'5px', fontSize: '20px', padding:'20px', cursor:'pointer'}}>
                                        Voir nos services
                                    </button>
                                </Link>
                            </div>
                        </form>
                    </div>}
                   
               <br />
               <br />
               <br />
           </div>
        </div>
    );
}

export default Inscription;