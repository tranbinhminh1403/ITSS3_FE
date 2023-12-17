import Footer from '../components/HeaderFooter/Footer';
import Header from '../components/HeaderFooter/Header';
import JobsList from '../components/jobsList/jobsList';
import '../App.css';

export default function HomePage() {
  return (
    <div className="App">
      <div className="body">
        <Header />
        <JobsList />
        <Footer />
      </div>
    </div>
  );
}
