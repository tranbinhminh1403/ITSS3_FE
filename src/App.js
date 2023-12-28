import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import useFetchAppliedJobs from './hooks/useFetchAppliedJobs';
import AppliedPage from './pages/ApplyPage';
import DetailPage from './pages/DetailPage';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import Result from './pages/Result';

function App() {
  useFetchAppliedJobs();
  return (
    <div className="App">
      <div className="body">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/job/:id" element={<DetailPage />} />
            <Route path="/result" element={<Result />} />
            <Route path="/applied" element={<AppliedPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
