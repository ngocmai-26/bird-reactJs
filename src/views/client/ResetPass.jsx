function ResetPass() {
    return ( 
        <div className="client-header-bg">
      <div className="reset">

        <div className="reset__body client-body">
          <div className=" client-group-input">
            <div className="reset-title">
                <span>Tìm tài khoản của bạn</span>
            </div>

            <div className="reset__body--group">
                <div className="reset--note-text">
                    Vui lòng nhập email hoặc số di động để tìm kiếm tài khoản của bạn.
                </div>
            <div className="reset__body--group-item">
              <div className="tour--info">
                <input
                  type="text"
                  name="email"
                  placeholder="Email hoặc Số điện thoại"
                  className="tour--info-input"
                />
              </div>
            </div>
            </div>
            <div className="reset__body--group--button">
              <button className="btn-resetCancel">Hủy</button>
              <button className="btn-resetSuccess">Tiếp Tục</button>
            </div>
          </div>
        </div>
      </div>
    </div>
     );
}

export default ResetPass;