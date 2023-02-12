import UserLayout from "../layout/user/UserLayout";

function ListTournament() {
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
                <div className="row">
                  <div className="col-xl-4 BirdList">
                    <div className="BirdList__item">
                      <div className="BirdList__item--avatar"></div>
                      <div className="BirdList__item--info text-heading14">
                        <span>Giải đấu mở rộng</span>
                      </div>

                      <div className="BirdList__button">
                        <button className="btn--Account btn-BirdListEdit">
                          Edit
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-4 BirdList">
                    <div className="BirdList__item">
                      <div className="BirdList__item--avatar"></div>
                      <div className="BirdList__item--info text-heading14">
                        <span>Giải đấu mở rộng</span>
                      </div>

                      <div className="BirdList__button">
                        <button className="btn--Account btn-BirdListEdit">
                          Edit
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-4 BirdList">
                    <div className="BirdList__item">
                      <div className="BirdList__item--avatar"></div>
                      <div className="BirdList__item--info text-heading14">
                        <span>Giải đấu mở rộng</span>
                      </div>

                      <div className="BirdList__button">
                        <button className="btn--Account btn-BirdListEdit">
                          Edit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </UserLayout>

      <div className="BirdList-Detail NotificationNone">
        <div className="row Notification-item-group NotificationAccount">
          <div className="col-xl-12 Notification-item-group-col NotificationAccount-Success">
            <div className="content__tour--general">
              <div className="content__tour--general-heading">
                <span>
                  Bạn chắc chắn muốn hủy đăng kí Chim Chào Mào A khỏi giải đấu ?
                </span>
              </div>
              <div className="content__tour-general-group">
                <button className="btn--Account">Hủy</button>
                <button className="btn--Account btn-save">Xác nhận</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="BirdList-Detail BirdList-Detail__ListTour">
        <div className="BirdList-Detail__item BirdList-Detail__ListTour-item">
          <div className="Detail__item">
            <div className="row">
              <div className="col-xl-6">
                <div className="row">
                  <div className="col-xl-5">
                    <div className="BirdList__item--avatar"></div>
                  </div>

                  <div className="col-xl-7">
                    <div className="text-heading14">
                      <span>Giải đấu cúp mở rộng</span>
                    </div>
                    <div className="text-heading14">
                      <span>Địa điểm thi đấu: HCM</span>
                    </div>
                    <div className="text-heading14">
                      <span>Giới tính: Đực</span>
                    </div>
                    <div className="text-heading14">
                      <span>Thể loại: </span>
                    </div>
                    <div className="text-heading14">
                      <span>Thời gian: 20/9/2021</span>
                    </div>
                  </div>
                </div>
                <hr></hr>

                <div className="Detail__item--typeof">
                  <div className="Detail__item--heading text-heading14">
                    <span>Thể thức thi đấu</span>
                  </div>
                  <div className="Detail__item--typeof-board">
                    <div className="row">
                      <div className="col-xl-3">
                        <button className="btn-Detail-typeof">Vòng loại</button>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-3"></div>
                      <div className="col-xl-2">
                        <button className="btn-Detail-typeof">Top 30</button>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-xl-6"></div>
                      <div className="col-xl-2">
                        <button className="btn-Detail-typeof">Top 20</button>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-xl-9"></div>
                      <div className="col-xl-3">
                        <button className="btn-Detail-typeof">Chung kết</button>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-xl-6"></div>
                      <div className="col-xl-2">
                        <button className="btn-Detail-typeof">Top 10</button>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-3"></div>
                      <div className="col-xl-2">
                        <button className="btn-Detail-typeof">Top 40</button>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-xl-3">
                        <button className="btn-Detail-typeof">Top 50</button>
                      </div>
                    </div>

                    <div className="line--round">
                      <div className="line--round-icon">
                        <i class="fa-solid fa-chevron-down"></i>
                      </div>
                    </div>
                    <div className="line--round1">
                      <div className="line--round-icon">
                        <i class="fa-solid fa-chevron-up"></i>
                      </div>
                    </div>
                    <div className="line--round2">
                      <div className="line--round-icon">
                        <i class="fa-solid fa-chevron-down"></i>
                      </div>
                    </div>
                    <div className="line--round3"></div>
                    <div className="line--round4"></div>
                    <div className="line--round5"></div>
                    <div className="line--round6"></div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="">
                  <div className="Detail__item--heading text-heading14">
                    <span>Các giải đấu đã tham gia</span>
                  </div>
                  <div className="row">
                    <div className="col-xl-6">
                      <div className="BirdList__item">
                        <div className="BirdList__item--avatar"></div>
                        <div className="BirdList__item--info text-heading14">
                          <span>Giải vô địch chào mào khi vực HCM</span>
                        </div>
                      </div>
                      <div className="btn-Cancel">
                        <button className="btn--Account ">Hủy Thi Đấu</button>
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="BirdList__item">
                        <div className="BirdList__item--avatar"></div>
                        <div className="BirdList__item--info text-heading14">
                          <span>Giải vô địch chào mào khi vực HCM</span>
                        </div>
                      </div>
                      <div className="btn-Cancel">
                        <button className="btn--Account ">Hủy Thi Đấu</button>
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="BirdList__item">
                        <div className="BirdList__item--avatar"></div>
                        <div className="BirdList__item--info text-heading14">
                          <span>Giải vô địch chào mào khi vực HCM</span>
                        </div>
                      </div>
                      <div className="btn-Cancel">
                        <button className="btn--Account ">Hủy Thi Đấu</button>
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="BirdList__item">
                        <div className="BirdList__item--avatar"></div>
                        <div className="BirdList__item--info text-heading14">
                          <span>Giải vô địch chào mào khi vực HCM</span>
                        </div>
                      </div>
                      <div className="btn-Cancel">
                        <button className="btn--Account ">Hủy Thi Đấu</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button className="CloseNotifi">X</button>
        </div>
      </div>
    </>
  );
}

export default ListTournament;
