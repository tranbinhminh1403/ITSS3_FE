import { useLocation } from 'react-router-dom';
import JobResult from '../components/JobResultItem/jobResult';
import ResultSkeletonLoading from '../components/Loading/ResultSkeletonLoading';
import useFetchAllJobs from '../hooks/useFetchAllJobs';
import SearchBarLayout from '../layouts/SearchBarLayout/SearchBarLayout';
export default function Result() {
  const location = useLocation();
  let data = [];
  let loading = true;
  if (location.state && location.state.data) {
    data = location.state.data;
    loading = false;
  } else {
    const { jobs, isLoading } = useFetchAllJobs();
    data = jobs;
    loading = isLoading;
  }
  return (
    <SearchBarLayout>
      {loading ? <ResultSkeletonLoading /> : <JobResult propData={data} />}
    </SearchBarLayout>
  );
}
