import config from '../config/config';
import AxiosService from './axios-service'

export default class AddressBookService {
    baseUrl = config.baseUrl;
    addContact(data) {
        return AxiosService.postService(`${this.baseUrl}create`, data);
    }
    getAllContacts() {
        return AxiosService.getService(`${this.baseUrl}`);
    }
    deleteContact(data) {
        return AxiosService.deleteService(`${this.baseUrl}delete/`+data);
    }
    getContact(id) {
        return AxiosService.getService(`${this.baseUrl}get/${id}`);
    }
    updateContact(data,id) {
        return AxiosService.putService(`${this.baseUrl}update/${id}`, data);
    }

}