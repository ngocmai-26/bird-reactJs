import { makeAutoObservable } from "mobx";
import { AdminNav } from "../core/utils/Types";
class UserNavModel{
    active

    links = [
        new AdminNav(1,"General","",[],
          [
              new AdminNav(2,"Thông tin tài khoản","/AccountInfo",[],[]),
              new AdminNav(3,"Danh sách chim","/BirdInfo",[],[]),
              new AdminNav(4,"Đăng ký chim","/Admin/Birds",[],[]),
              new AdminNav(5,"Các giải đấu tham gia","/Admin/Users",[],[])
          ]
        ),
    ]

    constructor(){
        makeAutoObservable(this)
        this.setActive(this.links[0].children[0].id)
    }

    setActive = (val)=>{this.active = val}

    
}

const userNavModel = new UserNavModel()
export default userNavModel;