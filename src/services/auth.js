import { post } from './api';

const  ENPOINTS = {
    LOGIN: 'login',
    REGISTER: 'register',
};

const login = (payload, signal) => {
    return post(ENPOINTS.LOGIN, payload, signal)
}

const register = (payload, signal) => {
    return post(ENPOINTS.REGISTER, payload, signal)
}

export const Auth = {
    login,
    register
}