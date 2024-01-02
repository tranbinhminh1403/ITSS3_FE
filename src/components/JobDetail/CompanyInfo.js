import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button } from '@mui/material';
import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { appliedJobState } from '../../recoil/appliedJobState';
import { handleDate } from '../../utils/handleDate';
import FormModal from '../FormModal/FormModal';
import { ReactComponent as MailSVG } from './mail.svg';
import { ReactComponent as PhoneSVG } from './phone.svg';
import './style.css';
import { ReactComponent as UrlSVG } from './url.svg';
const CompanyInfo = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const appliedJobs = useRecoilValue(appliedJobState);
  const [isApplied, setIsApplied] = useState(() =>
    appliedJobs.find((job) => job.jobId === data.id),
  );
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const expiredDate = handleDate(data.expired_at);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const propData = {
    jobId: data.id,
    jobTitle: data.title,
    companyEmail: data.company.email,
  };

  return (
    <>
      <div className="job-detail_container">
        <div className="company-info_container">
          <div className="company-logo">
            <img
              src={data.company?.logo_url}
              alt="Company Picture"
              className="company-logo-img"
            />
          </div>
          <div className="company-info">
            <div className="company-name_container">
              <div className="company-name">{data.title}</div>
              {data.company?.hust_partner ? (
                <div className="job-type hust-partner">HUST partner</div>
              ) : (
                <></>
              )}
              {data.jobTypeRelations?.map((jobType, index) => (
                <div className="job-type" key={index}>
                  {jobType.type.name}
                </div>
              ))}
            </div>
            <div className="company-contact_container">
              <div className="company-contact_item">
                <UrlSVG />
                <span className="company-contact_item_text">
                  {data.company?.website}
                </span>
              </div>

              <div className="company-contact_item">
                <PhoneSVG />
                <span className="company-contact_item_text">
                  {data.company?.phone_number}
                </span>
              </div>

              <div className="company-contact_item">
                <MailSVG />
                <span className="company-contact_item_text">
                  {data.company?.email}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="job-detail_apply">
          <Button
            className="job-detail_apply_button"
            variant="contained"
            onClick={handleOpenModal}
            disabled={isApplied}
          >
            {isApplied ? (
              <span>Đã ứng tuyển</span>
            ) : (
              <>
                <span>Ứng Tuyển Ngay</span>
                <ArrowForwardIcon sx={{ marginLeft: 2 }} />
              </>
            )}
          </Button>
          <div className="job-detail_expried">
            Ngày hết hạn: <span style={{ color: 'red' }}>{expiredDate}</span>
          </div>
        </div>
      </div>
      <FormModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        propData={propData}
        setIsApplied={setIsApplied}
      />
    </>
  );
};

export default CompanyInfo;
