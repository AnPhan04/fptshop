import React from "react";
import "../App.css";

const Footer = () => {
  return (
    <footer style={{ background: "white", margin: "1.5rem" }}>
      <div class="container">
        <div class="row">
          <div class="col">
            <a href="http://frt.vn/">Giới thiệu về công ty</a>
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
          <div class="col">2 of 3</div>
          <div class="col">3 of 3</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
