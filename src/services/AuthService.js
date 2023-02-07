import $api from "../http";

export default class AuthService {
    static async login(email, password) {
        return $api.post('/login', {email, password})
    }

    static async registration(email, password, role, name, lastName) {
        return $api.post('/registration', {email, password, role, name, lastName})
    }

    static async logout() {
        return $api.post('/logout')
    }
}