import { Box, Button, Grid } from '@mui/material';
import React from 'react';
import JobCardDesc from './jobCard';
import jobData from './fake.json';

const JobsDetail = () => {
  return (
    <div>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Grid container style={{ marginLeft: 128 }}>
          <Grid item xs={6.5}>
            <Box
              sx={{ paddingRight: 2 }}
              dangerouslySetInnerHTML={{ __html: jobData.job1.jobDesc }}
            ></Box>
          </Grid>

          <Grid item>
            <Box>
              <JobCardDesc />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default JobsDetail;
