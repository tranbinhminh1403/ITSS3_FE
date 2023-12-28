// components/SearchBar.js
import axios from 'axios';
import { useState } from 'react';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { searchConditionState } from '../../recoil/searchConditionState';
import { baseURL } from '../../utils/baseUrl';
import SearchModal from '../SearchModal/SearchModal';
import './SearchBar.css';
const DEFAULT_SALARY_VALUE = 1000000;

const SearchBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchConditions, setSearchConditions] =
    useRecoilState(searchConditionState);
  const resetConditions = useResetRecoilState(searchConditionState);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`${baseURL}jobs/search-with-option`, {
        params: {
          ...searchConditions,
          type: searchConditions.type.join(','),
          min_salary: searchConditions.min_salary * DEFAULT_SALARY_VALUE,
          max_salary: searchConditions.max_salary
            ? searchConditions.max_salary * DEFAULT_SALARY_VALUE
            : undefined,
        },
      });
      if (location.pathname === '/result') {
        navigate('.', { state: { data: response.data } });
      } else {
        navigate('result', { state: { data: response.data } });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="border-top border-bottom border-1 py-4 search-bar_container">
      <div className="search-bar_title_container">
        <p className="search-bar_title">Tìm kiếm</p>
      </div>
      <div
        className="py-4 px-2 w-100 d-flex align-items-center"
        style={{
          backgroundColor: 'white',
        }}
      >
        {/* keyword */}
        <div className="border-end px-2" style={{ width: '25%' }}>
          <div className="input-group">
            <span className="input-group-text" id="inputGroup-sizing-default">
              <i className="fas fa-search" />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Công việc, từ khóa"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              onChange={(e) => {
                setSearchConditions({
                  ...searchConditions,
                  keyword: e.target.value,
                });
              }}
              value={searchConditions.keyword}
            />
          </div>
        </div>
        {/* location */}
        <div className="border-end px-2" style={{ width: '25%' }}>
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
              onChange={(e) => {
                setSearchConditions({
                  ...searchConditions,
                  location: e.target.value,
                });
              }}
              value={searchConditions.location}
            />
          </div>
        </div>
        {/* hust_partner */}
        <div
          className="border-end d-flex px-2 py-1 align-items-center"
          style={{ width: '20%' }}
        >
          <div className="d-flex align-items-center w-60">
            <div className="mb-0 ms-2 me-3">Doanh nghiệp liên kết</div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="HUST"
                onChange={(e) => {
                  setSearchConditions({
                    ...searchConditions,
                    hust_partner: e.target.checked,
                  });
                }}
                checked={searchConditions.hust_partner === true}
              />
              <label className="form-check-label" htmlFor="HUST">
                HUST
              </label>
            </div>
          </div>
        </div>
        {/* new option */}
        <div
          className="d-flex justify-content-between"
          style={{ width: '30%', marginLeft: 8 }}
        >
          <span
            className="d-flex align-items-center"
            style={{ cursor: 'pointer' }}
            onClick={openModal}
          >
            <span className="ms-2 me-2">Thêm tiêu chí</span>
            <i className="fas fa-chevron-down me-5" />
          </span>
          <div className="d-flex ms-4">
            <button
              className="btn btn-secondary me-4"
              onClick={() => {
                resetConditions();
              }}
            >
              Đặt lại
            </button>
            <button className="btn btn-primary" onClick={handleSearch}>
              Tìm kiếm
            </button>
          </div>
          <SearchModal isOpen={isModalOpen} onRequestClose={closeModal} />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
