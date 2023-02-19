import { ClientNav } from "../../core/utils/Types";
import ClientLayout, { ClientNavigate } from "../layout/client/ClientLayout";

function Feedback() {
  const links = [
    new ClientNav(1, "match", "/Client/Match"),
    new ClientNav(2, "tournament", "/Client/Tournament"),
    new ClientNav(3, "rule", "/Client/Rule"),
    new ClientNav(4, "BXH", "/Client/BXH"),
    new ClientNav(5, "about", "/Client/About"),
    new ClientNav(6, "login", "/Client/Login"),
  ];
  return (
    <ClientLayout>
      <div className={"w-100"}>
        <FeedbackHeader>
          <ClientNavigate links={links} />
        </FeedbackHeader>
      </div>
    </ClientLayout>
  );
}

export default Feedback;

const FeedbackHeader = (props) => {
  return (
    <div className={"row mx-0 w-100 home-header bg client-header-bg px-lg-5"}>
      <div className={"col-12"}>{props.children}</div>

      <div className="row">
        <FeedbackContent />
      </div>
    </div>
  );
};

const FeedbackContent = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-6"></div>

        <div className="col-xl-6">
          <div className="feedback">
            <div className="row">
              <div className="col-xl-4">
              <div className="feedback-background bg"></div>
              </div>

              <div className="col-xl-8">
                <div className="p-5 feedback__contact">
                  <div className="text--heading">
                    <span>Feedback</span>
                  </div>

                  <div className="feedback__contact--note">
                    <span>Contact us for a free consultation and let our experts talk to you about how we can help grow your Business</span>
                  </div>

                  <div className="feedback__contact--group">
                    <div className="feedback__contact--group-item">
                      <label className="contact-label" htmlFor="firstname">First name</label>

                      <input type="text" name="firstname" className="contact--input" />
                    </div>
                    <div className="feedback__contact--group-item">
                      <label className="contact-label" htmlFor="lastname">Last name</label>

                      <input type="text" name="lastname" className="contact--input" />
                    </div>
                    <div className="feedback__contact--group-item">
                      <label className="contact-label" htmlFor="Your">Your</label>

                      <input type="text" name="Your" className="contact--input" />
                    </div>
                    <div className="feedback__contact--group-item">
                      <label className="contact-label" htmlFor="message">Your message</label>

                      <input type="text" name="message" className="contact--input" />
                    </div>
                    <div className="feedback__contact--group-item">
                     <button className="btn-send">Send Feedback</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
