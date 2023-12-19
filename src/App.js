import logo from './logo.svg';
import './App.css';
import JobsListDetail from './components/JobResultItem/jobResult';
import JobsList from './components/jobsList/jobsList';
import SearchBar from './components/SearchBar/SearchBar';
import Header from './components/HeaderFooter/Header';
import Footer from './components/HeaderFooter/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import DetailPage from './pages/DetailPage';
import Result from './pages/Result';

function App() {
  return (
    <div className="App">
      <div className="body">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/job/:id" element={<DetailPage />} />
            <Route path="/result" element={<Result />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
