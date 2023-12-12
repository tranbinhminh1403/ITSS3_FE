import logo from './logo.svg';
import './App.css';
import JobsList from './components/jobsList/jobsList';
import SearchBar from './components/SearchBar/SearchBar';
import Header from './components/HeaderFooter/Header';
import Footer from './components/HeaderFooter/Footer';

function App() {
  return (
    <div className="App">
      
      <div className="container_body">
        <Header/>
        <SearchBar/>
        <JobsList/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
