import { Box, Grid } from '@mui/material';
import React from 'react';
import JobCardDesc from './JobCardDesc';

const JobDetail = ({ data }) => {
  return (
    <div className="job-detail_container format-list-html">
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          textAlign: 'left',
          justifyContent: 'space-between',
        }}
      >
        <Grid
          spacing={5}
          sx={{
            display: 'flex',
            alignItems: 'start',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <Grid
            sx={{
              mr: 5,
              width: '60%',
            }}
          >
            <Grid item xs={4} sx={{ fontSize: 18, fontWeight: 700 }}>
              <Box sx={{ marginBottom: '10px' }}>Nội dung công việc</Box>
            </Grid>
            <Box
              dangerouslySetInnerHTML={{ __html: data.description }}
              sx={{
                fontSize: 16,
                textAlign: 'justify',
              }}
            />
            <Grid item xs={4} sx={{ fontSize: 18, fontWeight: 700 }}>
              <Box sx={{ marginLeft: 0 }}>Yêu cầu công việc</Box>
            </Grid>
            <Box
              dangerouslySetInnerHTML={{ __html: data.requirements }}
              sx={{
                fontSize: 16,
                textAlign: 'justify',
              }}
            />
            <Grid item xs={4} sx={{ fontSize: 18, fontWeight: 700 }}>
              <Box sx={{ marginLeft: 0 }}>Quyền lợi</Box>
            </Grid>
            <Box
              dangerouslySetInnerHTML={{ __html: data.advantages }}
              sx={{
                fontSize: 16,
                textAlign: 'justify',
              }}
            />
          </Grid>

          <Grid
            sx={{
              width: '40%',
            }}
          >
            <Box>
              <JobCardDesc jobCardData={data} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default JobDetail;
