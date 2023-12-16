// Header.js
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="header-nav">
        <div className="logo">
          <a href="#" className="logobk logo-header">
            <i className="fa-solid fa-briefcase logo-icon "></i>
            <p className="text-logo">BKTimViec</p>
          </a>
        </div>
        <ul className="nav-list">
          <a href="" className="nav-item item-1">
            {' '}
            <p className="text-nav text-nav-1 ">Trang chủ</p>{' '}
          </a>
          <a href="" className="nav-item item-2">
            {' '}
            <p className="text-nav">Tìm việc</p>{' '}
          </a>
          <a href="" className="nav-item">
            {' '}
            <p className="text-nav">Đã ứng tuyển</p>{' '}
          </a>
        </ul>
        <div className="user-avt">
          <img
            src="./assets/images/avt-hung.jpg"
            alt="avatar user"
            className="avt-img"
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
