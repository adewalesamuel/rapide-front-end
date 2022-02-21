
import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import {Services} from '../services';

import { Components } from '../components';

export function Commande(props) {
    const abortController = new AbortController();
    const params = useParams();
    const userType = "client";
    const [searchParams] = useSearchParams();

    let [hasAccount, setHasAccount] = useState(false); 
    let [sousCategories, setSousCategories] = useState([]);
    let [prestations, setPrestations] = useState([]);
    let [services, setServices] = useState([]);
    let [serviceId, setServiceId] = useState("");
    let [prestationId, setPrestationId] = useState("");
    let [quantite, setQuantite] = useState("");
    let [lieu, setLieu] = useState("");
    let [description, setDescription] = useState("");
    let [step, setStep] = useState(1);
    let [categorie, setCategorie] = useState("");
    let [nomPrenoms, setNomPrenoms] = useState("");
    let [mail, setMail] = useState("");
    let [telephone, setTelephone] = useState("");
    let [password, setPassword] = useState("");
    let [cPassword, setCpassword] = useState("");
    let [nomEntreprise, setNomEntreprise] = useState("");
    let [registreCommerce, setRegistreCommerce] = useState("");
    let [dfe, setDfe] = useState("");
    let [userId, setUserId] = useState("");
    let [isLoading, setIsLoading] = useState(false);
    let [isUrgent, setIsUrgent] = useState(false);
    let [isEntreprise, setIsEntreprise] = useState(false);

    let state = {
        nomEntreprise,
        registreCommerce,
        dfe,
        sousCategories,
        prestations,
        serviceId,
        services,
        prestationId,
        quantite,
        lieu,
        description,
        nomPrenoms,
        telephone,
        mail,
        password,
        cPassword,
        isLoading,
        hasAccount,
        categorie,
        isUrgent,
        isEntreprise
    };
    let method = {
        setNomEntreprise,
        setRegistreCommerce,
        setDfe,
        setPrestationId,
        setPrestations,
        setServices,
        setServiceId,
        setSousCategories,
        setQuantite,
        setLieu,
        setDescription,
        handlePrestationChange,
        handleServiceChange,
        handleSousCategorieChange,
        handleNextClick,
        setNomPrenoms,
        setMail,
        setTelephone,
        setPassword,
        setCpassword,
        handleUserFormSubmit,
        setHasAccount,
        handleCommandeSubmit
    };

    function handleSousCategorieChange(event) {
        event.preventDefault();
        
        const sousCategorieId = event.target.value;

        if (Number.isNaN(parseInt(sousCategorieId))) return;

        Services.SousCategorie.getAllPrestation(sousCategorieId, abortController.signal)
        .then(result => {
            setPrestations(result.data);
            setServices([]);
            setServiceId("");
            setPrestationId("");
            
        })
        .catch(err => console.log(err));
    }

    function handlePrestationChange(event) {
        event.preventDefault();
        
        const prestationId = event.target.value;

        if (Number.isNaN(parseInt(prestationId))) return setPrestationId("");

        setPrestationId(prestationId);

        Services.Prestation.getAllService(prestationId, abortController.signal)
        .then(result => {
            setServices(result.data);
            setServiceId("");
        })
        .catch(err => console.log(err));
    }

    function handleServiceChange(event) {
        event.preventDefault();
        
        const serviceId = event.target.value;

        if (Number.isNaN(parseInt(serviceId))) return setServiceId("");

        setServiceId(serviceId);
    }

    function handleNextClick(event) {
        event.preventDefault();

        if (step === 1 ) {
            if (!serviceId || !lieu || !quantite) 
                return alert("Certains champs n'ont pas été remplis !");

            setStep(2);
        }
    }

    function handleUserFormSubmit(event) {
        event.preventDefault();

        if (!hasAccount) {
            const payload = {
                'nom_prenoms': nomPrenoms,
                'mail': mail,
                'telephone': telephone,
                'password': password,
                'type': userType
            };

            if (password !== cPassword) 
                return alert('Les mots de passe ne correspondent pas !');

            setIsLoading(true);
            Services.Auth.register(JSON.stringify(payload), abortController.signal)
            .then(result => {
                setIsLoading(false);
                setUserId(result.data.id);
                setStep(3);
            })
            .catch(err => {
                setIsLoading(false);
                alert("Une erreur est survenue. Veuillez réessayer");
            });
        } else {
            const payload = {
                'mail': mail,
                'password': password
            };

            setIsLoading(true);
            Services.Auth.login(JSON.stringify(payload), abortController.signal)
            .then(result => {
                setIsLoading(false);
                setUserId(result.data.id);
                setStep(3);
            })
            .catch(err => {
                setIsLoading(false);
                alert("Une erreur est survenue. Veuillez réessayer");
            });
        }
    }
    
    function handleCommandeSubmit(event) {
        event.preventDefault();
        
        const payload = {
            'service_id':serviceId,
            'utilisateur_id':userId,
            'is_urgent': isUrgent,
            quantite,
            lieu,
            description,
        }

        setIsLoading(true);
        Services.Commande.create(JSON.stringify(payload), abortController.signal)
        .then(result => {
            setIsLoading(false);
            setStep(4);
        })
        .catch(err => {
            setIsLoading(false);
            alert("Une erreur est survenue. Veuillez réessayer");
        });
    }

    useEffect(() => {
        if (searchParams.get('service_id') && searchParams.get('lieu') && searchParams.get('quantite')) {
            if (searchParams.get('is_entreprise')) setIsEntreprise(true);

            setServiceId(searchParams.get('service_id'));
            setLieu(searchParams.get('lieu'));
            setQuantite(searchParams.get('quantite'));
            setIsUrgent(true);
            setStep(2);

            Services.Service.getById(searchParams.get('service_id'))
            .then(result => setServices([result.data]))
            .catch(err => console.log(err));
        }

        if (params.id) {
            Services.Categorie.getAllSousCategorie(params.id, abortController.signal)
            .then(result => {
                setSousCategories(result.data)
                Services.Categorie.getById(params.id, abortController.signal)
                .then(result => setCategorie(result.data))
                .catch(err => console.log(err))
            }).catch(err => console.log(err));
        }

        return () => {
            abortController.abort();
        };
        // eslint-disable-next-line
     }, [])

    return (
        <div className="detail-service">

            <div className="description-service">
                {step === 1? 
                 <div className="title-section">
                    <h1>{categorie.nom}</h1>
                    <hr className="underliner" />

                    <p style={{fontSize: "1em"}}>
                        {categorie.description}
                    </p>

                    <p style={{fontSize: "1em"}}>
                        Notre expertise :
                    </p>

                    <ul style={{marginTop: 0, paddingTop: 0, fontSize: '1em'}}>
                        {sousCategories.map((sousCategorie, index) => {
                            return <li key={index}>{sousCategorie.nom}</li>
                        })}
                    </ul>
                </div>
                :null}

                <div className="formulary">
                    <div className="coordinates">
                        {step !== 4 ? <h2>Exprimez le service dont vous avez besoin !</h2> : null}
                        {step === 1 ? <Components.CommandeForm state={state} method={method}/> : null}
                        {step === 2 ? <Components.UserForm state={state} method={method}/> : null}
                        {step === 3 ? <Components.Paiement state={state} method={method}/> : null}
                        {step === 4 ? <Components.CommandeFin state={state} method={method}/> : null}
                    </div>
                </div>
            </div>
        </div>
    );
}