import { Box, Grid } from '@mui/material';
import React from 'react';
import JobCardDesc from './jobCard';

const JobsDetail = ({ data }) => {
  return (
    <div>
      <style>
        {`
          li {
            list-style: inside;
            padding-top: 1rem;
          }

          ol, ul {
            padding-left: 1rem;
          }
        `}
      </style>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          textAlign: 'left',
          justifyContent: 'space-between',
        }}
      >
        <Grid container spacing={7} style={{ marginLeft: 150 }}>
          <Grid item xs={7}>
            <Grid item xs={4} sx={{ fontSize: 20, fontWeight: 700 }}>
              <Box sx={{ marginBottom: '10px' }}>Nội dung công việc</Box>
            </Grid>
            <Box
              dangerouslySetInnerHTML={{ __html: data.description }}
              sx={{
                fontSize: 16,
              }}
            />
            <Grid item xs={4} sx={{ fontSize: 20, fontWeight: 700 }}>
              <Box sx={{ marginLeft: 0 }}>Yêu cầu công việc</Box>
            </Grid>
            <Box
              dangerouslySetInnerHTML={{ __html: data.requirements }}
              sx={{
                fontSize: 16,
              }}
            />
            <Grid item xs={4} sx={{ fontSize: 20, fontWeight: 700 }}>
              <Box sx={{ marginLeft: 0 }}>Quyền lợi</Box>
            </Grid>
            <Box
              dangerouslySetInnerHTML={{ __html: data.advantages }}
              sx={{
                fontSize: 16,
              }}
            />
          </Grid>

          <Grid item>
            <Box>
              <JobCardDesc jobCardData={data} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default JobsDetail;
