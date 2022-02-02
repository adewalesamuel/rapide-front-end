
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {Services as ApiSerivices} from '../services';

import imgRightArrow from '../img/right-arrow.png'

export function Services(props) {
    let [categories, setCategories] = useState([]);

    useEffect(() => {
        const abortController = new AbortController();

        if (categories.length > 0) return;
        ApiSerivices.Categorie.getAll(abortController.signal)
        .then(result => setCategories(result.data))
        .catch(err => console.log(err));

        return () => {
            abortController.abort();
        }
    }, [categories])

    function renderImgFromName(imgName) {
        try {
            const imgSlug = imgName.toLowerCase().replace(/ /g, '_')
            .replace(/é/g, 'e').replace(/ç/g, 'c');
            const img = require('../img/ic_' + imgSlug + '.png');
            return <img className="card-icon" src={img} alt={imgName}/>;
        } catch (error) {
            return null;
        }

    }
    return (
        <div className="presentation-services">

            <div className="service-section">

                <div className="introduction">
                    <h1>Nos Services</h1>
                    <p>Confier vos travaux de réparation domestique à <br /> professionnel qui a de l’expérience.
                    </p>
                </div>

                <div className="service-container">
                    {categories.map((categorie, index) => {
                        return(
                            <div className="service-box" key={index}>
                                {renderImgFromName(categorie.nom)}
                                <p className="card-title">
                                    <Link to={'/commandes/' + categorie.id }>
                                        {categorie.nom}
                                    </Link>
                                </p>
                                <p className="card-detail">
                                    <Link to={'/commandes/' + categorie.id }>
                                        Detail
                                    </Link>
                                </p>
                                <img className="card-next" src={imgRightArrow} alt=""/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}