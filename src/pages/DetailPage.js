import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../components/HeaderFooter/Footer';
import Header from '../components/HeaderFooter/Header';
import JobsDetail from '../components/jobsDetail/jobsDetail';
import ShortDesc from '../components/jobsDetail/shortDesc';
import { baseURL } from '../utils/baseUrl';

export default function DetailPage() {
  const id = 1;
  const [jobData, setJobData] = useState(null);

  useEffect(() => {
    getSingleJobData();
  }, []);

  const getSingleJobData = async () => {
    try {
      const response = await axios.get(`${baseURL}jobs/${id}`);
      const job = response.data;
      setJobData(job);
    } catch (error) {
      console.log(error);
    }
  };

  if (!jobData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <div className="body">
        <Header />
        <ShortDesc data={jobData} />
        <JobsDetail data={jobData} />
        <div className="spacer" style={{ flex: 1 }} />
        <Footer />
      </div>
    </div>
  );
}
