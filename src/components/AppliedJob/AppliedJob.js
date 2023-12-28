import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckIcon from '@mui/icons-material/Check';
import { Box, Pagination, PaginationItem } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as DolarSvg } from '../../assets/dolar.svg';
import { ReactComponent as IconSvg } from '../../assets/icon.svg';
import formatNumberWithPeriods from '../../utils/formatNumber';
import { handleDate } from '../../utils/handleDate';
import './style.css';

const JobItem = ({ jobItem }) => {
  const formattedSalaryMin = formatNumberWithPeriods(
    jobItem && jobItem.job_id.salary_min ? jobItem.job_id.salary_min : 0,
  );
  const formattedSalaryMax = formatNumberWithPeriods(
    jobItem && jobItem.job_id.salary_max ? jobItem.job_id.salary_max : 0,
  );

  return (
    <div className="job-detail-left-apply">
      <div className="avt-company">
        {/* <IconAvt/> */}
        <img
          className="avt-company-img"
          src={jobItem.job_id.company.logo_url}
          alt="avatar company"
        />
      </div>
      <div className="job-info">
        <div className="job-info-top" style={{ marginBottom: '8px' }}>
          <div
            className="job-name"
            style={{ fontSize: '16px', fontWeight: 500 }}
          >
            {jobItem ? jobItem.job_id.title : 'UNDEFINE'}
          </div>
          {jobItem && jobItem.job_id.company.logo_url ? (
            <div className="job-type">
              <div className="job-hust">
                <p className="job-txt-1">HUST Partner</p>
              </div>
            </div>
          ) : null}
          {jobItem &&
            jobItem.job_id.jobTypeRelations?.map((jobType, index) => (
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
            <IconSvg /> {jobItem ? jobItem.job_id.job_location : 'undefine'}
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
        </div>
      </div>
    </div>
  );
};

const AppliedJob = ({ data }) => {
  const resultPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastJob = currentPage * resultPerPage;
  const indexOfFirstJob = indexOfLastJob - resultPerPage;
  const currentResults = data
    ? data.slice(indexOfFirstJob, indexOfLastJob)
    : [];

  const totalPages = data ? Math.ceil(data.length / resultPerPage) : 0;

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <div className="applied-job-container">
        <Box
          sx={{
            width: '100%',
            height: 76,
            backgroundColor: '#F1F2F4',
            textAlign: 'left',
            display: 'flex',
            alignItems: 'center',
            marginBottom: '40px',
            padding: '0 10%',
          }}
        >
          <div style={{ fontWeight: 500, fontSize: 20 }}>
            Công việc đã ứng tuyển{' '}
            <span>({data && data.length ? data.length : 0})</span>
          </div>
        </Box>
        <div className="table-container">
          <table className="table">
            <thead
              className="table-light"
              style={{ fontSize: 15, fontWeight: '400' }}
            >
              <tr>
                <th
                  scope="col"
                  style={{ textAlign: 'left', paddingLeft: '24px' }}
                >
                  Công việc
                </th>
                <th scope="col">Ngày ứng tuyển</th>
                <th scope="col">Trạng thái</th>
                <th scope="col">Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {currentResults.map((jobItem, index) => (
                <tr>
                  <th>
                    <JobItem jobItem={jobItem}></JobItem>
                  </th>
                  <td style={{ verticalAlign: 'middle' }}>
                    {handleDate(jobItem.apply_at)}
                  </td>
                  <td
                    style={{
                      verticalAlign: 'middle',
                      color: 'green',
                      fontWeight: '700',
                    }}
                  >
                    <CheckIcon></CheckIcon>Đã gửi CV
                  </td>
                  <td style={{ verticalAlign: 'middle' }}>
                    <Link to={`/job/${jobItem.id}`}>
                      <button type="button" className="btn btn-primary">
                        Xem chi tiết
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '60px',
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
    </>
  );
};

export default AppliedJob;
