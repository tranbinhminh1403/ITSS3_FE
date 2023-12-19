import { Box, Grid } from '@mui/material';
import React from 'react';
import { ReactComponent as Icon11 } from './icon/icon11.svg';
import { ReactComponent as Icon12 } from './icon/icon12.svg';
import { ReactComponent as Icon13 } from './icon/icon13.svg';
import { ReactComponent as Icon21 } from './icon/icon21.svg';
import { ReactComponent as Icon22 } from './icon/icon22.svg';

const JobCardDesc = () => {
  return (
    <Box
      sx={{
        height: 475,
        width: 536,
        border: 2,
        borderColor: '#E7F0FA',
        borderRadius: '8px',
        padding: '32px',
      }}
    >
      <Box sx={{ width: 55, height: 32, fontSize: 20, fontWeight: 500 }}>
        Mô tả
      </Box>
      <Grid container sx={{ marginTop: 3, display: 'flex' }}>
        {/* 1 part */}
        <Grid item xs={4}>
          <Box
            sx={{
              flexDirection: 'column',
              alignItems: 'flex-start',
              minHeight: 110,
            }}
          >
            <Icon11 />
            <Box sx={{ color: '#767F8C', fontSize: 16, fontWeight: 400 }}>
              NGÀY ĐĂNG:
            </Box>
            <Box sx={{ fontWeight: 600, fontSize: 16 }}>14 June, 2021</Box>
          </Box>
        </Grid>

        <Grid item xs={4}>
          <Box
            sx={{
              flexDirection: 'column',
              alignItems: 'flex-start',
              minHeight: 110,
            }}
          >
            <Icon12 />
            <Box sx={{ color: '#767F8C', fontSize: 16, fontWeight: 400 }}>
              NGÀY HẾT HẠN:
            </Box>
            <Box sx={{ fontWeight: 600, fontSize: 16 }}>14 June, 2021</Box>
          </Box>
        </Grid>

        <Grid item xs={4}>
          <Box
            sx={{
              flexDirection: 'column',
              alignItems: 'flex-start',
              minHeight: 110,
            }}
          >
            <Icon13 />
            <Box sx={{ color: '#767F8C', fontSize: 16, fontWeight: 400 }}>
              HỌC VẤN:
            </Box>
            <Box sx={{ fontWeight: 600, fontSize: 16 }}>14 June, 2021</Box>
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
              minHeight: 110,
            }}
          >
            <Icon21 />
            <Box sx={{ color: '#767F8C', fontSize: 16, fontWeight: 400 }}>
              MỨC LƯƠNG:
            </Box>
            <Box sx={{ fontWeight: 600, fontSize: 16 }}>14 June, 2021</Box>
          </Box>
        </Grid>

        <Grid item xs={4}>
          <Box
            sx={{
              flexDirection: 'column',
              alignItems: 'flex-start',
              minHeight: 110,
            }}
          >
            <Icon22 />
            <Box sx={{ color: '#767F8C', fontSize: 16, fontWeight: 400 }}>
              ĐỊA ĐIỂM:
            </Box>
            <Box sx={{ fontWeight: 600, fontSize: 16 }}>14 June, 2021</Box>
          </Box>
        </Grid>

        <Grid item xs={4}>
          <Box
            sx={{
              flexDirection: 'column',
              alignItems: 'flex-start',
              minHeight: 110,
            }}
          >
            <Icon13 />
            <Box sx={{ color: '#767F8C', fontSize: 16, fontWeight: 400 }}>
              LOẠI HÌNH:
            </Box>
            <Box sx={{ fontWeight: 600, fontSize: 16 }}>14 June, 2021</Box>
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
              minHeight: 110,
            }}
          >
            <Icon13 />
            <Box sx={{ color: '#767F8C', fontSize: 16, fontWeight: 400 }}>
              KINH NGHIỆM:
            </Box>
            <Box sx={{ fontWeight: 600, fontSize: 16 }}>14 June, 2021</Box>
          </Box>
        </Grid>

        <Grid item xs={4}>
          <Box
            sx={{
              flexDirection: 'column',
              alignItems: 'flex-start',
              minHeight: 110,
            }}
          >
            <Icon13 />
            <Box sx={{ color: '#767F8C', fontSize: 16, fontWeight: 400 }}>
              LĨNH VỰC:
            </Box>
            <Box sx={{ fontWeight: 600, fontSize: 16 }}>14 June, 2021</Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default JobCardDesc;