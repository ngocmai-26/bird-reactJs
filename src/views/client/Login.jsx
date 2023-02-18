const Login = (props)=>{
    return (
        <div className="client-header-bg">
            <div className="login">
                <div className="login__title client-title">
                    <span>Login</span>
                </div>

                <div className="login__body client-body">
                    <div className="login__body--group client-group-input">
                        <div className="login__body--group-item ">
                            <input type="text" placeholder="Username" className="login--username login--input" />
                            <i class="fa-regular fa-circle-user icon-size"></i>
                        </div>
                        <div className="login__body--group-item ">
                            <input type="text" placeholder="Password" className="login--password login--input" />
                            <i class="fa-sharp fa-solid fa-lock icon-size"></i>
                        </div>
                        <div className="login__body--group-item login-forgot">
                            <a href="#">Forgot Password</a>
                        </div>

                        <div className="login__body--group--button">
                            <button className="btn-Login">Login</button>
                        </div>

                        <div className="login__body--group-note">
                            <span>
                                If you do not have an account, <a href="#" className="click-here">click here</a>  to register.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;