/// day la layout
import "../../../core/components/css/AdminLayout.css";

import logo from "../../../assets/img/admin/logo_bird.png";
import avatar from "../../../assets/img/admin/avatar_admin.png";
import { Link, Outlet ,useNavigate} from "react-router-dom";
import {useLayoutEffect} from  'react'
export function HeaderAdmin() {
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

export function NavAdmin() {
  return (
      <div className="col-xl-3 col-md-3 col-0 nav">
        <nav className="nav__group">
          <div className="nav--logo">
            <img src={logo} alt="logo" className="logo-img" />
          </div>

          <div className="menu">
            <div className="menu__general">
              <div className="menu--title">GENERAL</div>
              <ul className="menu__list">
                <li className="menu__list--item active text__list--style">
                  <Link to="/" className="text-link menu__list--item-link">
                    Danh sách giải đấu
                  </Link>
                </li>
                <li className="menu__list--item text__list--style">
                  <Link to="/Match" className="text-link menu__list--item-link">
                    Danh sách trận đấu
                  </Link>
                </li>
                <li className="menu__list--item text__list--style">
                  <a href="#" className="text-link menu__list--item-link">
                    Danh sách Bird
                  </a>
                </li>
                <li className="menu__list--item text__list--style">
                  <a href="#" className="text-link menu__list--item-link">
                    Danh sách User
                  </a>
                </li>
              </ul>
            </div>

            <div className="menu__configuration">
              <div className="menu--title">CONFIGURATION</div>
              <ul className="menu__list">
                <li className="menu__list--item text__list--style">
                  <Link to="/Ruler" className="text-link menu__list--item-link">
                    Điều luật
                  </Link>
                </li>
                <li className="menu__list--item text__list--style">
                  <a href="#" className="text-link menu__list--item-link">
                    Cài đặt hệ thống
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
  );
}
const AdminLayout = (props)=>{
  const navigate = useNavigate()
  const user = {
    rule:"admin"
  }
  useLayoutEffect(()=>{
    //check rule here
    // neu la admin 
    if(user.rule !== "admin"){
      navigate("/Home")
    }
  },[])
  return (
      <div className="row">
          <NavAdmin />
          <div className="col-xl-9 col-md-9 tournament">
              <HeaderAdmin />
              {props.children}
          </div>
      </div>
  )
}
export function Search() {
  return (
    <div className="content__search">
      <input
        type="text"
        name="Search"
        placeholder="Search"
        className="content__search--input"
      />
      <label htmlFor="Search" className="content__search--label">
        Keyword
      </label>
      <div className="icon--search">
        <i className="fa-solid fa-chevron-down"></i>
      </div>
    </div>
  );
}
export default AdminLayout;