import { makeAutoObservable } from "mobx";
import baseApi from "../core/api/BaseApi";
import { configs } from "../core/config";
import { User } from "../core/utils/Types";
class UserModel {
    user = new User()
    constructor(){
        makeAutoObservable(this)
    }
    
    setUser = (user = new User())=>{
        this.user = user;
    }
    mapUser = (userResp)=>{
        const userO = new User(userResp?.id,userResp?.name,userResp?.email,userResp?.password,userResp?.phone,userResp?.address,userResp?.avatarUrl,userResp?.role,userResp?.enable)
        return userO;
    }
    onGetUser = async(token)=>{
        configs.api_token = token;
        baseApi.loadToken()
        const resp = await baseApi.GET("/user/profile",{},true)
        if(Object.keys(resp).length > 0){
            const userO = this.mapUser(resp);
            this.setUser(userO)
        }
    }
}
const userModel = new UserModel()
export default userModel;