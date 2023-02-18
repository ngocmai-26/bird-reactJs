import { ClientNav } from "../../core/utils/Types";
import ClientLayout, { ClientNavigate } from "../layout/client/ClientLayout";

function Rule() {
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
        <RuleHeader>
          <ClientNavigate links={links} />
        </RuleHeader>
      </div>
    </ClientLayout>
  );
}

export default Rule;

const RuleHeader = (props) => {
  return (
    <div className={"row mx-0 w-100 home-header bg client-header-bg px-lg-5"}>
      <div className={"col-12"}>{props.children}</div>
      <RuleContext />
    </div>
  );
};

const RuleContext = () => {
  return (
    <div className="container">
      <div className="rule">
        <div className="rule--heading">
          <span>TIÊU CHÍ VÀ CÁCH THỨC CHẤM ĐIỂM TRONG GIẢI ĐẤU</span>
        </div>
        <div className="rule__group">
          <div className="rule__group--item">
            <div className="rule--heading-text">
              <span>I. Tiêu chí chấm thi</span>
            </div>

            <div className="rule__content">
              <div className="rule--heading-text rule-heading2">
                <span>1. Thái độ</span>
              </div>
              <ol>
                <li className="rule__content--item rule-text-style">
                  <span className="rule__content--heading ">Đạt:</span>

                  <span className="rule__content--text">
                    Khi thi đấu có thái độ linh hoạt, nhảy, chuyển cầu, dáng
                    đứng vươn mình; sục sạo, rê, sàng cầu, xòe đuôi, bung cánh,
                    hướng mặt vào đối thủ để dọa nạ.
                  </span>
                </li>

                <li className="rule__content--item rule-text-style">
                  <span className="rule__content--heading ">Không đạt:</span>

                  <span className="rule__content--text">
                    đứng ủ rũ, không có thái độ muốn đấu, mặt quay đi hướng khác
                  </span>
                </li>
              </ol>
            </div>

            <div className="rule__content">
              <div className="rule--heading-text rule-heading2">
                <span>2. Giọng đấu</span>
              </div>
              <ol>
                <li className="rule__content--item rule-text-style">
                  <span className="rule__content--heading ">Đạt:</span>

                  <span className="rule__content--text">
                    khi thi đấu sổ giọng nhiều, đảo giọng, luyến láy, âm giọng
                    rõ ràng; giọng quát nạt, giọng ché thị uy đối thủ; giọng
                    trên 3 âm tiết
                  </span>
                </li>

                <li className="rule__content--item rule-text-style">
                  <span className="rule__content--heading ">Không đạt:</span>

                  <span className="rule__content--text">
                    khi thi đấu ít sổ giọng, giọng dưới 3 âm tiết, có những âm
                    trùng lắp (ví dụ: wuýt wuýt, wuýt wiu, những âm giọng của
                    chim mái).
                  </span>
                </li>
              </ol>
            </div>

            <div className="rule__content">
              <div className="rule--heading-text rule-heading2">
                <span>3. Dáng bộ</span>
              </div>
              <ol>
                <li className="rule__content--item rule-text-style">
                  <span className="rule__content--heading ">Đạt:</span>

                  <span className="rule__content--text">
                    Cân đối, thon gọn, rắn chắc, nhanh nhẹn.
                  </span>
                </li>

                <li className="rule__content--item rule-text-style">
                  <span className="rule__content--heading ">Không đạt:</span>

                  <span className="rule__content--text">
                    Xù lông, thiếu lông đuôi và cánh trên 30% hoặc các tật lỗi
                    như lộn, bu nóc, phá cách, xoay dí đuôi.
                  </span>
                </li>
              </ol>
            </div>
          </div>

          <div className="rule__group--item">
            <div className="rule--heading-text">
              <span>II. Yêu cầu đối với nghệ nhân và khán giả</span>
            </div>

            <div className="rule__content">
              <div className="rule__content--item rule-customer">
                <ol>
                  <li className="rule__content--item rule-text-style">
                    <span className="rule__content--text">
                      Chủ chim: Kiểm tra và đảm bảo an toàn, đầy đủ một cách
                      tuyệt đối về lồng, nước uống, đồ ăn trong suốt thời gian
                      trao lồng và chim cho BTC cho đến khi nhận lại.
                    </span>
                  </li>

                  <li className="rule__content--item rule-text-style">
                    <span className="rule__content--text">
                      Tuyệt đối không vào khu vực BTC cấm vào, không được động
                      chạm vào giàn treo chim; tuyệt đối không được tạo ra tiếng
                      xùy, xuỵt,… kích chim, giữ trật tự, không tạo ra tiếng
                      động lớn.
                    </span>
                  </li>
                  <li className="rule__content--item rule-text-style">
                    <span className="rule__content--text">
                      Các nghệ nhân hãy quan sát tổng thể những chú chim trong
                      bảng cùng với chú chim cưng của mình ở mỗi vòng thi, căn
                      cứ vào tiêu chí chấm thi để có nhìn nhận khách quan và
                      đúng.
                    </span>
                  </li>
                  <li className="rule__content--item rule-text-style">
                    <span className="rule__content--text">
                      Tôn trọng quyết định của Ban giám khảo
                    </span>
                  </li>
                  <li className="rule__content--item rule-text-style">
                    <span className="rule__content--text">
                      Trường hợp có vấn đề gì thắc mắc, cần điều chỉnh hoặc có ý
                      kiến khác với BTC thì gặp BTV để được xem xét và giải
                      quyết.
                    </span>
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <div className="rule__group--item">
            <div className="rule--heading-text">
              <span>III. Cách thức tổ chức thi và chấm điểm</span>
            </div>

            <div className="rule__content">
              <div className="rule--heading-text rule-heading2">
                <span>1. Quy định chung</span>
              </div>
              <ol>
                <li className="rule__content--item rule-text-style">
                  <span className="rule__content--text">
                    Ban Tổ chức (BTC) phối hợp cùng Ban giám khảo (BGK) treo tất
                    cả số lượng lồng chim dự thi lên cùng một lúc tại các khu
                    vực thi mà BTC quy định, nghệ nhân nào mang chim đến trước
                    thì BTC sẽ bố trí treo hạ lồng, sắp xếp lồng chim của nghệ
                    nhân ấy vào trước.
                  </span>
                </li>

                <li className="rule__content--item rule-text-style">
                  <span className="rule__content--text">
                    Lưu ý: Các nghệ nhân kiểm tra lồng chim, nước uống, thức ăn
                    và cầu cống trước khi giao cho tổ treo hạ lồng
                  </span>
                </li>
                <li className="rule__content--item rule-text-style">
                  <span className="rule__content--text">
                    Khi bắt đầu thi, chúng tôi sẽ thông báo thời gian thi và
                    tiêu chí loại.
                  </span>
                </li>
                <li className="rule__content--item rule-text-style">
                  <span className="rule__content--text">
                    Chúng tôi sẽ loại trực tiếp (bất kỳ vòng thi đấu nào) đối
                    với những chú chim có những tật lỗi như sau: Tắm cóng, tắm
                    khô, phơi nắng, lộn 360 độ.
                  </span>
                </li>
              </ol>
            </div>

            <div className="rule__content">
              <div className="rule--heading-text rule-heading2">
                <span>2. Vòng loại</span>
              </div>
              <ol>
                <li className="rule__content--item rule-text-style">
                  <span className="rule__content--text">
                    Không hạn chế số vòng và số lượng chim hạ từng vòng;
                  </span>
                </li>

                <li className="rule__content--item rule-text-style">
                  <span className="rule__content--text">
                    Trong 8 phút đầu các giám khảo sẽ quan sát và ghi chú những
                    chú chim nào đấu yếu, xĩa lông, đâm lồng, không ra giọng.
                    Riêng những chú chim bu nóc, ngoáy cổ, cắn chân, cắn lông,
                    cắn cánh từ 3 lần trở lên chúng tôi sẽ loại trong vòng thi
                    đấu đó mặc dù trong thời gian thi đấu đó chú chim ấy còn
                    chơi rất tốtz
                  </span>
                </li>
                <li className="rule__content--item rule-text-style">
                  <span className="rule__content--text">
                    Khi BTC thông báo còn 2 phút, giám khảo sẽ rà soát lại tất
                    cả những chú chim đã đưa vào danh sách loại và kiểm tra thật
                    kỹ trước khi ghi số báo danh cùng những tật lỗi của những
                    chú chim bị loại vào bảng điểm
                  </span>
                </li>
                <li className="rule__content--item rule-text-style">
                  <span className="rule__content--text">
                    Ở những vòng loại tùy theo số lượng chim thi ít hay nhiều
                    giám khảo sẽ xem xét những chú chim bu chụp lồng và đâm
                    lồng. Trong thời gian thi 10 phút, những chú chim bu chụp và
                    đâm lồng hơn ½ thời gian thi sẽ bị loại nhưng giám khảo sẽ
                    xem thời gian này trong bảng thi còn có những chú chim nào
                    yếu hơn không (Thí dụ: Những chú chim còn ra giọng nhưng rất
                    yếu, không còn hình bộ thi đấu thì lúc đó giám khảo sẽ cân
                    nhắc chú chim nào đi tiếp và những chú chim nào sẽ bị loại)
                  </span>
                </li>
              </ol>
            </div>

            <div className="rule__content">
              <div className="rule--heading-text rule-heading2">
                <span>3. Vòng top 50</span>
              </div>
              <ol>
                <li className="rule__content--item rule-text-style">
                  <span className="rule__content--text">
                    Bố trí ban giám khảo chia làm 2 tổ và chấm đối diện nhau;
                  </span>
                </li>

                <li className="rule__content--item rule-text-style">
                  <span className="rule__content--text">
                    Vòng chọn ở top 50 giám khảo sẽ hội ý chọn 10 chú chim đạt
                    top 50 trên cả 2 mặt, đó là những chú chim thật sự quá yếu
                    không còn đủ tiêu chuẩn thi đấu để vào vòng top 40;
                  </span>
                </li>
              </ol>
            </div>

            <div className="rule__content">
              <div className="rule--heading-text rule-heading2">
                <span>4. Vòng top 40</span>
              </div>
              <ol>
                <li className="rule__content--item rule-text-style">
                  <span className="rule__content--text">
                    Bố trí ban giám khảo chia làm 2 tổ và chấm đối diện nhau;
                  </span>
                </li>

                <li className="rule__content--item rule-text-style">
                  <span className="rule__content--text">
                    Vòng chọn ở top 40 giám khảo sẽ hội ý chọn 10 chú chim đạt
                    top 40 trên cả 2 mặt, đó là những chú chim thật sự quá yếu
                    không còn đủ tiêu chuẩn thi đấu để vào vòng top 30;
                  </span>
                </li>
              </ol>
            </div>

            <div className="rule__content">
              <div className="rule--heading-text rule-heading2">
                <span>5. Vòng top 30</span>
              </div>
              <ol>
                <li className="rule__content--item rule-text-style">
                  <span className="rule__content--text">
                    Bố trí ban giám khảo chia làm 2 tổ và chấm đối diện nhau;
                  </span>
                </li>

                <li className="rule__content--item rule-text-style">
                  <span className="rule__content--text">
                    Bắt đầu có giải Ở top 30, giám khảo sẽ hội ý chọn 10 chú
                    chim đạt top 30 trên cả 2 mặt, đó là những chú chim thật sự
                    quá yếu không còn đủ tiêu chuẩn thi đấu để vào vòng top 20.
                  </span>
                </li>
              </ol>
            </div>

            <div className="rule__content">
              <div className="rule--heading-text rule-heading2">
                <span>6. Vòng top 60</span>
              </div>
              <ol>
                <li className="rule__content--item rule-text-style">
                  <span className="rule__content--text">
                    Ở vòng thi top 20 (thi trong 15 phút), chúng tôi sẽ cho thi
                    đấu trên 2 sào thì (mỗi sào 10 chú chim) giám khảo sẽ đứng
                    chấm một bên nhưng cho loại làm 2 lần.
                  </span>
                </li>
                <li className="rule__content--item rule-text-style rule__content--children">
                  <span className="rule__content--text">
                    Lần thứ nhất (thi trong 8 phút): Chọn 6 chú chim (đạt top
                    20)
                  </span>
                </li>
                <li className="rule__content--item rule-text-style rule__content--children">
                  <span className="rule__content--text">
                    Lần thứ hai (thi trong 7 phút): Chọn 4 chú chim (đạt top 20)
                  </span>
                </li>
                <li className="rule__content--item rule-text-style">
                  <span className="rule__content--text">
                    Trong vòng top 20 này giám khảo đứng chấm một bên có quyền
                    hội ý chọn những chú chim đạt top 20 một cách chính xác. Cho
                    đến khi còn lại 10 chú chim xuất sắc để vào vòng chung kết
                    (Top 10)
                  </span>
                </li>
              </ol>
            </div>

            <div className="rule__content">
              <div className="rule--heading-text rule-heading2">
                <span>7.Vòng top 10</span>
              </div>
              <ol>
                <li className="rule__content--item rule-text-style">
                  <span className="rule__content--text">
                    Ở vòng thi top 10: Chúng tôi sẽ bố trí chim thi trên 2 sào
                    thi. Mỗi bên 5 chú chim được sắp xếp theo số thứ tự từ nhỏ
                    đến lớn và đối diện nhau để thi đấu;
                  </span>
                </li>

                <li className="rule__content--item rule-text-style">
                  <span className="rule__content--text">
                    Ban giám khảo sẽ cho thời gian ổn định chim trong vòng 1
                    phút. Sau khi cho phép các nghệ nhân thay đổi chỉnh sửa lồng
                    cầu, thức ăn, nước uống theo ý muốn. Khi ổn định xong và Ban
                    giám khảo sẽ chấm độc lập theo phiếu để chọn ra 04 chú chim
                    vào vòng chung kết, 06 con bị loại được giải khuyến khích
                    (thời gian chấm 10 phút).
                  </span>
                </li>
              </ol>
            </div>

            <div className="rule__content">
              <div className="rule--heading-text rule-heading2">
                <span>8. Vòng chung kết</span>
              </div>
              <ol>
                <li className="rule__content--item rule-text-style">
                  <span className="rule__content--text">
                    Ở vòng chung kết: Ban giám khảo chấm độc lập theo phiếu để
                    chọn ra những chú chim đoạt giải Nhất, Nhì, Ba, Tư và kết
                    thúc cuộc thi.
                  </span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
