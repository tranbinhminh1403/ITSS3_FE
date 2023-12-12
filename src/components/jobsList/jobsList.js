import React, { useState } from 'react';
import jobData from './testData.json'; //test data
import RecJobs from './jobRec';
import { Pagination, PaginationItem } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const JobsList = () => {
  const jobsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobData.slice(indexOfFirstJob, indexOfLastJob);

  const totalPages = Math.ceil(jobData.length / jobsPerPage);

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div style={{ margin: '0 10%', marginTop: 30, marginBottom: 30 }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', minHeight: 600 }}>
        {currentJobs.map((job) => (
          <div
            key={job.jobId}
            style={{
              flex: '0 0 31%',
              margin: 10,
              marginBottom: 20,
              marginTop: 10,
            }}
          >
            <RecJobs
              company={job.company}
              hustPartner={job.hustPartner}
              address={job.address}
              jobTitle={job.jobTitle}
              jobType={job.jobType}
              salary={job.salary}
            />
          </div>
        ))}
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
