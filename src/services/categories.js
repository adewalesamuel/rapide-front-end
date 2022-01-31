import { get } from './api';

const  ENPOINTS = {
    CATEGORIE: 'categories',
};

const getAll = signal => {
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