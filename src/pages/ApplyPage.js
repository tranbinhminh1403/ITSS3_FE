import React from 'react';
import { useRecoilValue } from 'recoil';
import AppliedJob from '../components/AppliedJob/AppliedJob';
import Footer from '../components/HeaderFooter/Footer';
import Header from '../components/HeaderFooter/Header';
import { appliedJobState } from '../recoil/appliedJobState';
export default function AppliedPage() {
  const appliedJobs = useRecoilValue(appliedJobState);
  return (
    <div>
      <Header />
      <AppliedJob data={appliedJobs} />
      <Footer marginTop={60} />
    </div>
  );
}
