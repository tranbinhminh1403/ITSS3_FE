import React, { useEffect, useState } from 'react';
import jobData from './testData.json'; //test data
import RecJobs from './jobRec';
import { Pagination, PaginationItem } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

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
        margin: '0 9.5%',
        marginTop: 30,
        marginBottom: 30,
        marginRight: 100,
      }}
    >
      <div style={{ display: 'flex', flexWrap: 'wrap', minHeight: 600 }}>
        {currentJobs?.map((job) => {
          return (
            <div
              key={job.id}
              style={{
                flex: '0 0 30%',
                margin: 10,
                marginBottom: 20,
                marginTop: 10,
                marginLeft: 18,
              }}
            >
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
              />
            </div>
          );
        })}
      </div>

      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}
      >
        <Pagination
          sx={{ paddingBottom: 6 }}
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
