import axios from 'axios';
import { useEffect, useState } from 'react';
import { baseURL } from '../utils/baseUrl';
export default function useFetchAllJobs() {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getJobs = async () => {
      try {
        const response = await axios.get(`${baseURL}jobs`);
        const jobs = response.data;
        setJobs(jobs);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getJobs();
  }, []);

  return { jobs, isLoading };
}
