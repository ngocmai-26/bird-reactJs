const Register = (props) => {
  return (
    <div className="client-header-bg">
      <div className="register">
        <div className="register__title client-title">
          <span>Register</span>
        </div>

        <div className="register__body client-body">
          <div className="register__body--group client-group-input">
            <div className="register__body--group-item">
              <div className="tour--info">
                <input
                  type="text"
                  name="Username"
                  placeholder="Username"
                  className="tour--info-input"
                />
                <label htmlFor="Username" className="tour--info-label">
                  Username
                </label>
              </div>
            </div>

            <div className="register__body--group-item">
              <div className="tour--info">
                <input
                  type="text"
                  name="Email"
                  placeholder="Email"
                  className="tour--info-input"
                />
                <label htmlFor="Email" className="tour--info-label">
                  Email
                </label>
              </div>
            </div>

            <div className="register__body--group-item">
              <div className="row">
                <div className="col-xl-6">
                  <div className="tour--info">
                    <input
                      type="text"
                      name="FirstName"
                      placeholder="First name"
                      className="tour--info-input"
                    />
                    <label htmlFor="FirstName" className="tour--info-label">
                      First name
                    </label>
                  </div>
                </div>

                <div className="col-xl-6">
                  <div className="tour--info">
                    <input
                      type="text"
                      name="LastName"
                      placeholder="Last name"
                      className="tour--info-input"
                    />
                    <label htmlFor="LastName" className="tour--info-label">
                      Last name
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="register__body--group-item">
              <div className="tour--info">
                <input
                  type="password"
                  name="Phone"
                  placeholder="Phone"
                  className="tour--info-input"
                />
                <label htmlFor="Phone" className="tour--info-label">
                  Phone
                </label>
              </div>
            </div>

            <div className="register__body--group-item">
              <div className="tour--info">
                <input
                  type="text"
                  name="Confirm"
                  placeholder="Confirm password"
                  className="tour--info-input"
                />
                <label htmlFor="Confirm" className="tour--info-label">
                  Confirm password
                </label>
              </div>
            </div>

            <div className="register__body--group-item">
              <div className="tour--info">
                <input
                  type="date"
                  name="Birthday"
                  placeholder="Birthday"
                  className="tour--info-input"
                />
                <label htmlFor="Birthday" className="tour--info-label">
                  Birthday
                </label>
              </div>
            </div>

            <div className="register__body--group-item">
              <div className="tour--info">
                <input
                  type="text"
                  name="Address"
                  placeholder="Address"
                  className="tour--info-input"
                />
                <label htmlFor="Address" className="tour--info-label">
                  Address
                </label>
              </div>
            </div>

            <div className="register__body--group--button">
              <button className="btn-register">Register</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
