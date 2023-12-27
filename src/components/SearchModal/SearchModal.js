// SearchModal.js
import React from 'react';
import Modal from 'react-modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import DoubleScrollBar from '../DoubleScrollBar/DoubleScrollBar';
import './SearchModal.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { baseURL } from '../../utils/baseUrl';
import RecJobs from '../jobsList/jobRec';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SearchModal = ({ isOpen, onRequestClose, fieldData }) => {
  const [selectedField, setSelectedField] = useState(fieldData[0]?.name);
  const [majorsList, setMajorsList] = useState(fieldData[0]?.name);
  const [selectedMajor, setSelectedMajor] = useState(
    fieldData[0]?.majors[0]?.name,
  );
  const [jobKeyword, setJobKeyword] = useState('');
  const [location, setLocation] = useState('');
  const [companyLink, setCompanyLink] = useState(false);
  const [filterData, setFilterData] = useState([]);
  const [yearsOfExperienceRange, setYearsOfExperienceRange] = useState({
    min: 0,
    max: 5,
  });
  const [salaryRange, setSalaryRange] = useState({ min: 0, max: 40 });
  const [jobType, setJobType] = useState([]);
  const [checked, setChecked] = useState({
    all: false,
    partTime: false,
    fullTime: false,
    internship: false,
    remote: false,
  });
  const [isDomestic, setIsDomestic] = useState(true);

  const navigate = useNavigate();

  const handleYearsOfExperienceChange = useCallback(
    (from, to) => {
      setYearsOfExperienceRange({ min: from, max: to });
    },
    [setYearsOfExperienceRange],
  );

  const handleSalaryChange = useCallback(
    (from, to) => {
      setSalaryRange({ min: from, max: to });
    },
    [setSalaryRange],
  );

  const handleSearch = async () => {
    const searchData = {
      field: selectedField,
      major: selectedMajor,
      hust_partner: companyLink,
      is_domestic: isDomestic,
      yearsOfExperienceRange: yearsOfExperienceRange,
      salaryRange: salaryRange,
      jobType: jobType,
    };

    try {
      const response = await axios.post(`${baseURL}jobs`, searchData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      navigate('result', { state: { data: response.data } });
    } catch (error) {
      console.log(error);
    }
  };

  const handleFieldChange = (event) => {
    setSelectedField(event.target.value);
  };

  const handleMajorChange = (event) => {
    setSelectedMajor(event.target.value);
  };

  const handleSelectMajor = () => {
    const filterField = fieldData?.filter(
      (field) => field.name === selectedField,
    );
    const majorsList = filterField[0]?.majors;
    setMajorsList(majorsList);
  };

  useEffect(() => {
    handleSelectMajor();
  }, [selectedField]);

  return (
    <div>
      <ToastContainer />
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        style={{
          content: {
            width: '66.666%',
            margin: 'auto',
            height: '50%',
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
        }}
        ariaHideApp={false}
      >
        <div className="container">
          <div className="row pt-2 pb-2">
            <div className="col border-end pt-2 ">
              <div className="input-group">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
                  <i className="fas fa-search" />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Công việc, từ khóa"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                  value={jobKeyword}
                  onChange={(e) => setJobKeyword(e.target.value)}
                />
              </div>
            </div>
            <div className="col border-end pt-2 ">
              <div className="input-group">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
                  <i
                    className="fas fa-location-dot"
                    style={{ color: '#005eff' }}
                  />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Vị trí"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
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
                    id="HUST_modal"
                    checked={companyLink}
                    onChange={(e) => setCompanyLink(e.target.checked)}
                  />
                  <label className="form-check-label" htmlFor="HUST_modal">
                    HUST
                  </label>
                </div>
              </div>
            </div>
            <div className="col pt-2 ">
              <div className="d-flex">
                <span className="ms-4 d-flex align-items-center">
                  <span className="ms-2 me-2">Thêm</span>
                  <i className="fas fa-chevron-up me-2" />
                </span>
                <button
                  type="button"
                  className="btn btn-primary ms-auto"
                  onClick={handleSearch}
                >
                  Tìm kiếm
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-4 pt-4 border-top border-end ">
              <div className="wrapper">
                <div className="wrapper-1">
                  <p>Số năm kinh nghiệm</p>
                </div>
                <div className="wrapper-1">
                  <DoubleScrollBar
                    min={0}
                    max={5}
                    step={1}
                    forid="display1"
                    class="SB-1"
                    onChange={handleYearsOfExperienceChange}
                    setYearsOfExperienceRange
                  />
                </div>
                <div className="row">
                  <div className="horizontal-row p-2 ">
                    {[0, 1, 2, 3, 4, 5].map((value) => (
                      <div key={value} className="label">
                        {value}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="wrapper">
                <div className="wrapper-1">
                  <p>Lương (triệu VNĐ)</p>
                </div>
                <div className="wrapper-1">
                  <DoubleScrollBar
                    min={0}
                    max={40}
                    step={10}
                    forid="display2"
                    class="SB-1"
                    onChange={handleSalaryChange}
                  />
                </div>
                <div className="row">
                  <div className="horizontal-row p-2 ">
                    {[0, 10, 20, 30, 40].map((value) => (
                      <div key={value} className="label">
                        {value >= 40 ? `30+` : value}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col pt-4 border-top border-end ">
              <div className="wrapper">
                <div className="wrapper-1">
                  <p>Loại công việc</p>
                </div>
                <div className="wrapper-1">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="tatCa"
                      checked={checked.all}
                      onChange={() => {
                        if (checked.all) {
                          setJobType((prev) =>
                            prev.filter((type) => type !== 'Tất cả'),
                          );
                        } else {
                          setJobType((prev) => [...prev, 'Tất cả']);
                        }
                        setChecked((prev) => ({
                          ...prev,
                          all: !prev.all,
                        }));
                      }}
                    />
                    <label className="form-check-label" htmlFor="tatCa">
                      Tất cả
                    </label>
                  </div>
                </div>
                <div className="wrapper-1">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="banthoigian"
                      checked={checked.partTime}
                      onChange={() => {
                        if (checked.partTime) {
                          setJobType((prev) =>
                            prev.filter((type) => type !== 'Bán thời gian'),
                          );
                        } else {
                          setJobType((prev) => [...prev, 'Bán thời gian']);
                        }
                        setChecked((prev) => ({
                          ...prev,
                          partTime: !prev.partTime,
                        }));
                      }}
                    />
                    <label className="form-check-label" htmlFor="banthoigian">
                      Bán thời gian
                    </label>
                  </div>
                </div>
                <div className="wrapper-1">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="toanthoigian"
                      checked={checked.fullTime}
                      onChange={() => {
                        if (checked.fullTime) {
                          setJobType((prev) =>
                            prev.filter((type) => type !== 'Toàn thời gian'),
                          );
                        } else {
                          setJobType((prev) => [...prev, 'Toàn thời gian']);
                        }
                        setChecked((prev) => ({
                          ...prev,
                          fullTime: !prev.fullTime,
                        }));
                      }}
                    />
                    <label className="form-check-label" htmlFor="toanthoigian">
                      Toàn thời gian
                    </label>
                  </div>
                </div>
                <div className="wrapper-1">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="thuctap"
                      checked={checked.internship}
                      onChange={() => {
                        if (checked.internship) {
                          setJobType((prev) =>
                            prev.filter((type) => type !== 'Thực Tập'),
                          );
                        } else {
                          setJobType((prev) => [...prev, 'Thực Tập']);
                        }
                        setChecked((prev) => ({
                          ...prev,
                          internship: !prev.internship,
                        }));
                      }}
                    />
                    <label className="form-check-label" htmlFor="thuctap">
                      Thực tập
                    </label>
                  </div>
                </div>
                <div className="wrapper-1">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="lamtuxa"
                      checked={checked.remote}
                      onChange={() => {
                        if (checked.remote) {
                          setJobType((prev) =>
                            prev.filter((type) => type !== 'Làm từ xa'),
                          );
                        } else {
                          setJobType((prev) => [...prev, 'Làm từ xa']);
                        }
                        setChecked((prev) => ({
                          ...prev,
                          remote: !prev.remote,
                        }));
                      }}
                    />
                    <label className="form-check-label" htmlFor="lamtuxa">
                      Làm từ xa
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col pt-4 border-top border-end ">
              <div className="wrapper">
                <div className="wrapper-1">
                  <p>Doanh nghiệp</p>
                </div>
                <div className="wrapper-1">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="vietnam"
                      checked={isDomestic}
                      onChange={() => setIsDomestic(true)}
                    />
                    <label className="form-check-label" htmlFor="vietnam">
                      Việt Nam
                    </label>
                  </div>
                </div>
                <div className="wrapper-1">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="nuocngoai"
                      checked={!isDomestic}
                      onChange={() => setIsDomestic(false)}
                    />
                    <label className="form-check-label" htmlFor="nuocngoai">
                      Nước ngoài
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col pt-4 border-top ">
              <div className="wrapper">
                <div className="wrapper-1">
                  <p>Lĩnh vực</p>
                </div>
                <div className="wrapper-1">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    value={selectedField}
                    onChange={handleFieldChange}
                  >
                    {fieldData?.map((field, index) => (
                      <option key={index} value={field.name}>
                        {field.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="wrapper">
                <div className="wrapper-1">
                  <p>Chuyên ngành</p>
                </div>
                <div className="wrapper-1">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    value={selectedMajor}
                    onChange={handleMajorChange}
                  >
                    {majorsList?.map((major, index) => (
                      <option key={index} value={major.name}>
                        {major.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SearchModal;
