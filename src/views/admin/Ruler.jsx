import AdminLayout, { HeaderAdmin, NavAdmin } from "../layout/admin/AdminLayout";

function Ruler() {
  return (
   <AdminLayout>
      <section>
          <div className="content">
            <div className="content__header">
              <div className="content__header--title">
                <span className="content__header--title-text">Rule Detail</span>
              </div>
            </div>
            <div className="content__body">
              <div className="content__body--group">
                <div className="heading1 heading">
                  <span>Heading1</span>
                </div>
                <div className="heading2 heading">
                  <span>Heading2</span>
                </div>
                <div className="heading3 heading">
                  <span>Heading3</span>
                </div>
                <div className="heading1 heading">
                  <span>Heading1</span>
                </div>
                <div className="content-text">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quis lobortis nisl cursus bibendum sit nulla accumsan
                    sodales ornare. At urna viverra non suspendisse neque,
                    lorem. Pretium condimentum pellentesque gravida id etiam sit
                    sed arcu euismod. Rhoncus proin orci duis scelerisque
                    molestie cursus tincidunt aliquam.
                  </span>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quis lobortis nisl cursus bibendum sit nulla accumsan
                    sodales ornare. At urna viverra non suspendisse neque,
                    lorem. Pretium condimentum pellentesque gravida id etiam sit
                    sed arcu euismod. Rhoncus proin orci duis scelerisque
                    molestie cursus tincidunt aliquam.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
   </AdminLayout>
        
  );
}

export default Ruler;
