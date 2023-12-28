import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { userInfo } from '../constants/userInfo';
import { appliedJobState } from '../recoil/appliedJobState';
import { baseURL } from '../utils/baseUrl';
export default function useFetchAppliedJobs() {
  const [appliedJobs, setAppliedJobs] = useRecoilState(appliedJobState);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`${baseURL}apply/${userInfo.id}`);
        setAppliedJobs(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return [appliedJobs, isLoading];
}
