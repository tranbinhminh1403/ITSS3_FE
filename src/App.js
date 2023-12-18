import logo from './logo.svg';
import './App.css';
import JobsList from './components/jobsList/jobsList';
import SearchBar from './components/SearchBar/SearchBar';
import Header from './components/HeaderFooter/Header';
import Footer from './components/HeaderFooter/Footer';
import FormPage from './pages/FormPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import DetailPage from './pages/DetailPage';

function App() {
  return (
    <div className="App">
      <div className="body">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/upload" element={<FormPage />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/detail" element={<DetailPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
