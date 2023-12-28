// Header.js
import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import avatar from '../../assets/images/avt-hung.jpg';
import { path } from '../../constants/path';
import './styles.css';
const Header = () => {
  const location = useLocation();
  return (
    <header className="header">
      <nav className="header-nav">
        <div className="logo">
          <Link to="/" className="logobk logo-header">
            <i className="fa-solid fa-briefcase logo-icon "></i>
            <p className="text-logo">BKTimViec</p>
          </Link>
        </div>
        <ul className="nav-list">
          <Link
            to={path.home}
            className={`nav-item ${
              location.pathname === path.home ? 'item-sub' : ''
            }`}
          >
            <p
              className={`text-nav ${
                location.pathname === path.home ? 'text-nav-sub' : ''
              }`}
            >
              Trang chủ
            </p>
          </Link>
          <Link
            to={path.result}
            className={`nav-item item-2 ${
              location.pathname === path.result ? 'item-sub' : ''
            }`}
          >
            <p
              className={`text-nav ${
                location.pathname === path.result ? 'text-nav-sub' : ''
              }`}
            >
              Tìm việc
            </p>
          </Link>
          <Link
            to={path.applied}
            className={`nav-item ${
              location.pathname === path.applied ? 'item-sub' : ''
            }`}
          >
            <p
              className={`text-nav ${
                location.pathname === path.applied ? 'text-nav-sub' : ''
              }`}
            >
              Đã ứng tuyển
            </p>
          </Link>
        </ul>
        <div className="user-avt">
          <img src={avatar} alt="avatar user" className="avt-img" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
