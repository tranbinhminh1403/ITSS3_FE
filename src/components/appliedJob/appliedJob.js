import { Icon, Pagination, PaginationItem } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { ReactComponent as IconSvg } from '../../assets/icon.svg';
import { ReactComponent as DolarSvg } from '../../assets/dolar.svg';
import { ReactComponent as CalendarSvg } from '../../assets/calendar.svg';
import { ReactComponent as ArrowRight } from '../../assets/arrowRight.svg';
import formatNumberWithPeriods from '../../utils/formatNumber';
import CheckIcon from '@mui/icons-material/Check';
import { useState } from 'react';
import './style.css'

const JobItem = ({ jobItem }) => {
    const formattedSalaryMin = formatNumberWithPeriods((jobItem && jobItem.salary_min ? jobItem.salary_min : 0) * 1000);
    const formattedSalaryMax = formatNumberWithPeriods((jobItem && jobItem.salary_max ? jobItem.salary_max : 0) * 1000);
    
    return (
        <div className="job-detail-left">
          <div className="avt-company">
            {/* <IconAvt/> */}
            <img
              className="avt-company-img"
              src={jobItem ? jobItem.company.logo_url : "data:image/png;base64,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"}
              alt="avatar company"
            />
          </div>
          <div className="job-info">
            <div className="job-info-top" style={{ marginBottom: '8px' }}>
              <div
                className="job-name"
                style={{ fontSize: '18px', fontWeight: 500 }}
              >
                {jobItem ? jobItem.title : "UNDEFINE"}
              </div>
              {jobItem && jobItem.company.hust_partner ? (
                <div className="job-type">
                  <div className="job-hust">
                    <p className="job-txt-1">HUST Partner</p>
                  </div>
                </div>
              ) : null}
              {jobItem && jobItem.jobTypeRelations?.map((jobType, index) => (
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
                <IconSvg /> {jobItem ? jobItem.job_location : "undefine"}
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
                <DolarSvg /> {formattedSalaryMin ?? ""} VND - {formattedSalaryMax ?? ""} VND
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
    const currentResults = data ? data.slice(indexOfFirstJob, indexOfLastJob) : [];

    const totalPages = data ? Math.ceil(data.length / resultPerPage) : 0;

    const handlePageChange = (event, newPage) => {
        setCurrentPage(newPage);
    };
    return (
        <div>
            <div className="main-container">
                <h5 style={{textAlign: 'left', marginBottom: '20px'}}>Công việc đã ứng tuyển <span style={{fontWeight: '350'}}>({data && data.length ? data.length : 0})</span></h5>
                <table className="table">
                    <thead className="table-light">
                        <tr>
                            <th scope="col" style={{ textAlign: 'left', paddingLeft: '24px'}}>Công việc</th>
                            <th scope="col">Ngày ứng tuyển</th>
                            <th scope="col">Trạng thái</th>
                            <th scope="col">Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentResults.map((jobItem, index) => (
                            <tr>
                                <th><JobItem jobItem={jobItem}></JobItem></th>
                                <td style={{verticalAlign: 'middle'}}>test</td>
                                <td style={{verticalAlign: 'middle', color: 'green', fontWeight: '700'}}><CheckIcon></CheckIcon>Đã gửi CV</td>
                                <td style={{verticalAlign: 'middle'}}><button type="button" className="btn btn-primary">Xem chi tiết</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div
                style={{ display: 'flex', justifyContent: 'center', marginTop: '600px' }}
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

export default AppliedJob