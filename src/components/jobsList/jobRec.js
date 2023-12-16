import { Box, Grid } from '@mui/material';
import React from 'react';
import PlaceIcon from '@mui/icons-material/Place';
import { ReactComponent as IconSvg } from './icon.svg';

const RecJobs = (props) => {
  // Destructure the props to get the values
  const {
    company,
    hustPartner,
    address,
    jobTitle,
    jobType,
    salaryMin,
    salaryMax,
    logo_url,
  } = props;

  return (
    <div style={{}}>
      <Box
        sx={{
          border: 1,
          borderRadius: 2,
          borderColor: '#FFFFFF',
          boxShadow: 5,
          width: 380,
          height: 190,
          flexGrow: 1,
          background: '#FFFFFF',
          '&:hover': {
            border: 'solid #005eff', // Blue border on hover
          },
        }}
      >
        <Grid container spacing={2}>
          {/* first line */}
          <Grid item xs={3} sx={{}}>
            <Box
              sx={{
                border: 0,
                height: 60,
                width: 60,
                marginLeft: 3.5,
                marginTop: 2,
              }}
            >
              <img
                src={logo_url} // Replace with your actual image source
                alt="Job Picture"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </Box>
          </Grid>
          <Grid item xs={8} sx={{ marginTop: 2.5, marginLeft: 1 }}>
            <Grid container>
              <Grid item xs={4} sx={{ fontSize: 16, fontWeight: 500 }}>
                <Box sx={{ marginLeft: 0, textAlign: 'left' }}>{company}</Box>
              </Grid>

              {hustPartner ? (
                <Grid
                  item
                  xs={6}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#FEECED',
                    fontSize: 10,
                    color: 'red',
                    borderRadius: 5,
                    maxHeight: 25,
                  }}
                >
                  <Box
                    sx={{
                      margin: 0.4,
                      textAlign: 'center',
                      fontSize: 14,
                      fontWeight: 500,
                    }}
                  >
                    HUST partner
                  </Box>
                </Grid>
              ) : (
                <Grid item xs={6}></Grid>
              )}

              <Grid sx={{ marginTop: 1 }}>
                <Box sx={{ color: '#939AAD' }}>
                <IconSvg/>{" "}
                  {address}
                </Box>
              </Grid>
            </Grid>
          </Grid>

          {/* second line */}
          <Grid item xs={12}>
            <Box
              sx={{
                fontSize: 20,
                fontWeight: 'bold',
                textAlign: 'left',
                marginLeft: 3.5,
              }}
            >
              {jobTitle}
            </Box>
          </Grid>
          <Grid item xs={5}>
            <Box sx={{ textAlign: 'left', marginLeft: 3.5 }}>{jobType}</Box>
          </Grid>
          <Grid item xs={7}>
            <Box sx={{ textAlign: 'left' }}>
              {salaryMin} VND - {salaryMax} VND
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default RecJobs;
