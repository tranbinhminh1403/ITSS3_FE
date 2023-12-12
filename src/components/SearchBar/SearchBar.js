// components/SearchBar.js
import React from 'react';
import SearchModal from '../SearchModal/SearchModal';
import './SearchBar.css';
import { useEffect } from 'react';
import axios from 'axios';
import { baseURL } from '../../utils/baseUrl';

const SearchBar = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [fieldList, setFieldsList] = React.useState([]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    getFieldData();
  }, []);

  const getFieldData = async () => {
    try {
      const response = await axios.get(`${baseURL}fields`);
      const fields = response.data;
      setFieldsList(fields);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="row border border-3 pt-2 pb-2"
      style={{ backgroundColor: '#F1F2F4', width: '91%', marginLeft: '4%' }}
    >
      <div className="col border-end pt-2">
        <div className="input-group">
          <span className="input-group-text" id="inputGroup-sizing-default">
            <i className="fas fa-search" />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Công việc, từ khóa..."
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
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
        <div className="input-group align-items-center">
          <div className="form-check">
            <p>Doanh nghiệp liên kết</p>
            <div className="container">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="HUST"
              />
              <label className="form-check-label" htmlFor="HUST">
                HUST
              </label>
            </div>
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
  );
};

export default SearchBar;
