// Footer.js
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer-top">
          <div className="footer-left">
            <ul className="list-footer">
              <li>
                <div className="logo">
                  <a href="#" className="logobk logo-footer">
                    <i className="fa-solid fa-briefcase logo-icon "></i>
                    <p className="text-logo logo-footer">BKTimViec</p>
                  </a>
                </div>
              </li>
              <li className="text-footer text-footer-1">Số điện thoại: <span className="phone-number">024 3869 6099</span></li>
              <li className="text-footer text-footer-2">1 Đại Cồ Việt, Bách Khoa, Hai Bà Trưng, Hà Nội</li>
            </ul>
          </div>
          <div className="footer-right">
            <ul className="list-item-footer">
              <li className="title-footer">Ứng viên</li>
              <li><a href="" className="text-footer">Tìm việc</a> </li>
              <li><a href="" className="text-footer">Tìm nhà tuyển dụng</a> </li>
              <li><a href="" className="text-footer">Lưu công việc</a> </li>
            </ul>
            <ul className="list-item-footer">
              <li className="title-footer">Nhà tuyển dụng</li>
              <li><a href="" className="text-footer">Đăng tuyển</a> </li>
              <li><a href="" className="text-footer">Duyệt ứng viên</a> </li>
              <li><a href="" className="text-footer">Đơn tuyển dụng</a> </li>
            </ul>
            <ul className="list-item-footer">
              <li className="title-footer">Hỗ trợ</li>
              <li><a href="" className="text-footer">Faqs</a> </li>
              <li><a href="" className="text-footer">Privacy Policy</a> </li>
              <li><a href="" className="text-footer">Terms & Conditions</a> </li>
            </ul>
          </div>
        </div>
        <div className="copy-right">
          <p className="copy-text">@ 2023 晩御飯 - Job Portal. All rights Reserved</p>
          <ul className="social">
            <a href="" className="social-icon"><i className="fa-brands fa-facebook"></i></a>
            <a href="" className="social-icon"><i className="fa-brands fa-youtube"></i></a>
            <a href="" className="social-icon"><i className="fa-brands fa-instagram"></i></a>
            <a href="" className="social-icon"><i className="fa-brands fa-twitter"></i></a>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
