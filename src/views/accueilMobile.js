import {useState, useEffect} from 'react';
import { Services } from '../services';
import {useNavigate} from 'react-router-dom';

import slide1 from '../img/slide1.jpg';

export function AccueilMobile(props) {
    const abortController = new AbortController();

    const navigate = useNavigate();

    const [categories, setCategories] = useState([]);

    useEffect(() => {
      Services.Categorie.getAll(abortController.signal)
      .then(result => setCategories(result.data))
      .catch(err => console.log(err));

      return () => {
          abortController.abort()
      }
    
    }, []);

    function renderImgFromName(categorie, index) {
        try {
            const imgSlug = categorie.nom.toLowerCase().replace(/ /g, '_')
            .replace(/é/g, 'e').replace(/ç/g, 'c');
            const img = require('../img/icones/ic_' + imgSlug + '.png');

            return (
                <div className={'circle' + (index + 1)} key={index} 
                onClick={event => navigate('/mobile/commandes/' + categorie.id)}>
                    <img src={img} alt={imgSlug} />
                    <h2>{categorie.nom}</h2>
                </div>
            )

        } catch (error) {
            return null;
        }

    }
    
    return (
        <div className='circle-container' style={{marginBottom: "150px"}}>
            <img src={slide1} alt='slide1'/>
            <h1>Nos Services</h1>
            <div className='circle-box'> 
                {categories.map((categorie, index) => {
                    return renderImgFromName(categorie, index)
                    })}     
            </div>
        </div>
    )
}