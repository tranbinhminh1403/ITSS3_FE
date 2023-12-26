import Footer from '../components/HeaderFooter/Footer';
import Header from '../components/HeaderFooter/Header';
import JobsList from '../components/jobsList/jobsList';
import '../App.css';
import SearchBar from '../components/SearchBar/SearchBar';

export default function HomePage() {
  return (
    <div className="App">
      <div className="body">
        <Header activeNav={0} />
        <SearchBar />
        <JobsList />
        <Footer marginTop={0} />
      </div>
    </div>
  );
}
