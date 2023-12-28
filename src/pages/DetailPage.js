import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/HeaderFooter/Footer';
import Header from '../components/HeaderFooter/Header';
import CompanyInfo from '../components/JobDetail/CompanyInfo';
import JobDetail from '../components/JobDetail/JobDetail';
import { baseURL } from '../utils/baseUrl';
export default function DetailPage() {
  const { id } = useParams();
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
        <div
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            height: 76,
            backgroundColor: '#F1F2F4',
            padding: '0 10%',
          }}
        >
          <div style={{ fontWeight: 500, fontSize: 20 }}>
            Chi tiết công việc
          </div>
        </div>
        <CompanyInfo data={jobData} />
        <JobDetail data={jobData} />
        <Footer marginTop={100} />
      </div>
    </div>
  );
}
