import {useState} from 'react';
import { Services } from '../services';

function Inscription(props) {
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

    function handleUserFormSubmit(event) {
        event.preventDefault();
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

        if (password !== cPassword) return alert('Les mots de passe ne correspondent pas !');

        setIsLoading(true);
        Services.Auth.register(JSON.stringify(payload), abortController.signal)
        .then(result => {
            alert("Votre compte a été créé avec succes !");
            setIsLoading(false);
            window.location.assign('/');
        })
        .catch(err => {
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
                <div className='coordinates register-form-container'>
                    <h1>Inscription</h1>
                    <p>Remplissez le formulaire d'inscription pour créer votre compte</p>
                    <br />
                    <form>
                        <input type="text" name="nom_prenoms" required value={nomPrenoms} 
                        onChange={event => setNomPrenoms(event.target.value)} placeholder="Nom & Prénoms" />
                        <input type="email" name="mail" required value={mail} 
                        onChange={event => setMail(event.target.value)} placeholder="Adresse Email" />
                        <input type="text" name="telephone" required value={telephone} 
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
                            onChange={event => setDfe(event.target.value)} placeholder="DFE" />
                        </> : null
                        }
                        <input type="password"autoComplete="on" name="password" required value={password} 
                        onChange={event => setPassword(event.target.value)} placeholder="Definissez votre mot de passe" />
                        <input type="password"autoComplete="on" name="cpassword" required value={cPassword} 
                        onChange={event => setCpassword(event.target.value)} placeholder="Retapez votre mot de passe" />
                        <input type="text" name="pc_code" value={pcCode} 
                        onChange={event => setPcCode(event.target.value)} placeholder="PC Code (optionnel)" />
                        <div className="validate" style={{gridColumn: "1/3", display:"flex", alignItems:"center", 
                        justifyContent:'center', marginTop: "30px"}}>
                            <button type="submit" style={{backgroundColor: "#2A265B", border:"none", color: "#fff", 
                        padding: "20px 40px", borderRadius: "5px", cursor: 'pointer'}} onClick={handleUserFormSubmit}
                        disabled={isLoading ? true : false}>
                            {isLoading ? "En cours de chargement..." : "Creer mon compte"}
                        </button>
                        </div>
                    </form>
               </div>
               <br />
               <br />
               <br />
           </div>
        </div>
    );
}

export default Inscription;