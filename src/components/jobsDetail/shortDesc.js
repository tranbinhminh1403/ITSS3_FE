import { Box, Button, Grid } from '@mui/material';
import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { ReactComponent as UrlSVG } from './url.svg';
import { ReactComponent as PhoneSVG } from './phone.svg';
import { ReactComponent as MailSVG } from './mail.svg';
import FormModal from '../FormModal/FormModal';
import { useState } from 'react';
import { handleDate } from '../../utils/handleDate';

const ShortDesc = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const expiredDate = handleDate(data.expired_at);
  
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const propData = {
    jobId: data.id,
    jobTitle: data.title,
    companyEmail: data.company.email,
  };

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
                  >
                    <img
                      src={data.company?.logo_url} // Replace with your actual image source
                      alt="Company Picture"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </Box>
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
                            {data.title}
                          </Box>
                        </Grid>
                        <Grid item>
                          {data.company?.hust_partner ? (
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
                          ) : (
                            <></>
                          )}
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
                            {data.jobTypeRelations[0]?.type.name}
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                    <Box sx={{ marginTop: 1 }}>
                      <Grid container>
                        <Grid item>
                          <Box sx={{ marginLeft: 1 }}>
                            <UrlSVG /> {data.company?.website}
                          </Box>
                        </Grid>

                        <Grid item>
                          <Box sx={{ marginLeft: 1 }}>
                            <PhoneSVG /> {data.company?.phone_number}
                          </Box>
                        </Grid>

                        <Grid item>
                          <Box sx={{ marginLeft: 1 }}>
                            <MailSVG /> {data.company?.email}
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
                onClick={handleOpenModal}
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
                <span style={{ color: 'red' }}>{expiredDate}</span>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <FormModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        propData={propData}
      />
    </div>
  );
};

export default ShortDesc;
