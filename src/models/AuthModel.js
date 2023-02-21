import { makeAutoObservable } from "mobx";
import baseApi from "../core/api/BaseApi";
import { TOAST } from "../core/utils/Contains";
import { showToast } from "../core/utils/Helper";
import { AuthData, LoginInfo, RegInfo, User } from "../core/utils/Types";
import toastModel from "./ToastModel";
import userModel from "./UserModel";

class AuthModel{

    isLogin = false;

    // bat buoc phai co
    constructor(){
        makeAutoObservable(this)
    }
    setIsLogin = (val)=>{this.isLogin = val}

    onValidLoginInfo = (email,password)=>{
        if(!email|| email === ""){
            return false;
        }
        if(!password || password === ""){
            return false;
        }
        if(!email.match(/^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/)){
            return false;
        }
        return true;
    }
    onLogin = async(loginInfo = new LoginInfo())=>{
        try{
            console.log(loginInfo)
            // fetch api
            if(this.onValidLoginInfo(loginInfo.email,loginInfo.password)){
                let resp  = await baseApi.getToken(new AuthData(loginInfo.email,loginInfo.password))
                if(!resp){
                    // show toast
                    showToast(TOAST.ICON.ERROR,"Email or password incorrect",toastModel.defaultToastOption)
                    return;
                }
                // fetching user
                let userResp = await baseApi.GET("/user/profile",{},true);
                if(Object.keys(userResp).length > 0){
                    const userO = userModel.mapUser(userResp);
                    userModel.setUser(userO);
                }
                // get User Info
            }else{
                showToast(TOAST.ICON.ERROR,"Auth Information incorrect",toastModel.defaultToastOption)
                // show toast
            }
        }catch(e){
            console.log(e)
        }
    }

    onRegister = async (regInfo)=>{
        try{
            // fetch api
            if(regInfo instanceof RegInfo){

                // send api
                const resp = await baseApi.POST_MESSAGE("/auth/signUp",regInfo,false);
                if(!resp.resp){
                    if(resp.status === 400){
                        showToast(TOAST.ICON.WANING,"This email address is already being used!",toastModel.defaultToastOption)
                        return;
                    }
                    //
                    showToast(TOAST.ICON.WANING,"Something err try later",toastModel.defaultToastOption)
                    return;
                }
                // sure success
                await this.onLogin(new LoginInfo(regInfo.email,regInfo.password))
            }else{
                showToast(TOAST.ICON.ERROR,"Register info incorrect format",toastModel.defaultToastOption)
            }
        }catch(e){

        }
    }
    /// fetching api luon de on len dau

    onAutoLogin = async()=>{
        try{
            // fetch api
        }catch(e){

        }
    }
    
}

const authModel = new AuthModel()
export default authModel;