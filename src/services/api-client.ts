import axios, { type AxiosRequestConfig } from 'axios';

export interface FectchResponse<T> {
    count: number;
    results: T[];
}

const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'd2f7c263e6c9407eb980dfdf7a97da3d'
    }
});

class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance
            .get<FectchResponse<T>>(this.endpoint, config)
            .then(res => res.data);
    }
}

export default APIClient;