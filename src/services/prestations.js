import { get } from './api';

const  ENPOINTS = {
    PRESTATION: 'prestations',
};

const getAllService = (id, signal) => {
    return get(`${ENPOINTS.PRESTATION}/${id}/services`, signal);
}

const getById = (id, signal) => {
    return get(`${ENPOINTS.PRESTATION}/${id}`, signal);
}

export const Prestation = {
    getAllService,
    getById
}