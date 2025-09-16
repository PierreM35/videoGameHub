import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'd2f7c263e6c9407eb980dfdf7a97da3d'
    }
});