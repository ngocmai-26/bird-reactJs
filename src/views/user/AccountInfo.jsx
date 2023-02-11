import UserLayout from "../layout/user/UserLayout";
import AvatarAccount from "../../assets/img/user/avatarAccount.png";
import { useState } from "react";
import classNames from "classnames";

function AccountInfo() {

    const [display, setDisplay] = useState(false)
     
  return (
    <UserLayout>
      <section>
        <div className="content">
          <div className="content__header">
            <div className="row">
              <div className="col-xl-12 col-md-12 content__header--title">
                <span className="content__header--title-text">
                  Thông tin tài khoản
                </span>
              </div>
            </div>
          </div>

          <div className="content__bodyAccount">
            <div className="content__bodyAccount--item">
              <div className="bodyAccount--item-Info">
                <div className="row">
                  <div className="col-xl-4">
                    <div className="account__Userinfo--avatar">
                      <img
                        src={AvatarAccount}
                        alt="AvatarAccount"
                        className="avatar__accountUser update--img"
                      />
                    </div>
                  </div>

                  <div className="col-xl-8">
                    <div className="account__Userinfo">
                      <div className="account__Userinfo--name text--heading">
                        <span>Nguyễn Văn A</span>
                      </div>

                      <div className="account__Userinfo--parameter">
                        <div className="row">
                          <div className="account__Userinfo--parameter--item">
                            <div className="text--heading-bold">
                              <span>Số chim</span>
                            </div>
                            <div className="text--number">
                              <span>20</span>
                            </div>
                          </div>

                          <div className="account__Userinfo--parameter--item">
                            <div className="text--heading-bold">
                              <span>Số giải tham gia</span>
                            </div>
                            <div className="text--number">
                              <span>20</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bodyAccount--item-menu">
                  <ul className="bodyAccount__MenuList">
                    <li className="bodyAccount__MenuList--item text--heading ">
                      Tổng quan
                      <span className="text-hr"></span>
                    </li>
                    <li className="bodyAccount__MenuList--item text--heading">
                      Bảo mật
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={classNames({"changeDisplay" : display}, "content__bodyAccount--item content__bodyAccount--item-text")} >
              <div className="content__bodyAccount--heading">
                <div className="row">
                  <div className="col-xl-9 text--heading">
                    Thông tin tài khoản
                  </div>
                  <div className="col-xl-3 updateAccount">
                    <button className="btn--updateAccount">Update</button>
                  </div>
                </div>
              </div>
              <hr />

              <div className="content__bodyAccount--item-body">
                <div className="content__bodyAccount--information">
                  <div className="information--name information--item">
                    <div className="row">
                      <div className="col-xl-5">
                        <span>Username</span>
                      </div>

                      <div className="col-xl-7">anguyena</div>
                    </div>
                  </div>

                  <div className="information--email information--item">
                    <div className="row">
                      <div className="col-xl-5">
                        <span>Email</span>
                      </div>

                      <div className="col-xl-7">Nguyena@gmail.com</div>
                    </div>
                  </div>

                  <div className="information--phone information--item">
                    <div className="row">
                      <div className="col-xl-5">
                        <span>Số điện thoại</span>
                      </div>

                      <div className="col-xl-7">0919782734</div>
                    </div>
                  </div>

                  <div className="information--address information--item">
                    <div className="row">
                      <div className="col-xl-5">
                        <span>Thành phố sinh sống</span>
                      </div>

                      <div className="col-xl-7">TP. HCM</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={classNames({"changeDisplay" : !display}, "content__bodyAccount--item content__bodyAccount--item-text")}>
              <div className="content__bodyAccount--heading">
                <div className="text--heading">Bảo mật</div>
              </div>
              <hr />

              <div className="content__bodyAccount--item-body">
                <div className="content__bodyAccount--information">
                  <div className="information--Email information--item">
                    <div className="row">
                      <div className="col-xl-12">
                        <span>Email</span>
                      </div>

                      <div className="col-xl-7">
                        <div className="securityChange">Nguyena@gmail.com</div>
                      </div>

                      <div className="col-xl-5">
                        <button className="btn--updateAccount">Đổi email</button>
                      </div>
                    </div>
                  </div>

                  <div className="information--Password information--item">
                    <div className="row">
                      <div className="col-xl-12">
                        <span>Mật khẩu</span>
                      </div>

                      <div className="col-xl-7 ">
                        <div className="securityChange">
                          *******************
                        </div>
                      </div>

                      <div className="col-xl-5">
                        <button className="btn--updateAccount">Đổi mật khẩu</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </UserLayout>
  );
}

export default AccountInfo;
