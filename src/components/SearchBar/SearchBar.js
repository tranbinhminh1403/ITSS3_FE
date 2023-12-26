// components/SearchBar.js
import React from 'react';
import SearchModal from '../SearchModal/SearchModal';
import './SearchBar.css';
import { useEffect } from 'react';
import axios from 'axios';
import { baseURL } from '../../utils/baseUrl';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

const SearchBar = ({ onSearchResponse }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [fieldList, setFieldsList] = React.useState([]);
  const [jobTitle, setJobTitle] = React.useState([]);

  const handleJobTitleChange = async (selected) => {
    if (selected) {
      const jobTitleQuery = selected[0];
      try {
        await axios
          .get(`${baseURL}jobs/job-with-title?job_title=${jobTitleQuery}`)
          .then((response) => {
            onSearchResponse(response.data);
          });
      } catch (error) {
        console.error('Error sending HUST partner request:', error);
      }
    }
  };

  const handleHustPartnerChange = async (event) => {
    const isChecked = event.target.checked;
    try {
      await axios
        .get(`${baseURL}jobs/hust-partner?hust_partner=${isChecked}`)
        .then((response) => {
          onSearchResponse(response.data);
        });
    } catch (error) {
      console.error('Error sending HUST partner request:', error);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [fieldsResponse, jobTitleResponse] = await Promise.all([
          axios.get(`${baseURL}fields`),
          axios.get(`${baseURL}jobs/job-title`),
        ]);

        const fields = fieldsResponse.data;
        const jobTitleArray = jobTitleResponse.data;

        setFieldsList(fields);
        setJobTitle(jobTitleArray);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div
      className="row border border-3 pt-4 pb-4"
      style={{ backgroundColor: '#F1F2F4', width: '100%' }}
    >
      <p
        style={{
          marginLeft: '11%',
          textAlign: 'left',
          fontSize: 18,
          fontWeight: 500,
        }}
      >
        Tìm kiếm
      </p>
      <div
        className="row pt-2 pb-2"
        style={{
          backgroundColor: 'white',
          margin: '0 16% 0 11%',
          width: '78.5%',
        }}
      >
        <div className="col border-end pt-2">
          <div className="input-group">
            <span className="input-group-text" id="inputGroup-sizing-default">
              <i className="fas fa-search" />
            </span>
            <Typeahead
              id="jobTitleSearch"
              filterBy={() => true}
              options={jobTitle}
              onChange={handleJobTitleChange}
              maxResults={10}
              placeholder="Tìm kiếm công việc, từ khóa..."
            />
          </div>
        </div>
        <div className="col border-end pt-2 ">
          <div className="input-group">
            <span className="input-group-text" id="inputGroup-sizing-default">
              <i className="fas fa-location-dot" style={{ color: '#005eff' }} />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Vị trí"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
        </div>
        <div className="col border-end pt-2 ">
          <div className="input-group ">
            <div className="form-check d-flex align-items-center">
              <div className="container d-flex align-items-center me-4">
                <p className="mt-2">Doanh nghiệp liên kết</p>
              </div>
            </div>
            <div className="form-check mt-2">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="HUST"
                onChange={handleHustPartnerChange}
              />
              <label className="form-check-label" htmlFor="HUST">
                HUST
              </label>
            </div>
          </div>
        </div>
        <div className="col pt-2 ">
          <div className="d-flex">
            <span className="ms-4 d-flex align-items-center">
              <span className="ms-2 me-2">Thêm tiêu chí</span>
              <i
                className="fas fa-chevron-down me-2"
                onClick={openModal}
                style={{ cursor: 'pointer' }}
              />
            </span>
            <button
              type="button"
              className="btn btn-primary ms-auto"
              onClick={openModal}
            >
              Tìm kiếm
            </button>
            <SearchModal
              isOpen={isModalOpen}
              onRequestClose={closeModal}
              fieldData={fieldList}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
