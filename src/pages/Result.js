import Header from '../components/HeaderFooter/Header';
import SearchBar from '../components/SearchBar/SearchBar';
import Footer from '../components/HeaderFooter/Footer';
import JobResult from '../components/JobResultItem/jobResult';
import { useLocation } from 'react-router-dom';

export default function Result() {
  const location = useLocation();
  const { data } = location.state;
  return (
    <div>
      <Header />
      <SearchBar />
      <JobResult propData={data} />
      {/* <Footer /> */}
    </div>
  );
}
