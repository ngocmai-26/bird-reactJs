import './core/components/css/global.css';
import "@fontsource/poppins";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./core/components/css/global.css"
import './core/components/css/LayoutResponsive.css';
import { useLayoutEffect } from 'react';
import { observer } from 'mobx-react';
import { TOAST, USER_LOGIN_KEY } from './core/utils/Contains';
import AppRouter from './core/navs/AppRoute'
import userModel from './models/UserModel';
import authModel from './models/AuthModel';
import baseApi from './core/api/BaseApi';
import { showToast } from './core/utils/Helper';
import toastModel from './models/ToastModel';

function App() {
  // cookies 
    // check login 
    // neu co cookies o ls => auto login
    const syncLogin = ()=>{
      let userId = JSON.parse(window.localStorage.getItem(USER_LOGIN_KEY));
      if(userId === null || userId?.token === ""){
        return;
      }
      const inf = userId
      userModel.onGetUser(inf.token);
      
      // // process auto login
    }
    useLayoutEffect(()=>{
      // check login
      syncLogin()
    },[])
  ///
  useLayoutEffect(()=>{
    if(userModel.user.email && userModel.user?.email !== ""){
        localStorage.setItem(USER_LOGIN_KEY,JSON.stringify({token:baseApi.api_token}));
        authModel.setIsLogin(true)
        showToast(TOAST.ICON.SUCCESS,"Auto Login Success",toastModel.defaultToastOption)
    }
  },[userModel.user])

  useLayoutEffect(()=>{
    console.log("login : ",authModel.isLogin)
  },[authModel.isLogin])
  return (
    <>
      <AppRouter />
    </>
    
  );
}
export default observer(App);

