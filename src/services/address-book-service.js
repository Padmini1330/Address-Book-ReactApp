import config from '../config/config';
import AxiosService from './axios-service'

export default class AddressBookService {
    baseUrl = config.baseUrl;
    addContact(data) {
        alert("inside service")
        return AxiosService.postService(`${this.baseUrl}addressBook`, data);
    }
    getAllContacts() {
        return AxiosService.getService(`${this.baseUrl}addressBook`);
    }
}