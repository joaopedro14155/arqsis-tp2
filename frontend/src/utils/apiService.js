import config from '../config';
import axios from "axios";

class apiService {
    constructor() {
        this.base_url = config.apiUrl;
        let service = axios.create({
            //headers: {Auth: 'token'}
            //headers: {'Content-Type': 'multipart/form-data'}
        });

        service.interceptors.response.use(this.handleSuccess, this.handleError);
        this.service = service;
    }

    getCheckIns = (callback) => {
        return this.service.get(this.base_url+'parques/check-in').then(
            (response) => callback(response.data)
        );
    }

    getPrices = (callback, search = '') => {
        return this.service.get(this.base_url+'prices',  {
            params: {
              description: search
            }
          }).then(
            (response) => callback(response.data)
        );
    }
}

export default new apiService;