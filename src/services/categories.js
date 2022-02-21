import { get } from './api';

const  ENPOINTS = {
    CATEGORIE: 'categories',
};

const getAll = signal => {
    // fetch("http://localhost:8000/api/categories", {
    //     headers: {'Accept': 'application/json', 'Content-type': 'application/json'},
    //     cache:"force-cache"
    // })
    // .then(response => response.json())
    // .then(result => {console.log(result); return result})
    return get(ENPOINTS.CATEGORIE, signal);
}

const getAllSousCategorie = (id, signal) => {
    return get(`${ENPOINTS.CATEGORIE}/${id}/sous-categories`, signal);
}


const getById = (id, signal) => {
    return get(`${ENPOINTS.CATEGORIE}/${id}`, signal);
}

export const Categorie = {
    getAll,
    getAllSousCategorie,
    getById
}