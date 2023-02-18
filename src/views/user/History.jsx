import classNames from "classnames";
import { useState } from "react";
import UserLayout from "../layout/user/UserLayout";

function History() {
  const [notification, setNotification] = useState(true)

  const onNotify = (props) => {
    setNotification(!notification)
  }

  return (
    <>
      <UserLayout>
        <section>
          <div className="content">
            <div className="content__header">
              <div className="row">
                <div className="col-xl-12 col-md-12 content__header--title">
                  <span className="content__header--title-text">
                    Danh sách chim
                  </span>
                </div>
              </div>
            </div>
            <div className="content__bodyAccount">
              <div className="content__bodyAccount--item ">
                <div className="content__table">
                  <table className="table__content table-history">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Các giải đấu đã tham gia</th>
                        <th>Thời gian</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>
                          Giải đấu vô địch chim chào mào mở rộng khu vực HCM -
                          ĐN
                        </td>
                        <td>20/1/2022 - 29/1/2022</td>
                        <td>
                          <button className="btn--Account" onClick={()=> onNotify()}>Detail</button>
                        </td>
                      </tr>

                      <tr>
                        <td>1</td>
                        <td>
                          Giải đấu vô địch chim chào mào mở rộng khu vực HCM -
                          ĐN
                        </td>
                        <td>20/1/2022 - 29/1/2022</td>
                        <td>
                          <button className="btn--Account" onClick={()=> onNotify()}>Detail</button>
                        </td>
                      </tr>

                      <tr>
                        <td>1</td>
                        <td>
                          Giải đấu vô địch chim chào mào mở rộng khu vực HCM -
                          ĐN
                        </td>
                        <td>20/1/2022 - 29/1/2022</td>
                        <td>
                          <button className="btn--Account" onClick={()=> onNotify()}>Detail</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </UserLayout>

      <div className={classNames({NotificationNone: notification}, "BirdList-Detail BirdList-Detail__ListTour")}>
        <div className="BirdList-Detail__item BirdList-Detail__ListTour-item BirdList-Detail__History">
          <div className="Detail__item">
            <div className="text--heading">
              <span>Score Detail</span>
            </div>
            <div className="row">
              <div className="col-xl-3">
                <div className="BirdList__item--avatar"></div>
              </div>

              <div className="col-xl-9">
                <div className="text-heading14">
                  <span>Chào mào A</span>
                </div>
                <div className="text-heading14">
                  <span>Score: 500</span>
                </div>
              </div>
            </div>
            <hr></hr>

            <div className="row">
              <div className="Detail-history--item">
                <button className="btn-Detail-history">Vòng loại</button>
                <div className="text--heading14">
                  <span>Score: 500</span>
                </div>
              </div>

              <div className="Detail-history--item">
                <button className="btn-Detail-history">Top 50</button>
                <div className="text--heading14">
                  <span>Score: 500</span>
                </div>
              </div>

              <div className="Detail-history--item">
                <button className="btn-Detail-history">Top 40</button>
                <div className="text--heading14">
                  <span>Score: 500</span>
                </div>
              </div>

              <div className="Detail-history--item">
                <button className="btn-Detail-history">Top 30</button>
                <div className="text--heading14">
                  <span>Score: 500</span>
                </div>
              </div>

              <div className="Detail-history--item">
                <button className="btn-Detail-history">Top 20</button>
                <div className="text--heading14">
                  <span>Score: 500</span>
                </div>
              </div>

              <div className="Detail-history--item">
                <button className="btn-Detail-history">Top 10</button>
                <div className="text--heading14">
                  <span>Score: 500</span>
                </div>
              </div>

              <div className="Detail-history--item">
                <button className="btn-Detail-history">Chung kết</button>
                <div className="text--heading14">
                  <span>Score: 500</span>
                </div>
              </div>
            </div>
            <hr></hr>
            <div>
              <div className="text--heading Detail-history--trophy">
                <span>Thành tích đạt được</span>
              </div>
              <div className="Detail-history--trophy-item">
                <div className="row">
                  <div className="col-xl-2 Detail-history--trophy-icon">
                    <i class="fa-solid fa-trophy"></i>
                  </div>
                  <div className="col-xl-10">
                    <div className="text--heading">
                      <span>Vô địch giải ABC</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Detail-history--trophy-item">
                <div className="row">
                  <div className="col-xl-2 Detail-history--trophy-icon">
                    <i class="fa-solid fa-trophy"></i>
                  </div>
                  <div className="col-xl-10">
                    <div className="text--heading">
                      <span>Vô địch giải ABC</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button className="CloseNotifi" onClick={() => onNotify()}>X</button>
        </div>
      </div>
    </>
  );
}

export default History;
