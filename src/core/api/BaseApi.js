import axios, { Axios } from "axios"
import { configs } from "../config"
import { AuthData } from "../utils/Types"

class BaseApi{
    headerConfig = {}
    api_token = ""
    //
    getConfig = ()=>{
        // config token
        return {
            headers:{
                Authorization: 'Bearer ' + this.api_token
            }
        }
    }

    refreshToken = async()=>{

    }

    loadToken  = ()=>{
        this.api_token = configs.api_token;
    }

    getToken = async(authData)=>{
    
        if(authData instanceof AuthData){
        
            let resp = await this.POST("/auth/signIn",authData)
            if(resp?.token){
                configs.api_token = resp.token;
                this.loadToken()
                return true;
            }
        }else{
            console.log("Data Incorrect Type")
        }
        return false;
    }
    
    POST = async (uri,params = {},isConfig)=>{
        try{
            const resp = await axios.post(`${configs.api_base_uri}${uri}`,params,isConfig ? this.getConfig() : {});
            if(resp.status === 200){
                const result = resp.data;
                return result ? result : [];
            }
            return false;
        }catch(e){
            return false;   
        }
    }
    POST_MESSAGE = async (uri,params = {},isConfig)=>{
        try{
            const resp = await axios.post(`${configs.api_base_uri}${uri}`,params,isConfig ? this.getConfig() : {});
            if(resp.status === 200){
                const result = resp.data;
                return result ? result : [];
            }
            return {resp:false,status:resp.status};
        }catch(e){
            return {resp:false,message:e,status:e?.response?.status};   
        }
    }

    GET = async(uri,params = {},isConfig,isPath = false)=>{
        try{
            // api.com/user?id=1
            // object processing

            let paramsStr = isPath ? "/" : "?";
            //api.demo.com/user/1
            // api.demo.com.user?id=1
            // {id:1,name:"khanh"}
            // ['id','name']
            const paramsKeys = Object.keys(params);
            if(paramsKeys.length > 0){
                for(let param of paramsKeys){
                    paramsStr+=param+"="+params[param]+"&"
                }
            }
            // id=1&name=khanh&
            paramsStr = paramsStr.slice(0,paramsStr.length - 1)
            // id=1&name=khanh
            // api.demo.com
            // /user
            // ?id=1&name=khanh
            // api.demo.com/user?id=1&name=khanh
            const reps = await axios.get(`${configs.api_base_uri}${uri}${paramsStr}`,isConfig ?  this.getConfig() : {});
            if(reps.status === 200){
                const result = await reps.data;
                // convert data -> type
                // convert err -> []
                return result ?  result : []
            }
            return false;
        }catch(e){
            console.log(e)
            return false;
        }
    }
}

const baseApi = new BaseApi()

export default baseApi;