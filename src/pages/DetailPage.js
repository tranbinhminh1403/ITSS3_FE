import '../App.css';
import Header from '../components/HeaderFooter/Header';
import JobsDetail from '../components/jobsDetail/jobsDetail';
import ShortDesc from '../components/jobsDetail/shortDesc';

export default function DetailPage() {
  return (
    <div className="App">
      <div className="body">
        <Header />
        <ShortDesc/>
        <JobsDetail/>
      </div>
    </div>
  );
}
