import {makeAutoObservable} from "mobx";
import AuthService from "../services/AuthService";
import axios from "axios";
import {API_URL} from "../http";

class AuthStore {
    user = {};
    isAuth = false;
    isLoading = false;
    error = false;
    errorMessage = '';

    setError = (bool, message) => {
        this.error = bool;
        this.errorMessage = message;
    }

    setIsAuth = (bool) => {
        this.isAuth = bool;
    }

    setIsLoading = (bool) => {
        this.isLoading = bool;
    }

    setUser = (user) => {
        this.user = user;
    }

    login = async (email, password) => {
        this.setError(false, '');
        try {
            const response = await AuthService.login(email, password);
            localStorage.setItem('token', response.data.accessToken);
            this.setUser(response.data.user);
            this.setIsAuth(true);

        }catch (e) {
            this.setError(true, e.response?.data?.message);
        }
    }

    registration = async (email, password, role, name, lastName) => {
        this.setError(false, '');
        try {
            const response = await AuthService.registration(email, password, role, name, lastName);
            localStorage.setItem('token', response.data.accessToken);
            console.log(response)
            this.setUser(response.data.user);
            this.setIsAuth(true);
        }catch (e) {
            this.setError(true, e.response?.data?.message);
        }

    }

    logout = async (email, password) => {
        try {
            const response = await AuthService.logout();
            localStorage.removeItem('token');
            this.setUser({});
            this.setIsAuth(false);
        }catch (e) {
            console.log(e.response?.data?.message)
        }

    }

    checkIsAuth = async () => {
        this.setIsLoading(true);
        try {
            const response = await axios.get(`${API_URL}/refresh`, {withCredentials: true});
            localStorage.setItem('token', response.data.accessToken);
            this.setUser(response.data.user);
            this.setIsAuth(true);
        }catch (e) {
            console.log(e.response?.data?.message)
        }
        finally {
            this.setIsLoading(false)
        }
    }

    constructor() {
        makeAutoObservable(this);
    }
}


export default new AuthStore();