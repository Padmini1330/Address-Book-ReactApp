import config from '../config/config';
import AxiosService from './axios-service'

export default class AddressBookService {
    baseUrl = config.baseUrl;
    addContact(data) {
        alert("inside service --- add contact")
        return AxiosService.postService(`${this.baseUrl}addressBook`, data);
    }
}