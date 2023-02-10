import { makeAutoObservable } from "mobx";

class UserModel {

    user = {}
    constructor(){
        makeAutoObservable(this)
    }
    setUser = (val)=>{this.user = val}

}

const userModel = new UserModel()
export default userModel;