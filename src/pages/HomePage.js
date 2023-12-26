import Footer from '../components/HeaderFooter/Footer';
import Header from '../components/HeaderFooter/Header';
import JobsList from '../components/jobsList/jobsList';
import '../App.css';
import SearchBar from '../components/SearchBar/SearchBar';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { baseURL } from '../utils/baseUrl';

export default function HomePage() {
  const [jobsList, setJobsList] = useState([]);

  useEffect(() => {
    getJobData();
  }, []);

  const getJobData = async () => {
    try {
      const response = await axios.get(`${baseURL}jobs`);
      const jobs = response.data;
      setJobsList(jobs);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchResponse = (responseData) => {
    setJobsList(responseData);
  };

  return (
    <div className="App">
      <div className="body">
        <Header activeNav={0} />
        <SearchBar onSearchResponse={handleSearchResponse} />
        <JobsList jobsList={jobsList} />
        <Footer marginTop={0} />
      </div>
    </div>
  );
}
