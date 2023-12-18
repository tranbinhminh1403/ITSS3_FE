import React from 'react';
import { ReactComponent as IconSvg } from './icon.svg';
import { ReactComponent as DolarSvg } from './dolar.svg';
import { ReactComponent as CalendarSvg } from './calendar.svg';
import { ReactComponent as ArrowRight } from './arrowRight.svg';
import { ReactComponent as IconAvt } from './iconAvt.svg';
import './jobsList.css'

const JobItem = () => {
  return (
    <li className="job-list-item">
      <div className="job-detail">
        <div className="job-detail-left">
          <div className="avt-company">
          {/* <IconAvt/> */}
          <img className="avt-company-img" src="" alt="avatar company" />
          </div>
          <div className="job-info">
            <div className="job-info-top" style={{ marginBottom: '8px' }}>
              <div className="job-name" style={{ fontSize: '28px', fontWeight: 500 }}>
                Senior UX Design
              </div>
              <div className="job-type">
                <div className="job-hust">
                  <p className="job-txt-1">HUST Parther</p>
                </div>
                <div className="job-fulltime">
                  <p className="job-txt-2">Toan Thoi Gian</p>
                </div>
              </div>
            </div>
            <div className="job-info-bottom">
              <div className="job-address" style={{ fontSize: '14px', color: '#636A80', fontWeight: 400 }}>
                <IconSvg/>{" "}
                Tonya, Tunkey
              </div>
              <div className="job-salary" style={{ fontSize: '14px', color: '#636A80', fontWeight: 400, marginLeft: '10px', marginRight: '10px' }}>
                <DolarSvg/>{" "}
                15.000.000VND - 30.000.000VND/thang
              </div>
              <div className="job-time" style={{ fontSize: '14px', color: '#636A80', fontWeight: 400 }}>
                <CalendarSvg/>{" "}
                4 Days Remaining
              </div>
            </div>
          </div>
        </div>
        <div className="job-detail-right">
          <button className="btn-sub">
            <p className="btn-txt">Xem chi tiết</p>
            <ArrowRight/>
          </button>
        </div>
      </div>
    </li>
  );
};

const JobsList = () => {
  return (
    <div className="main-container">
      <ul className="job-list">
        <JobItem />
      </ul>
    </div>
  );
};

export default JobsList;
