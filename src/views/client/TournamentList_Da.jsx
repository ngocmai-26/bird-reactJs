import { ClientNav } from "../../core/utils/Types";
import ClientLayout, {
  Charts,
  ClientNavigate,
  NavBar_Left,
  Tournament_Hot,
} from "../layout/client/ClientLayout";
import donor_img1 from "../../assets/img/client/Donors_1.png";
import donor_img2 from "../../assets/img/client/Donor_2.png";
import donor_img3 from "../../assets/img/client/Donor_3.png";
import { createContext, useContext, useState } from "react";
import classNames from "classnames";

export const ThemeContext = createContext({
  detail: "",
  top: "",
  onDisplay: () => {},
});

function TournamentList_Da(props) {
  const links = [
    new ClientNav(1, "match", "/Client/Match"),
    new ClientNav(2, "tournament", "/Client/Tournament"),
    new ClientNav(3, "rule", "/Client/Rule"),
    new ClientNav(4, "BXH", "/Client/BXH"),
    new ClientNav(5, "about", "/Client/About"),
    new ClientNav(6, "login", "/Client/Login"),
  ];

  const [display, setDisplay] = useState({
    TournamentDetail: true,
    Tournament_Top: true,
  });

  const onDisplay = (props) => {
    if (props === "detail") {
      setDisplay(
        (pre) =>
          (pre = {
            ...pre,
            TournamentDetail: !display.TournamentDetail,
            Tournament_Top: true,
          })
      );
    } else if (props === "top") {
      setDisplay(
        (pre) =>
          (pre = {
            ...pre,
            Tournament_Top: !display.Tournament_Top,
          })
      );
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        detail: display.TournamentDetail,
        top: display.Tournament_Top,
        onDisplay: onDisplay,
      }}
    >
      <ClientLayout>
        <div className={"w-100"}>
          <TournamentHeader>
            <ClientNavigate links={links} />
          </TournamentHeader>
        </div>
        <TournamentDetail />
        <Tournament_Top />
      </ClientLayout>
    </ThemeContext.Provider>
  );
}

export default TournamentList_Da;

const TournamentHeader = (props) => {
  return (
    <div className={"row mx-0 w-100 home-header bg client-header-bg px-lg-5"}>
      <div className={"col-12"}>{props.children}</div>

      <div className="row">
        <div className="col-xl-3">
          <NavBar_Left />
          <Tournament_Hot />
        </div>
        <div className="col-xl-9">
          <TournamentSearch />
          <TournamentContent />
        </div>
      </div>
    </div>
  );
};

const TournamentSearch = (props) => {
  return (
    <div className="TournamentSearch">
      <div className="row">
        <div className="col-xl-8">
          <input type="text" className="w-100 TournamentSearch-search" />
        </div>
        <div className="col-xl-2">
          <select id="cars">
            <option value="volvo">Theo t??n</option>
            <option value="saab">Theo gi???i ?????u</option>
          </select>
        </div>
        <div className="col-xl-2">
          <button className="btn-Search">Search</button>
        </div>
      </div>
    </div>
  );
};

const TournamentContent = (props) => {
  const { onDisplay } = useContext(ThemeContext);
  return (
    <div className="ContentTournament">
      <div className="row">
        <div className="col-xl-4 BirdList">
          <div className="BirdList__item ">
            <div className="BirdList__item--avatar"></div>
            <div
              className="BirdList__item--info text-heading14"
              onClick={() => onDisplay("detail")}
            >
              <span>Ch??o m??o A</span>
            </div>
          </div>
        </div>

        <div className="col-xl-4 BirdList">
          <div className="BirdList__item">
            <div className="BirdList__item--avatar"></div>
            <div
              className="BirdList__item--info text-heading14"
              onClick={() => onDisplay("detail")}
            >
              <span>Ch??o m??o A</span>
            </div>
          </div>
        </div>

        <div className="col-xl-4 BirdList">
          <div className="BirdList__item">
            <div className="BirdList__item--avatar"></div>
            <div
              className="BirdList__item--info text-heading14"
              onClick={() => onDisplay("detail")}
            >
              <span>Ch??o m??o A</span>
            </div>
          </div>
        </div>

        <div className="col-xl-4 BirdList">
          <div className="BirdList__item">
            <div className="BirdList__item--avatar"></div>
            <div
              className="BirdList__item--info text-heading14"
              onClick={() => onDisplay("detail")}
            >
              <span>Ch??o m??o A</span>
            </div>
          </div>
        </div>

        <div className="col-xl-4 BirdList">
          <div className="BirdList__item">
            <div className="BirdList__item--avatar"></div>
            <div
              className="BirdList__item--info text-heading14"
              onClick={() => onDisplay("detail")}
            >
              <span>Ch??o m??o A</span>
            </div>
          </div>
        </div>

        <div className="col-xl-4 BirdList">
          <div className="BirdList__item">
            <div className="BirdList__item--avatar"></div>
            <div
              className="BirdList__item--info text-heading14"
              onClick={() => onDisplay("detail")}
            >
              <span>Ch??o m??o A</span>
            </div>
          </div>
        </div>

        <div className="col-xl-4 BirdList">
          <div className="BirdList__item">
            <div className="BirdList__item--avatar"></div>
            <div
              className="BirdList__item--info text-heading14"
              onClick={() => onDisplay("detail")}
            >
              <span>Ch??o m??o A</span>
            </div>
          </div>
        </div>
        <div className="col-xl-4 BirdList">
          <div className="BirdList__item">
            <div className="BirdList__item--avatar"></div>
            <div
              className="BirdList__item--info text-heading14"
              onClick={() => onDisplay("detail")}
            >
              <span>Ch??o m??o A</span>
            </div>
          </div>
        </div>
        <div className="col-xl-4 BirdList">
          <div className="BirdList__item">
            <div className="BirdList__item--avatar"></div>
            <div
              className="BirdList__item--info text-heading14"
              onClick={() => onDisplay("detail")}
            >
              <span>Ch??o m??o A</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TournamentDetail = (props) => {
  const { detail, onDisplay } = useContext(ThemeContext);
  return (
    <div
      className={classNames(
        { NotificationNone: detail },
        "BirdList-Detail BirdList-Detail__ListTour "
      )}
    >
      <div className="BirdList-Detail__item BirdList-Detail__ListTour-item">
        <div className="Detail__item">
          <div className="row">
            <div className="col-xl-6 BirdList-Detail__ListTour-line">
              <div className="row">
                <div className="col-xl-5">
                  <div className="BirdList__item--avatar"></div>
                </div>

                <div className="col-xl-7">
                  <div className="text-heading14">
                    <span>Gi???i ?????u c??p m??? r???ng</span>
                  </div>
                  <div className="text-heading14">
                    <span>?????a ??i???m thi ?????u: HCM</span>
                  </div>
                  <div className="text-heading14">
                    <span>Gi???i t??nh: ?????c</span>
                  </div>
                  <div className="text-heading14">
                    <span>Th??? lo???i: </span>
                  </div>
                  <div className="text-heading14">
                    <span>Th???i gian: 20/9/2021</span>
                  </div>
                </div>
              </div>
              <hr></hr>

              <div className="Detail__item--typeof">
                <div className="Detail__item--heading text-heading14">
                  <span>Th??? th???c thi ?????u</span>
                </div>
                <div className="Detail__item--typeof-board">
                  <div className="row m-0">
                    <div className="col-3  d-flex flex-column justify-content-between align-items-center">
                      <div
                        onClick={() => onDisplay("top")}
                        className="w-100 detail-pointer"
                        style={{
                          backgroundColor: "rgba(0,0,0,0.3)",
                          height: "30px",
                        }}
                      >
                        <p className="text-center fw-bold">Vo??ng Loa??i</p>
                      </div>
                      {/* line */}
                      <div className="py-3 d-flex justify-content-center align-items-center flex-column">
                        <div
                          style={{
                            width: "2px",
                            height: "200px",
                            backgroundColor: "black",
                          }}
                          className={"my-0"}
                        ></div>
                        <span className="fa fa-chevron-down my-0"></span>
                      </div>
                      <div
                        className="w-100 position-relative detail-pointer"
                        style={{
                          backgroundColor: "rgba(0,0,0,0.3)",
                          height: "30px",
                        }}
                      >
                        <div
                          style={{ right: "-40px", top: "-25px" }}
                          className="position-absolute up-rank-line d-flex justify-content-center align-items-center flex-column"
                        >
                          <div
                            style={{
                              width: "2px",
                              height: "50px",
                              backgroundColor: "black",
                            }}
                          ></div>
                          <span className="fa fa-chevron-down my-0 text-center"></span>
                        </div>
                        <p className="text-center fw-bold">TOP 50</p>
                      </div>
                    </div>
                    <div className="col-3 py-5  d-flex flex-column justify-content-between align-items-center">
                      <div
                        onClick={() => onDisplay("top")}
                        className="w-100 position-relative detail-pointer"
                        style={{
                          backgroundColor: "rgba(0,0,0,0.3)",
                          height: "30px",
                        }}
                      >
                        <div
                          style={{
                            right: "-40px",
                            top: "-4px",
                            transform: "rotate(300deg)",
                          }}
                          className="position-absolute up-rank-line d-flex justify-content-center align-items-center flex-column"
                        >
                          <div
                            style={{
                              width: "2px",
                              height: "30px",
                              backgroundColor: "black",
                            }}
                          ></div>
                          <span className="fa fa-chevron-down my-0 text-center"></span>
                        </div>
                        <p className="text-center fw-bold">TOP 30</p>
                      </div>
                      {/* line */}
                      <div className="py-3 d-flex justify-content-center align-items-center flex-column">
                        <span className="fa fa-chevron-up my-0"></span>
                        <div
                          style={{
                            width: "2px",
                            height: "120px",
                            backgroundColor: "black",
                          }}
                          className={"my-0"}
                        ></div>
                      </div>
                      <div
                        className="w-100 position-relative detail-pointer"
                        onClick={() => onDisplay("top")}
                        style={{
                          backgroundColor: "rgba(0,0,0,0.3)",
                          height: "30px",
                        }}
                      >
                        <p className="text-center fw-bold">TOP 40</p>
                      </div>
                    </div>
                    <div className="col-3 my-auto py-5  d-flex flex-column justify-content-between align-items-center">
                      <div className="py-3">
                        <div
                          onClick={() => onDisplay("top")}
                          className="w-100 detail-pointer"
                          style={{
                            backgroundColor: "rgba(0,0,0,0.3)",
                            height: "30px",
                          }}
                        >
                          <p className="text-center fw-bold px-2">TOP 20</p>
                        </div>
                        {/* line */}
                        <div className="py-3 d-flex justify-content-center align-items-center flex-column">
                          <div
                            style={{
                              width: "2px",
                              height: "40px",
                              backgroundColor: "black",
                            }}
                            className={"my-0"}
                          ></div>
                          <span className="fa fa-chevron-down my-0 text-center"></span>
                        </div>
                        <div
                          onClick={() => onDisplay("top")}
                          className="w-100 position-relative detail-pointer"
                          style={{
                            backgroundColor: "rgba(0,0,0,0.3)",
                            height: "30px",
                          }}
                        >
                          <div
                            style={{
                              right: "-50px",
                              top: "-35px",
                              transform: "rotate(240deg)",
                            }}
                            className="position-absolute up-rank-line d-flex justify-content-center align-items-center flex-column"
                          >
                            <div
                              style={{
                                width: "2px",
                                height: "50px",
                                backgroundColor: "black",
                              }}
                            ></div>
                            <span className="fa fa-chevron-down my-0 text-center"></span>
                          </div>
                          <p className="text-center fw-bold px-2">TOP 10</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-3 my-auto py-5  d-flex flex-column justify-content-between align-items-center">
                      <div className="py-3">
                        {/* line */}
                        <div className="py-3 d-flex justify-content-center align-items-center flex-column">
                          <div
                            onClick={() => onDisplay("top")}
                            className="w-100 detail-pointer"
                            style={{
                              backgroundColor: "rgba(0,0,0,0.3)",
                              height: "30px",
                            }}
                          >
                            <p className="text-center fw-bold px-2">
                              Chung k????t
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <hr></hr>
              <div className="Detail__item--Donors">
                <div className="text--heading pb-4">
                  <span>Nh?? t??i tr???</span>
                </div>
                <div className="row">
                  <div className="col-xl-4">
                    <img src={donor_img1} alt="donor_img1" className="w100" />
                  </div>
                  <div className="col-xl-4">
                    <img src={donor_img2} alt="donor_img2" className="w100" />
                  </div>
                  <div className="col-xl-4">
                    <img src={donor_img3} alt="donor_img3" className="w100" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="">
                <div className="Detail__item--heading text-heading14">
                  <span>C??c gi???i ?????u ???? tham gia</span>
                </div>
                <table className="table__content table__detail">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Chim thi ?????u</th>
                      <th>Ch??? s??? h???u</th>
                      <th>Vote</th>
                      <th>H???ng</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Ch??o m??o A</td>
                      <td>Nguy???n V??n A</td>
                      <td>100</td>
                      <td>1</td>
                    </tr>

                    <tr>
                      <td>1</td>
                      <td>Ch??o m??o A</td>
                      <td>Nguy???n V??n A</td>
                      <td>100</td>
                      <td>2</td>
                    </tr>

                    <tr>
                      <td>1</td>
                      <td>Ch??o m??o A</td>
                      <td>Nguy???n V??n A</td>
                      <td>100</td>
                      <td>3</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <button className="CloseNotifi" onClick={() => onDisplay("detail")}>
          X
        </button>
      </div>
    </div>
  );
};

const Tournament_Top = (props) => {
  const { top, onDisplay } = useContext(ThemeContext);
  return (
    <div
      className={classNames(
        { NotificationNone: top },
        "BirdList-Detail BirdList-Detail__ListTour"
      )}
    >
      <div className="BirdList-Detail__item Tournament__detail-top">
        <div className="Detail__item">
          <div className="row">
            <div className="col-xl-5 BirdList-Detail__ListTour-line">
              <div className="row">
                <div className="col-xl-4">
                  <div className="Tournament__detail--avatar">Top 10</div>
                </div>

                <div className="col-xl-8">
                  <div className="text-heading14">
                    <span>?????a ??i???m thi ?????u: HCM</span>
                  </div>
                  <div className="text-heading14">
                    <span>Th???i gian: 20/9/2021</span>
                  </div>
                </div>
              </div>

              <div className="describe">
                <div className="describe--item">
                  <span className="describe--item-heading">M?? t???: </span>
                  Ch??ng t??i s??? b??? tr?? chim thi tr??n 2 s??o thi. M???i b??n 5 ch??
                  chim ???????c s???p x???p theo s??? th??? t??? t??? nh??? ?????n l???n v?? ?????i di???n
                  nhau ????? thi ?????u; Ban gi??m kh???o s??? cho th???i gian ???n ?????nh chim
                  trong v??ng 1 ph??t. Sau khi cho ph??p c??c ngh??? nh??n thay ?????i
                  ch???nh s???a l???ng c???u, th???c ??n, n?????c u???ng theo ?? mu???n. Khi ???n
                  ?????nh xong v?? Ban gi??m kh???o s??? ch???m ?????c l???p theo phi???u ????? ch???n
                  ra 04 ch?? chim v??o v??ng chung k???t, 06 con b??? lo???i ???????c gi???i
                  khuy???n kh??ch (th???i gian ch???m 10 ph??t).
                </div>
              </div>
            </div>
            <div className="col-xl-7">
              <div className="">
                <div className="Detail__item--heading text-heading14">
                  <span>C??c gi???i ?????u ???? tham gia</span>
                </div>
                <table className="table__content table__detail">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Chim thi ?????u</th>
                      <th>Ch??? s??? h???u</th>
                      <th>Score</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Ch??o m??o A</td>
                      <td>Nguy???n V??n A</td>
                      <td>100</td>
                      <td></td>
                    </tr>

                    <tr>
                      <td>1</td>
                      <td>Ch??o m??o A</td>
                      <td>Nguy???n V??n A</td>
                      <td>100</td>
                      <td></td>
                    </tr>

                    <tr>
                      <td>1</td>
                      <td>Ch??o m??o A</td>
                      <td>Nguy???n V??n A</td>
                      <td>100</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <button className="CloseNotifi" onClick={() => onDisplay("top")}>
          X
        </button>
      </div>
    </div>
  );
};
