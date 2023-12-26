import Header from '../components/HeaderFooter/Header';
import Footer from '../components/HeaderFooter/Footer';
import AppliedJob from '../components/AppliedJob/AppliedJob';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { baseURL } from '../utils/baseUrl';

export default function AppliedPage() {
  const [appliedJob, setAppliedJob] = useState([]);

  const userId = 1;
  useEffect(() => {
    getAppliedJobData();
  }, []);

  const getAppliedJobData = async () => {
    try {
      const response = await axios.get(`${baseURL}apply/${userId}`);
      const jobs = response.data;
      setAppliedJob(jobs);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header activeNav={2} />
      <AppliedJob data={appliedJob} />
      <Footer marginTop={20} />
    </div>
  );
}
