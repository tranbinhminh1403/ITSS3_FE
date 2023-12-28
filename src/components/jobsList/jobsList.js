import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Pagination, PaginationItem } from '@mui/material';
import React, { useState } from 'react';
import RecJobs from './jobRec';

const JobsList = ({ jobsList }) => {
  const jobsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobsList.slice(indexOfFirstJob, indexOfLastJob);

  const totalPages = Math.ceil(jobsList.length / jobsPerPage);

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div
      style={{
        margin: '0 10%',
        marginTop: 40,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          minHeight: 600,
          width: '100%',
        }}
      >
        {currentJobs?.map((job) => {
          return (
            <RecJobs
              id={job.id}
              company={job.company.name}
              hustPartner={job.company.hust_partner}
              address={job.job_location}
              jobTitle={job.title}
              logo_url={job.company.logo_url}
              jobType={job.jobTypeRelations[0]?.type.name}
              salaryMin={job.salary_min}
              salaryMax={job.salary_max}
              key={job.id}
            />
          );
        })}
      </div>

      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}
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
};

export default JobsList;
