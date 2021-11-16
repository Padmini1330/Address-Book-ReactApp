import config from '../config/config';
import AxiosService from './axios-service'

export default class AddressBookService {
    baseUrl = config.baseUrl;
    addContact(data) {
        return AxiosService.postService(`${this.baseUrl}addressBook`, data);
    }
    getAllContacts() {
        return AxiosService.getService(`${this.baseUrl}addressBook`);
    }
    deleteContact(data) {
        return AxiosService.deleteService(`${this.baseUrl}addressBook/`+data);
    }
    getContact(id) {
        return AxiosService.getService(`${this.baseUrl}addressBook/${id}`);
    }
    updateContact(data,id) {
        return AxiosService.putService(`${this.baseUrl}addressBook/${id}`, data);
    }

}