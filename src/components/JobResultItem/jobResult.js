import React from 'react';
import { ReactComponent as IconSvg } from '../../assets/icon.svg';
import { ReactComponent as DolarSvg } from '../../assets/dolar.svg';
import { ReactComponent as CalendarSvg } from '../../assets/calendar.svg';
import { ReactComponent as ArrowRight } from '../../assets/arrowRight.svg';
import { ReactComponent as IconAvt } from '../../assets/iconAvt.svg';
import './jobsList.css';
import formatNumberWithPeriods from '../../utils/formatNumber';
import { calculateDayRemaining } from '../../utils/handleDate';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Pagination, PaginationItem } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const JobItem = ({ jobItem }) => {
  const navigate = useNavigate();

  const formattedSalaryMin = formatNumberWithPeriods(jobItem.salary_min * 1000);

  const formattedSalaryMax = formatNumberWithPeriods(jobItem.salary_max * 1000);

  const dayRemaining = calculateDayRemaining(jobItem.expired_at);

  const handleButton = () => {
    navigate(`/job/${jobItem.id}`);
  };

  return (
    <li className="job-list-item">
      <div className="job-detail">
        <div className="job-detail-left">
          <div className="avt-company">
            {/* <IconAvt/> */}
            <img
              className="avt-company-img"
              src={jobItem.company.logo_url}
              alt="avatar company"
            />
          </div>
          <div className="job-info">
            <div className="job-info-top" style={{ marginBottom: '8px' }}>
              <div
                className="job-name"
                style={{ fontSize: '18px', fontWeight: 500 }}
              >
                {jobItem.title}
              </div>
              {jobItem.company.hust_partner ? (
                <div className="job-type">
                  <div className="job-hust">
                    <p className="job-txt-1">HUST Partner</p>
                  </div>
                </div>
              ) : null}
              {jobItem.jobTypeRelations?.map((jobType, index) => (
                <div className="job-fulltime" key={index}>
                  <p className="job-txt-2">{jobType.type.name}</p>
                </div>
              ))}
            </div>
            <div className="job-info-bottom">
              <div
                className="job-address"
                style={{ fontSize: '14px', color: '#636A80', fontWeight: 400 }}
              >
                <IconSvg /> {jobItem.job_location}
              </div>
              <div
                className="job-salary"
                style={{
                  fontSize: '14px',
                  color: '#636A80',
                  fontWeight: 400,
                  marginLeft: '16px',
                  marginRight: '16px',
                }}
              >
                <DolarSvg /> {formattedSalaryMin} VND - {formattedSalaryMax} VND
              </div>
              <div
                className="job-time"
                style={{ fontSize: '14px', color: '#636A80', fontWeight: 400 }}
              >
                <CalendarSvg /> {dayRemaining} Days Remaining
              </div>
            </div>
          </div>
        </div>
        <div className="job-detail-right">
          <button className="btn-sub" onClick={handleButton}>
            <p className="btn-txt">Xem chi tiết</p>
            <ArrowRight />
          </button>
        </div>
      </div>
    </li>
  );
};

const JobResult = ({ propData }) => {
  const resultPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastJob = currentPage * resultPerPage;
  const indexOfFirstJob = indexOfLastJob - resultPerPage;
  const currentResults = propData.slice(indexOfFirstJob, indexOfLastJob);

  const totalPages = Math.ceil(propData.length / resultPerPage);

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  if (propData.length <= 0) {
    return (
      <div>
        <h3>Không tìm thấy công việc phù hợp</h3>
      </div>
    );
  } else {
    return (
      <div>
        <div className="main-container">
          <ul className="job-list">
            {currentResults.map((jobItem, index) => (
              <JobItem key={index} jobItem={jobItem} />
            ))}
          </ul>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '20px',
          }}
        >
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
            renderItem={(item) => (
              <PaginationItem
                slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                {...item}
              />
            )}
          />
        </div>
      </div>
    );
  }
};

export default JobResult;
