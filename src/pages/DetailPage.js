import '../App.css';
import Footer from '../components/HeaderFooter/Footer';
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
        <Footer/>
      </div>
    </div>
  );
}
