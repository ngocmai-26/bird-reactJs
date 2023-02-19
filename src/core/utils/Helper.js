// 1 model = 1 class
import Swal from "sweetalert2";
import { USER_LOGIN_KEY } from "./Contains";


export const showToast = (icon,title,options)=>{
    const Toast = Swal.mixin({...options})
      Toast.fire({
        icon: icon,
        title: title
      })
}
export const checkCookies = ()=>{
    return localStorage.getItem(USER_LOGIN_KEY)!==null;
}