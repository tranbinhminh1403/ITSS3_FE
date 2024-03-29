import { Box, Grid } from '@mui/material';
import React from 'react';
import formatNumberWithPeriods from '../../utils/formatNumber';
import { handleDate } from '../../utils/handleDate';
import { ReactComponent as Icon11 } from './icon/icon11.svg';
import { ReactComponent as Icon12 } from './icon/icon12.svg';
import { ReactComponent as Icon13 } from './icon/icon13.svg';
import { ReactComponent as Icon21 } from './icon/icon21.svg';
import { ReactComponent as Icon22 } from './icon/icon22.svg';

const JobCardDesc = ({ jobCardData }) => {
  const createdDate = handleDate(jobCardData.updated_at);

  const expiredDate = handleDate(jobCardData.expired_at);

  const formattedSalaryMin = formatNumberWithPeriods(jobCardData.salary_min);

  const formattedSalaryMax = formatNumberWithPeriods(jobCardData.salary_max);

  return (
    <Box
      sx={{
        height: 400,
        width: 500,
        border: 2,
        borderColor: '#E7F0FA',
        borderRadius: '8px',
        padding: '16px 24px',
      }}
    >
      <Box sx={{ width: 55, height: 32, fontSize: 18, fontWeight: 700 }}>
        Mô tả
      </Box>
      <Grid container sx={{ marginTop: 3, display: 'flex' }}>
        {/* 1 part */}
        <Grid item xs={4}>
          <Box
            sx={{
              flexDirection: 'column',
              alignItems: 'flex-start',
              minHeight: 80,
            }}
          >
            <Icon11 />
            <Box sx={{ color: '#767F8C', fontSize: 12, fontWeight: 400 }}>
              NGÀY ĐĂNG:
            </Box>
            <Box sx={{ fontWeight: 500, fontSize: 14 }}>{createdDate}</Box>
          </Box>
        </Grid>

        <Grid item xs={4}>
          <Box
            sx={{
              flexDirection: 'column',
              alignItems: 'flex-start',
              minHeight: 80,
            }}
          >
            <Icon12 />
            <Box sx={{ color: '#767F8C', fontSize: 12, fontWeight: 400 }}>
              NGÀY HẾT HẠN:
            </Box>
            <Box sx={{ fontWeight: 500, fontSize: 14 }}>{expiredDate}</Box>
          </Box>
        </Grid>

        <Grid item xs={4}>
          <Box
            sx={{
              flexDirection: 'column',
              alignItems: 'flex-start',
              minHeight: 80,
            }}
          >
            <Icon13 />
            <Box sx={{ color: '#767F8C', fontSize: 12, fontWeight: 400 }}>
              SỐ LƯỢNG TUYỂN:
            </Box>
            <Box sx={{ fontWeight: 500, fontSize: 14 }}>
              {Math.floor(Math.random() * 4) + 1} người
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Grid container sx={{ marginTop: 3, display: 'flex' }}>
        {/* 1 part */}
        <Grid item xs={4}>
          <Box
            sx={{
              flexDirection: 'column',
              alignItems: 'flex-start',
              minHeight: 80,
            }}
          >
            <Icon21 />
            <Box sx={{ color: '#767F8C', fontSize: 12, fontWeight: 400 }}>
              MỨC LƯƠNG:
            </Box>
            <Box sx={{ fontWeight: 500, fontSize: 14 }}>
              {formattedSalaryMin} VND - {formattedSalaryMax} VND
            </Box>
          </Box>
        </Grid>

        <Grid item xs={4}>
          <Box
            sx={{
              flexDirection: 'column',
              alignItems: 'flex-start',
              minHeight: 80,
            }}
          >
            <Icon22 />
            <Box sx={{ color: '#767F8C', fontSize: 12, fontWeight: 400 }}>
              ĐỊA ĐIỂM:
            </Box>
            <Box sx={{ fontWeight: 500, fontSize: 14 }}>
              {jobCardData.job_location}
            </Box>
          </Box>
        </Grid>

        <Grid item xs={4}>
          <Box
            sx={{
              flexDirection: 'column',
              alignItems: 'flex-start',
              minHeight: 80,
            }}
          >
            <Icon13 />
            <Box sx={{ color: '#767F8C', fontSize: 12, fontWeight: 400 }}>
              HỌC VẤN:
            </Box>
            <Box sx={{ fontWeight: 500, fontSize: 14 }}>Đại học</Box>
          </Box>
        </Grid>
      </Grid>

      <Grid container sx={{ marginTop: 3, display: 'flex' }}>
        {/* 1 part */}
        <Grid item xs={4}>
          <Box
            sx={{
              flexDirection: 'column',
              alignItems: 'flex-start',
              minHeight: 80,
            }}
          >
            <Icon13 />
            <Box sx={{ color: '#767F8C', fontSize: 12, fontWeight: 400 }}>
              KINH NGHIỆM:
            </Box>
            <Box sx={{ fontWeight: 500, fontSize: 14 }}>
              {jobCardData.years_of_experience} Năm
            </Box>
          </Box>
        </Grid>

        <Grid item xs={4}>
          <Box
            sx={{
              flexDirection: 'column',
              alignItems: 'flex-start',
              minHeight: 80,
            }}
          >
            <Icon13 />
            <Box sx={{ color: '#767F8C', fontSize: 12, fontWeight: 400 }}>
              LOẠI HÌNH:
            </Box>
            <Box sx={{ fontWeight: 500, fontSize: 14 }}>
              {jobCardData.jobTypeRelations[0].type.name}
            </Box>
          </Box>
        </Grid>

        <Grid item xs={4}>
          <Box
            sx={{
              flexDirection: 'column',
              alignItems: 'flex-start',
              minHeight: 80,
            }}
          >
            <Icon13 />
            <Box sx={{ color: '#767F8C', fontSize: 12, fontWeight: 400 }}>
              LĨNH VỰC:
            </Box>
            <Box sx={{ fontWeight: 500, fontSize: 14 }}>
              {jobCardData.majors.name}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default JobCardDesc;
