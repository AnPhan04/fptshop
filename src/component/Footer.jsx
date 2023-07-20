import React from "react";
import "../App.css";

const Footer = () => {
  return (
    <footer style={{ background: "white", margin: "1.5rem 0 0 0" }}>
      <div class="container">
        <div class="row">
          <div class="col">
            <a style={{ paddingBottom: "5px" }} href="http://frt.vn/">
              Giới thiệu về công ty
            </a>
            <br />
            <a href="http://frt.vn/">Chính sách bảo mật</a>
            <br />
            <a href="http://frt.vn/">Quy chế hoạt động</a>
            <br />
            <a href="http://frt.vn/">Kiểm tra hóa đơn điện tử</a>
            <br />
            <a href="http://frt.vn/">Tra cứu thông tin bảo hành</a>
            <br />
            <a href="http://frt.vn/">Câu hỏi thường gặp</a>
            <br />
            <img
              src="https://fptshop.com.vn/Content/v4/images/ft-img1.png"
              alt="logo1"
              srcset=""
              style={{ width: "13%" }}
            />
            <img
              src="https://fptshop.com.vn/Content/v4/images/ft-img2.png"
              alt="logo2"
              srcset=""
              style={{ width: "40%" }}
            />
          </div>
          <div class="col">
            <h6>Tư vấn mua hàng (Miễn phí)</h6>
            <h5 style={{ color: "#d51c22" }}>1800 6601 (Nhánh 1)</h5>
            <h6>Hỗ trợ kỹ thuật</h6>
            <h5 style={{ color: "#d51c22" }}>1800 6601 (Nhánh 2)</h5>
            <h6>Góp ý, khiếu nại (8h00 - 22h00)</h6>
            <h5 style={{ color: "#d51c22" }}>1800 6616</h5>
            <h6>Hỗ trợ thanh toán:</h6>
            <img src="payment.png" alt="payment" />
          </div>
          <div class="col">
            <h5>
              Kết nối với chúng tôi: <img src="fanpage.png" alt="fanpage" />
            </h5>
            <h5>Website cùng FPT Retail:</h5>
            <h6 style={{ fontWeight: "normal" }}>
              Cửa hàng uỷ quyền bởi Apple:
              <a href="https://fstudiobyfpt.com.vn/">
                <img src="fstudio.png" alt="" srcset="" />
              </a>
            </h6>
            <h6 style={{ fontWeight: "normal" }}>
              Trung tâm bảo hành uỷ quyền Apple:
              <a href="https://fstudiobyfpt.com.vn/fcare">
                <img src="fcare.png" alt="" srcset="" />
              </a>
            </h6>
          </div>
        </div>
      </div>
      <div style={{ background: "#f2f2f2", padding: 0, margin: 0 }}>
        <p style={{ margin: 0 }}>
          © 2007 - 2023 Công Ty Cổ Phần Bán Lẻ Kỹ Thuật Số FPT / Địa chỉ: 261 -
          263 Khánh Hội, P2, Q4, TP. Hồ Chí Minh / GPĐKKD số 0311609355 do Sở
          KHĐT TP.HCM cấp ngày 08/03/2012. GP số 47/GP-TTĐT do sở TTTT TP HCM
          cấp ngày 02/07/2018. Điện thoại: (028) 7302 3456. Email:
          anpthe173136@fpt.edu.vn. Chịu trách nhiệm sản xuất: Phan Thanh An.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
