import "../../core/components/css/Auth.css"

const Login = (props)=>{
    return (
        <div className="row m-0 bg main-bg">
            <div className="col-12 col-md-2"></div>
            <div className="col-12 col-md-8 d-flex flex-column justify-content-center align-items-center bg auth-bg" style={{height:"100vh"}}>
                <p className="fs-4 mb-0" style={{fontWeight:"900"}}>Login</p>
                <div style={{width:"55px",height:"4px",backgroundColor:"rgba(0,0,0,0.09)"}} className={"rounded-pill my-1"}></div>
                <div className="my-3"></div>
                <div className="row bg-white rounded shadow pt-4 px-4 px-0 border border-2  mx-auto py-4 w-50-resp">
                    <div className="w-100 row m-0 mt-3 mb-1 px-0 pb-0" style={{borderBottom:"1.2px solid #936A80"}}>
                        <div className="col-10 px-0">
                            <input placeholder="Username" className="input w-100 h-100 fw-bold"/>
                        </div>
                        <div className="col-2 text-end px-0">
                            <span className="far fa-2x fa-user-circle" style={{color:"#936A80"}}></span>
                        </div>
                    </div>
                    <div className="w-100 row mx-0 mt-4 mb-1 px-0 pb-0" style={{borderBottom:".1rem solid #936A80"}}>
                        <div className="col-10 px-0">
                            <input placeholder="Password" className="input w-100 h-100 fw-bold"/>
                        </div>
                        <div className="col-2 text-end px-0">
                            <span className="fa fa-2x fa-lock" style={{color:"#936A80"}}></span>
                        </div>
                    </div>
                    <span  style={{color:"#936A94",fontSize:"12px"}} className="px-0">Forgot password</span>
                    <div className="w-100 my-4 d-flex justify-content-center align-items-center">
                        <button className="btn rounded-pill fw-bold px-5" style={{backgroundColor:'rgba(0,0,0,0.1)',color:"#936A94"}}>Login</button>
                    </div>
                    <p className="fw-bold text-center" style={{fontSize:"10px",color:"#936A94"}}>If you do not have an account, <a>click here</a> to register.</p>
                </div>
            </div>
            <div className="col-12 col-md-2"></div>
        </div>
    )
}

export default Login;