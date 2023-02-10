/// day la layout
import "../../../core/components/css/AdminLayout.css";

import logo from "../../../assets/img/admin/logo_bird.png";
import avatar from "../../../assets/img/admin/avatar_admin.png";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useLayoutEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { AdminNav } from "../../../core/utils/Types";
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

export function NavAdmin({links,active,handleSetActive}) {
  return (
    <div className="col-xl-3 col-md-3 col-0 nav">
      <nav className="nav__group">
        <div className="nav--logo">
          <img src={logo} alt="logo" className="logo-img" />
        </div>

        <div className="menu">
          {links.map((parent,index)=>{
              return (
                <div key={parent?.id} className="menu__general">
                  <div className="menu--title">{parent?.title}</div>
                  <ul className="menu__list">
                      {parent?.children.length > 0 && 
                        parent?.children.map((val)=>{
                          return (
                            <li key={val?.id} onClick={()=>{handleSetActive(val?.id)}} className={`menu__list--item ${active === val.id ? 'active' : ''} text__list--style`}>
                              <Link key={val?.id} to={val.to} className="text-link menu__list--item-link">
                                {val?.title}
                              </Link>
                            </li>
                          )
                        })
                      }
                  </ul>
                </div>
              )
          })}
        </div>
      </nav>
    </div>
  );
}
const AdminLayout = (props) => {
  const navigate = useNavigate();
  const user = {
    rule: "admin",
  };
  useLayoutEffect(() => {
    //check rule here
    // neu la admin
    if (user.rule !== "admin") {
      navigate("/Home");
    }
  }, []);
  const links = [
    new AdminNav(1,"General","",[],
      [
        new AdminNav(2,"Danh sách giải đấu","/Admin",[],[]),
        new AdminNav(3,"Danh sách trận đấu","/Admin/Match",[],[]),
        new AdminNav(4,"Danh sách Bird","/Admin/Birds",[],[]),
        new AdminNav(5,"Danh sách User","/Admin/Users",[],[])
      ]
    ),
    new AdminNav(6,"CONFIGURATION","",[],[
      new AdminNav(7,"Điều luật","/Admin/Ruler",[],[]),
      new AdminNav(8,"Cài đặt hệ thống","",[],[])
    ])
  ]
  const [active,setActive] = useState(0)
  const handleSetActive = (id)=>{
    console.log(id)
    setActive(id)
  }
  useLayoutEffect(()=>{
    console.log(active)
  },[active])
  return (
    <div className="row">
      <NavAdmin links={links} active={active} handleSetActive={handleSetActive}/>
      <div className="col-xl-9 col-md-9 tournament">
        <HeaderAdmin />
        {props.children}
      </div>
    </div>
  );
};

export function HorizonNavbar() {
  return (
    <div className="Horizontal">
      <Navbar bg="light" variant="light">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#Overview">Overview</Nav.Link>
            <Nav.Link href="#Matches">Matches</Nav.Link>
            <Nav.Link href="#Results">Results</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export function TableContent() {
  return (
    <div className="content__table">
      <table className="table__content">
        <thead>
          <tr>
            <th>Header</th>
            <th>Header</th>
            <th>Header</th>
            <th>Header</th>
            <th>Header</th>
            <th>Header</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
          </tr>

          <tr>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
          </tr>

          <tr>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
          </tr>

          <tr>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
          </tr>

          <tr>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
          </tr>

          <tr>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
          </tr>

          <tr>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
          </tr>

          <tr>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
          </tr>

          <tr>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
          </tr>

          <tr>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
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
