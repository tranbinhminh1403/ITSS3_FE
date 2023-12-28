import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../App.css';
import HomeSkeletonLoading from '../components/Loading/HomeSkeletonLoading';
import JobsList from '../components/jobsList/jobsList';
import SearchBarLayout from '../layouts/SearchBarLayout/SearchBarLayout';
import { baseURL } from '../utils/baseUrl';

export default function HomePage() {
  const [jobsList, setJobsList] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getJobData();
  }, []);

  const getJobData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${baseURL}jobs`);
      const jobs = response.data;
      setJobsList(jobs);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <div className="body">
        <SearchBarLayout>
          {loading ? <HomeSkeletonLoading /> : <JobsList jobsList={jobsList} />}
        </SearchBarLayout>
      </div>
    </div>
  );
}
