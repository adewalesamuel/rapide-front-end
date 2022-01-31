import { get } from './api';

const  ENPOINTS = {
    SOUS_CATEGORIE: 'sous-categories',
};

const getAllPrestation = (id, signal) => {
    return get(`${ENPOINTS.SOUS_CATEGORIE}/${id}/prestations`, signal);
}

const getById = (id, signal) => {
    return get(`${ENPOINTS.SOUS_CATEGORIE}/${id}`, signal);
}

export const SousCategorie = {
    getAllPrestation,
    getById
}