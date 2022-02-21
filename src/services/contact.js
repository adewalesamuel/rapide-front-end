import { post } from './api';

const  ENPOINTS = {
    CONTACT: 'contact',
};

const sendForm = (payload, signal) => {
    return post(ENPOINTS.CONTACT, payload, signal);
}


export const Contact = {
    sendForm
};