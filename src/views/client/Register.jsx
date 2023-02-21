import { useState } from "react";
import { EMAIL_REGEX, TOAST } from "../../core/utils/Contains";
import { showToast } from "../../core/utils/Helper";
import authModel from "../../models/AuthModel";
import toastModel from "../../models/ToastModel";
import { RegInfo } from "../../core/utils/Types";
const Register = (props) => {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [confirmPass,setConfirmPass] = useState("")
  const [address,setAddress] = useState("")
  const [phone,setPhone] = useState("")
  const [username,setUsername] = useState()
  const [loading,setLoading] = useState()
  const handleRegister = async()=>{
    // valid

    if(loading){
      return;
    }
    if(!email.match(EMAIL_REGEX) || email === ""){
      showToast(TOAST.ICON.ERROR,"Email not null or incorrect format",toastModel.defaultToastOption);
      return;
    }
    if(username===""){
      showToast(TOAST.ICON.ERROR,"Username not null",toastModel.defaultToastOption);
      return;
    }
    if(phone === "" || phone.length !== 10){
      showToast(TOAST.ICON.ERROR,"Phone incorrect format",toastModel.defaultToastOption);
      return;
    }

    if(password === "" || password.length < 8){
      showToast(TOAST.ICON.ERROR,"Password incorrect format",toastModel.defaultToastOption);
      return;
    }
    if(password!==confirmPass){
      showToast(TOAST.ICON.ERROR,"Confirm password not matched",toastModel.defaultToastOption);
      return;
    }

    if(address===""){
      showToast(TOAST.ICON.ERROR,"Address not null",toastModel.defaultToastOption);
      return;
    }

    // valid
    setLoading(true)
    setTimeout(async()=>{
      const regIf = new RegInfo(username,email,password,phone,address);
      await authModel.onRegister(regIf);
      setLoading(false)
    },500)
  }

  return (
    <div className="client-header-bg">
      <div className="register">
        <div className="register__title client-title">
          <span>Register</span>
        </div>

        <div className="register__body client-body">
          <div className="register__body--group client-group-input">
            <div className="register__body--group-item">
              <div className="tour--info">
                <input
                onChange={(e)=>{
                  setUsername(e.target.value)
                }}
                  type="text"
                  name="Username"
                  placeholder="Username"
                  className="tour--info-input"
                />
                <label htmlFor="Username" className="tour--info-label">
                  Username
                </label>
              </div>
            </div>

            <div className="register__body--group-item">
              <div className="tour--info">
                <input
                 onChange={(e)=>{
                  setEmail(e.target.value)
                }}
                  type="text"
                  name="Email"
                  placeholder="Email"
                  className="tour--info-input"
                />
                <label htmlFor="Email" className="tour--info-label">
                  Email
                </label>
              </div>
            </div>

            {/* <div className="register__body--group-item">
              <div className="row">
                <div className="col-xl-6">
                  <div className="tour--info">
                    <input
                      type="text"
                      name="FirstName"
                      placeholder="First name"
                      className="tour--info-input"
                    />
                    <label htmlFor="FirstName" className="tour--info-label">
                      First name
                    </label>
                  </div>
                </div>

                <div className="col-xl-6">
                  <div className="tour--info">
                    <input
                      type="text"
                      name="LastName"
                      placeholder="Last name"
                      className="tour--info-input"
                    />
                    <label htmlFor="LastName" className="tour--info-label">
                      Last name
                    </label>
                  </div>
                </div>
              </div>
            </div> */}

            <div className="register__body--group-item">
              <div className="tour--info">
                <input
                 onChange={(e)=>{
                  setPhone(e.target.value)
                }}
                  type="tel"
                  name="Phone"
                  placeholder="Phone"
                  className="tour--info-input"
                />
                <label htmlFor="Phone" className="tour--info-label">
                  Phone
                </label>
              </div>
            </div>

            <div className="register__body--group-item">
              <div className="tour--info">
                <input
                 onChange={(e)=>{
                  setPassword(e.target.value)
                }}
                  type="password"
                  name="Confirm"
                  placeholder="password"
                  className="tour--info-input"
                />
                <label htmlFor="Confirm" className="tour--info-label">
                  Password
                </label>
              </div>
            </div>
            <div className="register__body--group-item">
              <div className="tour--info">
                <input
                 onChange={(e)=>{
                  setConfirmPass(e.target.value)
                }}
                  type="password"
                  name="Confirm"
                  placeholder="Confirm password"
                  className="tour--info-input"
                />
                <label htmlFor="Confirm" className="tour--info-label">
                  Confirm password
                </label>
              </div>
            </div>

            {/* <div className="register__body--group-item">
              <div className="tour--info">
                <input
                  type="date"
                  name="Birthday"
                  placeholder="Birthday"
                  className="tour--info-input"
                />
                <label htmlFor="Birthday" className="tour--info-label">
                  Birthday
                </label>
              </div>
            </div> */}

            <div className="register__body--group-item">
              <div className="tour--info">
                <input
                   onChange={(e)=>{
                    setAddress(e.target.value)
                  }}
                  type="text"
                  name="Address"
                  placeholder="Address"
                  className="tour--info-input"
                />
                <label htmlFor="Address" className="tour--info-label">
                  Address
                </label>
              </div>
            </div>

            <div className="register__body--group--button">
              <button className="btn-register" onClick={handleRegister}>
                  {loading ? 
                    <div className="spinner-border spinner-border-sm" role="status"></div>
                    :"Register"    
                  }
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
