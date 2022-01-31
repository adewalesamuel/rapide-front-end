import { post } from './api';

const  ENPOINTS = {
    COMMANDE: 'commandes',
};

const create = (payload, signal) => {
    return post(ENPOINTS.COMMANDE, payload, signal);
}


export const Commande = {
    create
};