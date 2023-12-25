// Header.js
import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import avatar from '../../assets/images/avt-hung.jpg'
import './styles.css';
import { Link } from 'react-router-dom';

const Header = () => {

  const [activeNav, setActiveNav] = useState(0);

  const handleItemClick = (index) => {
    setActiveNav(index);
  };

  return (
    <header className="header">
      <nav className="header-nav">
        <div className="logo">
          <a href="/" className="logobk logo-header">
            <i className="fa-solid fa-briefcase logo-icon "></i>
            <p className="text-logo">BKTimViec</p>
          </a>
        </div>
        <ul className="nav-list">
          <a
            href="/"
            className={`nav-item ${activeNav === 0 ? 'item-sub' : ''}`}
            onClick={() => handleItemClick(0)}
          >
            <p className={`text-nav ${activeNav === 0 ? 'text-nav-sub' : ''}`}>Trang chủ</p>
          </a>
          <a
            href=""
            className={`nav-item item-2 ${activeNav === 1 ? 'item-sub' : ''}`}
            onClick={() => handleItemClick(1)}
          >
            <p className={`text-nav ${activeNav === 1 ? 'text-nav-sub' : ''}`}>Tìm việc</p>
          </a>
          <a
            href=""
            className={`nav-item ${activeNav === 2 ? 'item-sub' : ''}`}
            onClick={() => handleItemClick(2)}
          >
            <p className={`text-nav ${activeNav === 2 ? 'text-nav-sub' : ''}`}>Đã ứng tuyển</p>
          </a>
        </ul>
        <div className="user-avt">
          <img
            src={avatar}
            alt="avatar user"
            className="avt-img"
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
