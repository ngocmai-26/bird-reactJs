import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../../assets/img/admin/logo_bird.png";
import { Link } from "react-router-dom";
import "../../../core/components/css/ClientFont.css";
import "../../../core/components/css/ClientLayout.css";
import userNavModel from "../../../models/UserNavModel";
import homeNavModel from "../../../models/HomeNavModel";
import classNames from "classnames";
const ClientLayout = (props) => {
  return (
    <div className="w-100">
      <Container fluid className={"px-0"}>
        {props.children}
      </Container>
    </div>
  );
};
export const ClientNavigate = (props) => {
  const { links } = props;
  return (
    <Navbar expand="md" className={"px-0"}>
      <Navbar.Brand href="#home">
        <img src={logo} alt={"logo"} width={"100%"} height={"100%"} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          {links.map((link) => {
            return (
              <>
                {link.title === "login" ? (
                  <Link
                    className={"text-white px-lg-4 px-3 bg-black"}
                    style={{
                      borderRadius: "10px",
                      textDecoration: "none",
                      fontFamily: "Inter",
                      fontSize: "14px",
                    }}
                    key={link?.id.toString()}
                    to={link?.to}
                  >
                    {link?.title.toUpperCase()}
                  </Link>
                ) : (
                  <Link
                    className={"text-black px-lg-4 px-3"}
                    style={{
                      textDecoration: "none",
                      fontFamily: "Inter",
                      fontSize: "14px",
                    }}
                    key={link?.id.toString()}
                    to={link?.to}
                  >
                    {link?.title.toUpperCase()}
                  </Link>
                )}
              </>
            );
          })}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default ClientLayout;

export const NavBar_Left = () => {
  return (
    <>
      <nav className="navClient__group">
        <div className="menuClient">
          {homeNavModel.links.map((link, index) => {
            return (
              <div className="menuClient__general" key={index.toString()}>
                <ul className="menuClient__list list-unstyled">
                  <li
                    key={index.toString()}
                    onClick={() => {
                      homeNavModel.setActive(link.id);
                      console.log(homeNavModel.active === link?.id);
                    }}
                    className="w-100 py-1 rounded"
                    style={{
                      backgroundColor:
                        homeNavModel.active === link?.id
                          ? "#aba9f0ba"
                          : "transparent",
                    }}
                  >
                    <Link
                      className="nav-link fw-bold py-0"
                      style={{ color: "#0F172A", fontSize: "14px" }}
                    >
                      {link?.title}
                    </Link>
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export const Tournament_Hot = () => {
  return (
    <>
      <div className="navClient__group">
        <div className="menuClient__general">
          <div className="BirdList">
            <h6>C??C GI???I ?????U ??ANG HOT</h6>
            <div className="BirdList__item ">
              <div className="BirdList__item--avatar"></div>
              <div className="BirdList__item--info text-heading14">
                <span>Ch??o m??o A</span>
              </div>
            </div>

            <div className="BirdList__item ">
              <div className="BirdList__item--avatar"></div>
              <div className="BirdList__item--info text-heading14">
                <span>Ch??o m??o A</span>
              </div>
            </div>

            <div className="BirdList__item ">
              <div className="BirdList__item--avatar"></div>
              <div className="BirdList__item--info text-heading14">
                <span>Ch??o m??o A</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const Charts = () => {
  return (
    <div className={classNames("BirdList-Detail BirdList-Detail__ListTour ")}>
      <div className=" Charts BirdList-Detail__item BirdList-Detail__ListTour-item">
        <div className=" Detail__item">
          <div className="Charts__Info">
            <div className="row">
              <div className="col-xl-3">
                <div className="BirdList__item--avatar"></div>
              </div>
              <div className="col-xl-9">
                <div className="text-heading14">
                  <span>Ch??o m??o A</span>
                </div>
                <div className="text-heading14">
                  <span>Ch??o m??o b???ch t???ng</span>
                </div>
                <div className="text-heading14">
                  <span>
                    ?????c ??i???m: C?? nhi???u l??ng, m??u xanh, d??nh cho nh???ng th??? s??n
                    .....
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="Charts__item">
            <div className="row">
              <div className="col-xl-6">
                <div className="Charts__item-text text--heading">
                  <span>C??c gi???i ?????u ???? tham gia</span>
                </div>
                <div className="charts__text">
                  <div className="charts__text--item">
                    <span>Gi???i v?? ?????ch ch??o m??o khu v???c HCM</span>
                  </div>
                  <div className="charts__text--item">
                    <span>Gi???i v?? ?????ch ch??o m??o khu v???c HCM</span>
                  </div>
                  <div className="charts__text--item">
                    <span>Gi???i v?? ?????ch ch??o m??o khu v???c HCM</span>
                  </div>
                  <div className="charts__text--item">
                    <span>Gi???i v?? ?????ch ch??o m??o khu v???c HCM</span>
                  </div>
                  <div className="charts__text--item">
                    <span>Gi???i v?? ?????ch ch??o m??o khu v???c HCM</span>
                  </div>
                  <div className="charts__text--item">
                    <span>Gi???i v?? ?????ch ch??o m??o khu v???c HCM</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="Charts__item-text text--heading">
                  <span>Danh hi???u ???? ?????t ???????c</span>
                </div>
                <div className="charts__text">
                  <div className="charts__text--item">
                    <span>V?? ?????ch gi???i ABC</span>
                  </div>
                  <div className="charts__text--item">
                    <span>V?? ?????ch gi???i ABC</span>
                  </div>
                  <div className="charts__text--item">
                    <span>V?? ?????ch gi???i ABC</span>
                  </div>
                  <div className="charts__text--item">
                    <span>V?? ?????ch gi???i ABC</span>
                  </div>
                  <div className="charts__text--item">
                    <span>V?? ?????ch gi???i ABC</span>
                  </div>
                  <div className="charts__text--item">
                    <span>V?? ?????ch gi???i ABC</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button className="CloseNotifi">X</button>
      </div>
    </div>
  );
};
