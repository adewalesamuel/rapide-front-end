import { get } from './api';

const  ENPOINTS = {
    SERVICES: 'services',
};

const getById = (id, signal) => {
    return get(`${ENPOINTS.SERVICES}/${id}`, signal);
}

export const Service = {
    getById
}