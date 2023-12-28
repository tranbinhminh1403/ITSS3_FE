import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import React from 'react';
export default function ResultSkeletonLoading() {
  return (
    <Stack spacing={2} className="w-100 d-flex align-items-center mt-4">
      <div
        style={{
          width: '78%',
        }}
      >
        <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={'25%'} />
      </div>
      <Skeleton variant="rectangular" width={'78%'} height={140} />
      <Skeleton variant="rectangular" width={'78%'} height={140} />
      <Skeleton variant="rectangular" width={'78%'} height={140} />
      <Skeleton variant="rectangular" width={'78%'} height={140} />
    </Stack>
  );
}
