import { Box, Button, Grid } from '@mui/material';
import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { ReactComponent as UrlSVG } from './url.svg';
import { ReactComponent as PhoneSVG } from './phone.svg';
import { ReactComponent as MailSVG } from './mail.svg';

const ShortDesc = () => {
  return (
    <div>
      <Box
        sx={{
          height: 76,
          backgroundColor: '#F1F2F4',
          textAlign: 'left',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div style={{ marginLeft: 140, fontWeight: 600, fontSize: 21 }}>
          Chi tiết công việc
        </div>
      </Box>
      <Box
        sx={{
          height: 160,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Grid container spacing={2} style={{ marginLeft: 128 }}>
          <Grid item xs={8}>
            <Box sx={{ height: 96, width: 711 }}>
              <Grid container>
                <Grid item xs={2}>
                  <Box
                    sx={{ width: 96, height: 96, border: 1, borderRadius: 50 }}
                  ></Box>
                </Grid>

                <Grid item xs={10}>
                  <Box sx={{ height: 96 }}>
                    <Box sx={{ textAlign: 'left', marginTop: 1 }}>
                      <Grid
                        container
                        sx={{ display: 'flex', alignItems: 'center' }}
                      >
                        <Grid item>
                          <Box sx={{ fontSize: 24, fontWeight: 500 }}>
                            Senior UX Designer
                          </Box>
                        </Grid>
                        <Grid item>
                          <Box
                            sx={{
                              marginLeft: 2,
                              background: '#FEECED',
                              color: 'red',
                              border: 0,
                              borderRadius: 5,
                              paddingTop: 0.5,
                              paddingBottom: 0.5,
                              paddingLeft: 1,
                              paddingRight: 1,
                            }}
                          >
                            Hust partner
                          </Box>
                        </Grid>
                        <Grid item>
                          <Box
                            sx={{
                              marginLeft: 2,
                              background: '#E8F1FF',
                              color: 'blue',
                              border: 0,
                              borderRadius: 5,
                              paddingTop: 0.5,
                              paddingBottom: 0.5,
                              paddingLeft: 1,
                              paddingRight: 1,
                            }}
                          >
                            Toàn thời gian
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                    <Box sx={{ marginTop: 1 }}>
                      <Grid container>
                        <Grid item>
                          <Box sx={{ marginLeft: 1 }}>
                            <UrlSVG />
                          </Box>
                        </Grid>

                        <Grid item>
                          <Box sx={{ marginLeft: 1 }}>
                            <PhoneSVG />
                          </Box>
                        </Grid>

                        <Grid item>
                          <Box sx={{ marginLeft: 1 }}>
                            <MailSVG />
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>

          <Grid item xs={4}>
            <Box sx={{ position: 'relative', height: 88, width: 248 }}>
              <Button
                variant="contained"
                sx={{
                  width: 248,
                  height: 50,
                  fontSize: 14,
                  textTransform: 'none',
                }}
              >
                {' '}
                Ứng Tuyển Ngay <ArrowForwardIcon sx={{ marginLeft: 2 }} />
              </Button>
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  margin: '10px',
                }}
              >
                Ngày hết hạn:{' '}
                <span style={{ color: 'red' }}>June 30, 2021</span>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default ShortDesc;
