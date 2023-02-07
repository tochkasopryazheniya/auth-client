import {makeAutoObservable, runInAction, toJS} from "mobx";
import UserService from "../services/UserService";

class UsersStore {
    users = [];

    getUsers = async () => {
        try {
            const response = await UserService.getUsers();
            runInAction(() => {
                this.users = response.data;
            })
            console.log(1)
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    constructor() {
        makeAutoObservable(this)
    }
}

export default new UsersStore();