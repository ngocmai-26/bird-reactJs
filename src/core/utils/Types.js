///  object constructor

export function UserModel(username,email,password,id){
    this.username = username;
    this.email = email;
    this.password = password;
    this.id = id;
}

const new_user = new UserModel();

//model mapper => hung data tu api reps => type object

// api => json type 


