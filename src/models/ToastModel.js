import { makeAutoObservable } from "mobx";
import { ToastOption } from "../core/utils/Types";

class ToastModel {
    defaultToastOption = new ToastOption(true,'top-end',false,3000,true)
    constructor(){
        makeAutoObservable(this)
    }
    
}
const toastModel = new ToastModel()
export default toastModel;