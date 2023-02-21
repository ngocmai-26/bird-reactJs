///  object constructor

export function UserModel(username,email,password,id){
    this.username = username;
    this.email = email;
    this.password = password;
    this.id = id;
}
export function AuthData(email,password){
    this.email = email;
    this.password = password;
}
export function ClientNav(id,title,to,params = {}){
   this.id = id;
   this.title = title;
   this.to = to;
   this.params = params;
}
export function AdminNav(id,title,to,params,children){
    this.id = id;
    this.title = title;
    this.to = to;
    this.params = params;
    this.children = children;
}
export function User(id,name,email,password,phone,address,avatar,role,active){
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.phone = phone;
    this.address = address;
    this.avatar = avatar;
    this.role = role;
    this.active = active;
}
export function LoginInfo(email,password){
    this.email = email;
    this.password = password;
}
export function ToastOption(toast = true,position,showConfirmButton,timer,timerProgressBar){
    this.toast = toast;
    this.position = position;
    this.showConfirmButton = showConfirmButton;
    this.timer = timer;
    this.timerProgressBar = timerProgressBar;
}
export function AuthToken(token){
    this.token = token;
}
export function RegInfo(name,email,password,phone,address){
    this.name = name;
    this.email = email;
    this.password = password;
    this.phone = phone;
    this.address = address;
}

