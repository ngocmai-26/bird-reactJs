
import "../../../core/components/css/AdminLayout.css";
import "../../../core/components/css/UserLayout.css";
import logo from "../../../assets/img/admin/logo_bird.png";
import avatar from "../../../assets/img/admin/avatar_admin.png";
import { useLayoutEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import userNavModel from "../../../models/UserNavModel";

export function NavUser() {
  return (
    <div className="col-xl-3 col-md-3 col-0 nav">
      <nav className="nav__group">
        <div className="nav--logo">
          <img src={logo} alt="logo" className="logo-img" />
        </div>

        <div className="menu">
          {userNavModel.links.map((link,index)=>{
            return (
              <div className="menu__general" key={index.toString()}>
                <div className="menu--title">{link?.title}</div>
                <ul className="menu__list list-unstyled">
                  {link.children.length > 0 && link.children.map ((val,index)=>{
                      return(
                        <li key={index.toString()} onClick={()=>{userNavModel.setActive(val.id)}} className="w-100 py-1 rounded" style={{backgroundColor:userNavModel.active === val?.id  ? "#AAAAFF" : 'white'}}>
                        <Link className="nav-link fw-bold py-0" style={{color:"#0F172A",fontSize:"14px"}}>
                          {val?.title}
                        </Link>
                      </li>
                      )
                  })} 
                </ul>
              </div>
            )
          })}
          
        </div>
      </nav>
    </div>
  );
}

export function HeaderUser() {
  return (
    <header className="header">
      <div className="header__group">
        <div className="row header__group--list">
          <div className="col-xl-1 col-md-1 col-1 icon-notify header__group--item">
            <i className="fa-solid fa-bell "></i>
            <div className="dots-red"></div>
          </div>
          <div className="icon-user col-xl-1 col-md-1 col-1 header__group--item">
            <i className="fa-solid fa-user-group"></i>
          </div>
          <div className="account col-xl-1 col-md-1 col-1 header__group--item">
            <img src={avatar} alt="avatar" className="account-img" />
          </div>
        </div>
      </div>
    </header>
  );
}

const UserLayout = (props) => {
  const navigate = useNavigate();
  const user = {
    rule: "user",
  };
  useLayoutEffect(() => {
    //check rule here
    // neu la admin
    if (user.rule !== "user") {
      navigate("/UserHome");
    }
  }, []);
  return (
    <div className="row">
      <NavUser />
      <div className="col-xl-9 col-md-9 tournament">
        <HeaderUser />
        {props.children}
      </div>
    </div>
  );
};

export default observer(UserLayout);
