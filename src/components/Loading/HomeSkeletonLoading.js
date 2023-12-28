import Skeleton from '@mui/material/Skeleton';
import React from 'react';
export default function HomeSkeletonLoading() {
  return (
    <div
      className="row"
      style={{
        marginTop: '40px',
        padding: '0 11%',
      }}
    >
      <div className="col-md-4 mb-4">
        <Skeleton variant="rectangular" height={240} />
      </div>
      <div className="col-md-4 mb-4">
        <Skeleton variant="rectangular" height={240} />
      </div>
      <div className="col-md-4 mb-4">
        <Skeleton variant="rectangular" height={240} />
      </div>
      <div className="col-md-4 mb-4">
        <Skeleton variant="rectangular" height={240} />
      </div>
      <div className="col-md-4 mb-4">
        <Skeleton variant="rectangular" height={240} />
      </div>
      <div className="col-md-4 mb-4">
        <Skeleton variant="rectangular" height={240} />
      </div>
    </div>
  );
}
