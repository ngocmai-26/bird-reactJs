import { useLayoutEffect, useState } from "react";
import { LoginInfo } from "../../core/utils/Types";
import authModel from "../../models/AuthModel";
import {observer} from 'mobx-react'
import { showToast } from "../../core/utils/Helper";
import toastModel from "../../models/ToastModel";
import { EMAIL_REGEX, TOAST } from "../../core/utils/Contains";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
const Login = (props)=>{
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const [loading,setLoading] = useState(false)
    const handleLogin =async ()=> {
        if(loading){
            return;
        }
        if(!email || email === ""){
            showToast(TOAST.ICON.ERROR,"Email can not null",toastModel.defaultToastOption)
            return;
        }
        if(!password || password === ""){
            showToast(TOAST.ICON.ERROR,"Password can not null",toastModel.defaultToastOption)
            return;
        }

        if(!email.match(EMAIL_REGEX)){
            showToast(TOAST.ICON.ERROR,"Email incorrect format",toastModel.defaultToastOption)
            
            return;
        }

        setLoading(true)
        setTimeout(async()=>{
            await authModel.onLogin(new LoginInfo(email,password));
            setLoading(false)
        },500)
    }
    const nav = useNavigate()
    useLayoutEffect(()=>{
        if(authModel.isLogin){
            nav("/")
        }
    },[authModel.isLogin])
    return (
        <div className="client-header-bg">
            <div className="login">
                <div className="login__title client-title">
                    <span>Login</span>
                </div>

                <div className="login__body client-body">
                    <div className="login__body--group client-group-input">
                        <div className="login__body--group-item ">
                            <input onInput={(e)=>{
                                setEmail(e.target.value)
                            }} type="text" placeholder="Username" className="login--username login--input" />
                            <i className="fa-regular fa-circle-user icon-size"></i>
                        </div>
                        <div className="login__body--group-item ">
                            <input onInput={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Password" className="login--password login--input" />
                            <i className="fa-sharp fa-solid fa-lock icon-size"></i>
                        </div>
                        <div className="login__body--group-item login-forgot">
                            <a href="#">Forgot Password</a>
                        </div>

                        <div className="login__body--group--button">
                            <button onClick={handleLogin} className="btn-Login">
                                {loading ? 
                                    <div className="spinner-border spinner-border-sm" role="status"></div>
                                    :"Login"    
                                }
                            </button>
                        </div>  

                        <div className="login__body--group-note">
                            <span>
                                If you do not have an account, <Link to={'/Register'} > click here</Link>  to register.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default observer(Login);