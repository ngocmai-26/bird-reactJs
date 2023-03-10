import UserLayout from "../layout/user/UserLayout";
import AvatarAccount from "../../assets/img/user/avatarAccount.png";
import { useState } from "react";
import classNames from "classnames";

function AccountInfo() {
  const [display, setDisplay] = useState({
    overview: false,
    security: true,
    update: true

  });
  const [NotificationNone, setNotificationNone] = useState(false);
  const [notification, setNotification] = useState({
    Notify: true,
    NotificationUpdate: true,
    NotificationResetPassword: true,
  });


  const Notify = (props) => {
    // if(props === "update") {
      // setNotification((pre) =>
      // (pre = {
      //   ...pre,
      //   NotificationUpdate: !notification.NotificationUpdate,
      // }),)
    // } else if(props === "reset") {
    //   setNotification((pre) =>
    //   (pre = {
    //     ...pre,
    //     NotificationResetPassword: !notification.NotificationResetPassword,
    //   }),)
    // } else if(props === "notify") {
    //   setNotification((pre) =>
    //   (pre = {
    //     ...pre,
    //     Notify: !notification.Notify,
    //   }),)
    // }

  }

  const onDisplay = (props) => {
    
    if(props==="overview") {
      setDisplay((pre) =>
      (pre = {
        ...pre,
        overview: false,
        security: true,
        update: true
      }),)
    } else if(props==="security") {
      setDisplay((pre) =>
      (pre = {
        ...pre,
        overview: true,
        security: false,
        update: true
      }),)
    }else if(props==="update") {
      setDisplay((pre) =>
      (pre = {
        ...pre,
        overview: true,
        security: true,
        update: false
      }),)
    }
  }

  const onSuccess = (props) => {
    setNotificationNone(!NotificationNone);
  };

  const onChangeDisplay = (props) => {
    console.log(props)
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
                    Th??ng tin t??i kho???n
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
                          <span>Nguy???n V??n A</span>
                        </div>

                        <div className="account__Userinfo--parameter">
                          <div className="row">
                            <div className="account__Userinfo--parameter--item">
                              <div className="text--heading-bold">
                                <span>S??? chim</span>
                              </div>
                              <div className="text--number">
                                <span>20</span>
                              </div>
                            </div>

                            <div className="account__Userinfo--parameter--item">
                              <div className="text--heading-bold">
                                <span>S??? gi???i tham gia</span>
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
                      <li className="bodyAccount__MenuList--item text--heading " onClick={()=>onDisplay("overview")}>
                        T???ng quan
                        <span className={classNames({display: display.overview},"text-hr")}></span>
                        <span className={classNames({display: display.update},"text-hr")}></span>
                      </li>
                      <li className="bodyAccount__MenuList--item text--heading" onClick={()=>onDisplay("security")}>
                        B???o m???t
                        <span className={classNames({display: display.security},"text-hr")}></span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={classNames({display: display.overview }, "content__bodyAccount--item content__bodyAccount--item-text")}>
                <div className="content__bodyAccount--heading">
                  <div className="row">
                    <div className="col-xl-9 text--heading">
                      Th??ng tin t??i kho???n
                    </div>
                    <div className="col-xl-3 updateAccount">
                      <button className="btn--Account"  onClick={()=>onDisplay("update")}>Update</button>
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
                          <span>S??? ??i???n tho???i</span>
                        </div>

                        <div className="col-xl-7">0919782734</div>
                      </div>
                    </div>

                    <div className="information--address information--item">
                      <div className="row">
                        <div className="col-xl-5">
                          <span>Th??nh ph??? sinh s???ng</span>
                        </div>

                        <div className="col-xl-7">TP. HCM</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={classNames({display: display.security },"content__bodyAccount--item content__bodyAccount--item-text")}>
                <div className="content__bodyAccount--heading">
                  <div className="text--heading">B???o m???t</div>
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
                          <div className="securityChange">
                            Nguyena@gmail.com
                          </div>
                        </div>

                        <div className="col-xl-5">
                          <button className="btn--Account">?????i email</button>
                        </div>
                      </div>
                    </div>

                    <div className="information--Password information--item">
                      <div className="row">
                        <div className="col-xl-12">
                          <span>M???t kh???u</span>
                        </div>

                        <div className="col-xl-7 ">
                          <div className="securityChange">
                            *******************
                          </div>
                        </div>

                        <div className="col-xl-5">
                          <button className="btn--Account">?????i m???t kh???u</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={classNames({display: display.update },"content__bodyAccount--item content__bodyAccount--item-text")}>
                <div className="content__bodyAccount--heading">
                  <div className="text--heading">Th??ng tin t??i kho???n</div>
                </div>
                <hr />

                <div className="content__bodyAccount--item-body">
                  <div className="content__bodyAccount--information">
                    <div className="information--name information--item">
                      <div className="row">
                        <div className="col-xl-5">
                          <span>Username</span>
                        </div>

                        <div className="col-xl-7">
                          <input
                            type="text"
                            placeholder="anguyena"
                            name="username"
                            className="information--item-input"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="information--phone information--item">
                      <div className="row">
                        <div className="col-xl-5">
                          <span>S??? ??i???n tho???i</span>
                        </div>

                        <div className="col-xl-7">
                          <input
                            type="text"
                            placeholder="0919782734"
                            name="phone"
                            className="information--item-input"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="information--address information--item">
                      <div className="row">
                        <div className="col-xl-5">
                          <span>Th??nh ph??? sinh s???ng</span>
                        </div>

                        <div className="col-xl-7">
                          <input
                            type="text"
                            placeholder="TP.HCM"
                            name="address"
                            className="information--item-input"
                          />
                        </div>
                      </div>
                    </div>
                    <hr className="line" />
                    <div className="content__bodyAccount--groupBtn">
                      <div className="row">
                        <div className="groupBtn-cancel groupBtn-item">
                          <button className="btn--Account">Cancel</button>
                        </div>
                        <div className="groupBtn-update groupBtn-item">
                          <button
                            className="btn--Account"
                            onClick={() => onSuccess()}
                          >
                            Update
                          </button>
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
      <div
        className={classNames(
          { NotificationNone: !NotificationNone },
          "Notification NotificationSuccess"
        )}
      >
        <div className="Notification-item ">
          <div className="row Notification-item-group NotificationAccount">
            <div className="col-xl-12 Notification-item-group-col NotificationAccount-Success">
              <div className="content__tour--general">
                <div className="content__tour--general-heading">
                  <span>C???p nh???t th??ng tin th??nh c??ng</span>
                </div>
                <div className="content__tour-general-group">
                  <button className="btn--Account" onClick={() => onSuccess()}>
                    Done
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Notification NotificationNone">
        <div className="Notification-item">
          <div className="row Notification-item-group">
            <div className="col-xl-12 Notification-item-group-col">
              <div className="content__tour--general">
                <div className="content__tour--general-heading text-heading14">
                  <span>?????i m???t kh???u</span>
                </div>
                <div className="content__tour-general-group">
                  <div className="tour--general-group-item">
                    <div className="tour--info">
                      <input
                        type="text"
                        name="Form"
                        placeholder="Form"
                        className="tour--info-input"
                      />
                      <label htmlFor="Form" className="tour--info-label">
                        Form
                      </label>
                    </div>
                  </div>

                  <div className="tour--general-group-item">
                    <div className="tour--info">
                      <input
                        type="text"
                        name="Voice"
                        placeholder="Voice"
                        className="tour--info-input"
                      />
                      <label
                        htmlFor="Voice"
                        className="tour--info-label label-width"
                      >
                        Voice
                      </label>
                    </div>
                  </div>

                  <div className="tour--general-group-item">
                    <div className="tour--info">
                      <input
                        type="text"
                        name="Posture"
                        placeholder="Posture"
                        className="tour--info-input"
                      />
                      <label
                        htmlFor="Posture"
                        className="tour--info-label label-width"
                      >
                        Posture
                      </label>
                    </div>
                  </div>

                  <div className="row tour--detail-group-item">
                    <div className="row">
                      <div className="col-xl-4">
                        <button
                          className="detail-btnCancel detail-text"
                          onClick={() => onSuccess()}
                        >
                          L??u l???i
                        </button>
                      </div>

                      <div className="col-xl-3">
                        <button className="detail-btnSave detail-text">
                          H???y
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Notification NotificationNone">
        <div className="Notification-item Notification-User">
          <div className="row Notification-item-group">
            <div className="col-xl-12 Notification-item-group-col content__notification">
              <div className="content__notification--list">
                <div className="Notification-User-heading text-heading14">Th??ng b??o</div>
                <button className="CloseNotifi">X</button>
                <hr />

                <div className="content__notification--list-item">
                  <div className="list-item-heading ">
                    <div className="row">
                      <div className="col-xl-2">
                        <div className="notificationUser-avatar"></div>
                      </div>
                      <div className="col-xl-10">
                        <div className="notificationUser-info">
                          <div className="text-heading14">
                            C??m ??n b???n ???? ?????ng h??nh
                          </div>
                          <div className="text-time">15/1/2022</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="list-item-content">
                    <div className="list--content-text">
                      <span>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        including versions of Lorem Ipsum.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="content__notification--list-item">
                  <div className="list-item-heading ">
                    <div className="row">
                      <div className="col-xl-2">
                        <div className="notificationUser-avatar"></div>
                      </div>
                      <div className="col-xl-10">
                        <div className="notificationUser-info">
                          <div className="text-heading14">
                            C??m ??n b???n ???? ?????ng h??nh
                          </div>
                          <div className="text-time">15/1/2022</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="list-item-content">
                    <div className="list--content-text">
                      <span>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        including versions of Lorem Ipsum.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="content__notification--list-item">
                  <div className="list-item-heading ">
                    <div className="row">
                      <div className="col-xl-2">
                        <div className="notificationUser-avatar"></div>
                      </div>
                      <div className="col-xl-10">
                        <div className="notificationUser-info">
                          <div className="text-heading14">
                            C??m ??n b???n ???? ?????ng h??nh
                          </div>
                          <div className="text-time">15/1/2022</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="list-item-content">
                    <div className="list--content-text">
                      <span>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        including versions of Lorem Ipsum.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AccountInfo;
