import axios, { Axios } from "axios"
import { configs } from "../config"
import { AuthData } from "../utils/Types"

class BaseApi{
    headerConfig = {}
    api_token = ""
    getConfig = ()=>{
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

    GET = async(uri,params = {},isConfig,Type)=>{
        try{
            // api.com/user?id=1
            // object processing

            let paramsStr = "/";
            const paramsKeys = Object.keys(params);

            if(paramsKeys.length > 0){
                for(let param of paramsKeys){
                    paramsStr+=param+"="+params[param]+"&"
                }
            }
            
            paramsStr = paramsStr.slice(0,paramsStr.length - 1)
            const reps = await axios.get(`${configs.api_base_uri}${uri}${paramsStr}`,isConfig ?  this.getConfig() : {});
            const result = await reps.data;
            // convert data -> type
            // convert err -> []
            return result ?  result : []
        }catch(e){
            console.log(e)
        }
    }
}

const baseApi = new BaseApi()

export default baseApi;