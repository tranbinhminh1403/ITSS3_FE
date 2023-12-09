import { Box, Grid } from '@mui/material';
import React from 'react';
import PlaceIcon from '@mui/icons-material/Place';

const RecJobs = (props) => {
  // Destructure the props to get the values
  const { company, hustPartner, address, jobTitle, jobType, salary } = props;

  return (
    <div>
      <Box
        sx={{
          border: 0,
          borderRadius: 2,
          boxShadow: 8,
          width: 385,
          height: 170,
          flexGrow: 1,
          background: '#FFFFFF',
        }}
      >
        <Grid container spacing={2}>
          {/* first line */}
          <Grid item xs={4} sx={{  }}>
            <Box sx={{border: 0, height: 50, width: 50, marginLeft: 5}}>
            <img
              src="https://cdn.donmai.us/720x720/95/0e/950e84cc0bd3eae90d519e2ac0eb00af.webp"  // Replace with your actual image source
              alt="Job Picture"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            </Box>

          </Grid>
          <Grid item xs={8}>
            <Grid container >
              <Grid item xs={6}  sx={{ fontSize: 10, fontWeight: 1000 }}>
                <Box sx={{marginLeft:0, textAlign: 'left'}}>
                  {company}
                </Box>
              </Grid>

              {hustPartner ? (
                <Grid
                  item
                  xs={4}
                  sx={{
                    background: '#FEECED',
                    fontSize: 10,
                    color: 'red',
                    borderRadius: 5,
                  }}
                >
                  <Box sx={{ margin: 0.4 }}>HUST partner</Box>
                </Grid>
              ) : (
                <Grid item xs={4}></Grid>
              )}

              <Grid sx={{}}>
                <Box sx={{ color: '#D1D3DB' }}><PlaceIcon fontSize='10px'/>{address}</Box>
              </Grid>
            </Grid>
          </Grid>

          {/* second line */}
          <Grid item xs={12}>
            <Box sx={{fontSize: 25, fontWeight: "bold", textAlign: 'left', marginLeft: 5}}>
              {jobTitle}
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box sx={{ textAlign: 'left', marginLeft: 5}}>
            {jobType}
            </Box>
            
          </Grid>
          <Grid item xs={8}>
            <Box sx={{ textAlign: 'left'}}>
            {salary}
            </Box>

          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default RecJobs;
