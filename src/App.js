import logo from './logo.svg';
import './App.css';
import JobsList from './components/jobsList/jobsList';
import SearchBar from './components/SearchBar/SearchBar';
import Header from './components/HeaderFooter/Header';
import Footer from './components/HeaderFooter/Footer';

function App() {
  return (
    <div className="App">
      <div className="body">
        <Header />
        <div className="container">
          <SearchBar />
        </div>
        <JobsList />
        <Footer />
      </div>
    </div>
  );
}

export default App;
