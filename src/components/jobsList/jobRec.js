import { Box, Grid } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as IconSvg } from '../../assets/icon.svg';
import formatNumberWithPeriods from '../../utils/formatNumber';

const RecJobs = (props) => {
  // Destructure the props to get the values
  const {
    id,
    company,
    hustPartner,
    address,
    jobTitle,
    jobType,
    salaryMin,
    salaryMax,
    logo_url,
  } = props;

  const navigate = useNavigate();

  const formattedSalaryMin = formatNumberWithPeriods(salaryMin);

  const formattedSalaryMax = formatNumberWithPeriods(salaryMax);

  const handleJobClick = () => {
    navigate(`/job/${id}`);
  };

  return (
    <Box
      sx={{
        border: 1,
        borderRadius: 2,
        borderColor: '#FFFFFF',
        boxShadow: 3,
        flex: '1 0 30%',
        margin: '0 10px 20px 10px',
        maxWidth: 'calc(30% + 20px)',
        height: 180,
        flexGrow: 1,
        background: '#FFFFFF',
        cursor: 'pointer',
        '&:hover': {
          background: '#F5F5F5',
        },
      }}
      onClick={handleJobClick}
    >
      <Grid container spacing={2}>
        {/* first line */}
        <Grid item xs={3} sx={{}}>
          <Box
            sx={{
              border: 0,
              height: 48,
              width: 48,
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
                <IconSvg /> {address}
              </Box>
            </Grid>
          </Grid>
        </Grid>
        {/* second line */}
        <Grid item xs={12}>
          <Box
            sx={{
              fontSize: 18,
              fontWeight: 600,
              textAlign: 'left',
              marginLeft: 3.5,
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 1,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {jobTitle}
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box sx={{ textAlign: 'left', marginLeft: 3.5, fontSize: 14 }}>
            {jobType}
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Box sx={{ textAlign: 'left', fontSize: 14, color: '#939AAD' }}>
            {formattedSalaryMin} VND - {formattedSalaryMax} VND
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RecJobs;
