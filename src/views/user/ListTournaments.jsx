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
                      <div className="row m-0">
                        <div className="col-3  d-flex flex-column justify-content-between align-items-center">
                            <div className="w-100" style={{backgroundColor:"rgba(0,0,0,0.3)" ,height:"30px"}}>
                              <p className="text-center fw-bold">Vòng Loại</p>
                            </div>
                            {/* line */}
                            <div className="py-3 d-flex justify-content-center align-items-center flex-column">
                              <div style={{width:'2px',height:"200px",backgroundColor:"black"}} className={"my-0"}></div>
                              <span className="fa fa-chevron-down my-0"></span>
                            </div>
                            <div className="w-100 position-relative" style={{backgroundColor:"rgba(0,0,0,0.3)" ,height:"30px"}}>
                              <div  style={{right:"-40px",top:"-25px"}} className="position-absolute up-rank-line d-flex justify-content-center align-items-center flex-column">
                                <div style={{width:'2px',height:"50px",backgroundColor:"black"}}></div>
                                <span className="fa fa-chevron-down my-0 text-center"></span>
                              </div>
                              <p className="text-center fw-bold">TOP 50</p>
                            </div>
                        </div>
                        <div className="col-3 py-5  d-flex flex-column justify-content-between align-items-center">
                            <div className="w-100 position-relative" style={{backgroundColor:"rgba(0,0,0,0.3)" ,height:"30px"}}>
                            <div style={{right:"-40px",top:"-4px",transform:"rotate(300deg)"}} className="position-absolute up-rank-line d-flex justify-content-center align-items-center flex-column">
                                  <div style={{width:'2px',height:"30px",backgroundColor:"black"}}></div>
                                  <span className="fa fa-chevron-down my-0 text-center"></span>
                                </div>
                              <p className="text-center fw-bold">TOP 30</p>
                            </div>
                            {/* line */}
                            <div className="py-3 d-flex justify-content-center align-items-center flex-column">
                            <span className="fa fa-chevron-up my-0"></span>
                              <div style={{width:'2px',height:"120px",backgroundColor:"black"}} className={"my-0"}></div>
                            </div>
                            <div className="w-100 position-relative" style={{backgroundColor:"rgba(0,0,0,0.3)" ,height:"30px"}}>
                              <p className="text-center fw-bold">TOP 40</p>
                            </div>
                        </div>
                        <div className="col-3 my-auto py-5  d-flex flex-column justify-content-between align-items-center">
                            <div className="py-3">
                              <div className="w-100" style={{backgroundColor:"rgba(0,0,0,0.3)" ,height:"30px"}}>
                                <p className="text-center fw-bold px-2">TOP 20</p>
                              </div>
                              {/* line */}
                              <div className="py-3 d-flex justify-content-center align-items-center flex-column">
                                <div style={{width:'2px',height:"40px",backgroundColor:"black"}} className={"my-0"}></div>
                                <span className="fa fa-chevron-down my-0 text-center"></span>
                              </div>
                              <div className="w-100 position-relative" style={{backgroundColor:"rgba(0,0,0,0.3)" ,height:"30px"}}>
                                <div style={{right:"-50px",top:"-35px",transform:"rotate(240deg)"}} className="position-absolute up-rank-line d-flex justify-content-center align-items-center flex-column">
                                  <div style={{width:'2px',height:"50px",backgroundColor:"black"}}></div>
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
                                <div className="w-100" style={{backgroundColor:"rgba(0,0,0,0.3)" ,height:"30px"}}>
                                  <p className="text-center fw-bold px-2">Chung kết</p>
                                </div>
                              </div>
                            </div>
                        </div>
                      </div>
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
