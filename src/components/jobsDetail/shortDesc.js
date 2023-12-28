import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Button, Grid } from '@mui/material';
import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { appliedJobState } from '../../recoil/appliedJobState';
import { handleDate } from '../../utils/handleDate';
import FormModal from '../FormModal/FormModal';
import { ReactComponent as MailSVG } from './mail.svg';
import { ReactComponent as PhoneSVG } from './phone.svg';
import { ReactComponent as UrlSVG } from './url.svg';
const ShortDesc = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const appliedJobs = useRecoilValue(appliedJobState);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const expiredDate = handleDate(data.expired_at);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const isApplied = appliedJobs.find((job) => job.id === data.id);

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
        <div style={{ marginLeft: 200, fontWeight: 600, fontSize: 21 }}>
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
        <Grid container spacing={2} style={{ marginLeft: 190 }}>
          <Grid item xs={9.1}>
            <Box sx={{ height: 96, width: 790 }}>
              <Grid container>
                <Grid item xs={2}>
                  <Box sx={{ width: 96, height: 96 }}>
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
                                marginLeft: 1,
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
                        {data.jobTypeRelations?.map((jobType, index) => (
                          <Grid item key={index}>
                            <Box
                              sx={{
                                marginLeft: 1,
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
                              {jobType.type.name}
                            </Box>
                          </Grid>
                        ))}
                      </Grid>
                    </Box>
                    <Box sx={{ marginTop: 2 }}>
                      <Grid container>
                        <Grid item>
                          <Box>
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
          <Grid item>
            <Box sx={{ position: 'relative', height: 88, width: 248 }}>
              <Button
                variant="contained"
                sx={{
                  width: 248,
                  height: 50,
                  fontSize: 14,
                  textTransform: 'none',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onClick={handleOpenModal}
                disabled={isApplied}
              >
                {isApplied ? (
                  <span>Đã ứng tuyển</span>
                ) : (
                  <>
                    <span>Ứng Tuyển Ngay</span>
                    <ArrowForwardIcon sx={{ marginLeft: 2 }} />
                  </>
                )}
              </Button>
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
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
