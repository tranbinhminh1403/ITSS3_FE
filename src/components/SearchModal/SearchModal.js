// SearchModal.js
import '@fortawesome/fontawesome-free/css/all.min.css';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Slider from '@mui/material/Slider';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { searchConditionState } from '../../recoil/searchConditionState';
import { baseURL } from '../../utils/baseUrl';
import './SearchModal.css';
const DEFAULT_FIELD_VALUE = 'all';
const DEFAULT_SALARY_VALUE = 1000000;

const SearchModal = ({ isOpen, onRequestClose }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchOption, setSearchOption] = useRecoilState(searchConditionState);
  const resetConditions = useResetRecoilState(searchConditionState);
  const [fieldData, setFieldData] = useState([]);
  const [majorsList, setMajorsList] = useState([]);
  const refFieldSelection = React.useRef();
  const refMajorSelection = React.useRef();
  useEffect(() => {
    const fetchFieldData = async () => {
      try {
        const response = await axios.get(`${baseURL}fields`);
        setFieldData(response.data);
        setMajorsList(response.data.flatMap((field) => field.majors));
      } catch (error) {
        console.log(error);
      }
    };
    fetchFieldData();
  }, []);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`${baseURL}jobs/search-with-option`, {
        params: {
          ...searchOption,
          type: searchOption.type.join(','),
          min_salary: searchOption.min_salary * DEFAULT_SALARY_VALUE,
          max_salary: searchOption.max_salary
            ? searchOption.max_salary * DEFAULT_SALARY_VALUE
            : undefined,
        },
      });
      if (location.pathname === '/result') {
        navigate('.', { state: { data: response.data } });
      } else {
        navigate('/result', { state: { data: response.data } });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeField = (e) => {
    if (e.target.value === DEFAULT_FIELD_VALUE) {
      setMajorsList(fieldData.flatMap((field) => field.majors));
      setSearchOption({
        ...searchOption,
        major: undefined,
      });
    } else {
      setMajorsList(
        fieldData.find((field) => field.name === e.target.value).majors,
      );
    }
    setSearchOption({
      ...searchOption,
      field: e.target.value,
    });
    refMajorSelection.current.value = DEFAULT_FIELD_VALUE;
  };

  const handleChangeType = (e) => {
    const type = e.target.value;
    if (searchOption.type.includes(type)) {
      setSearchOption({
        ...searchOption,
        type: searchOption.type.filter((item) => item !== type),
      });
    } else {
      setSearchOption({ ...searchOption, type: [...searchOption.type, type] });
    }
  };

  const handleChangeCompany = (e) => {
    const company = e.target.value;
    setSearchOption({
      ...searchOption,
      company,
    });
  };

  const handleChangeMajor = (e) => {
    setSearchOption({
      ...searchOption,
      major:
        e.target.value === DEFAULT_FIELD_VALUE ? undefined : e.target.value,
    });
  };

  return (
    <div>
      <ToastContainer />
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        style={{
          content: {
            width: '80%',
            height: '50%',
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
            top: '15%',
            left: '10%',
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
        }}
        ariaHideApp={false}
      >
        <div>
          {/* keyword, address */}
          <div className="row pt-2 pb-2">
            <div className="col border-end my-2 ">
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
                  value={searchOption.keyword}
                  onChange={(e) =>
                    setSearchOption({
                      ...searchOption,
                      keyword: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="col border-end my-2 ">
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
                  value={searchOption.location}
                  onChange={(e) =>
                    setSearchOption({
                      ...searchOption,
                      location: e.target.value,
                    })
                  }
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
                    onChange={(e) =>
                      setSearchOption({
                        ...searchOption,
                        hust_partner: e.target.checked,
                      })
                    }
                    checked={searchOption.hust_partner === true}
                  />
                  <label className="form-check-label" htmlFor="HUST_modal">
                    HUST
                  </label>
                </div>
              </div>
            </div>
            <div className="col pt-2 ">
              <div className="d-flex">
                <span
                  className="ms-4 d-flex align-items-center"
                  style={{
                    cursor: 'pointer',
                  }}
                  onClick={onRequestClose}
                >
                  <span className="ms-2 me-2">Đóng</span>
                  <i className="fas fa-chevron-up me-2" />
                </span>
                <button
                  className="btn btn-danger ms-auto"
                  onClick={() => {
                    resetConditions();
                    refFieldSelection.current.value = DEFAULT_FIELD_VALUE;
                    refMajorSelection.current.value = DEFAULT_FIELD_VALUE;
                  }}
                >
                  Đặt lại
                </button>
                <button
                  type="button"
                  className="btn btn-primary ms-auto"
                  onClick={() => {
                    handleSearch();
                    onRequestClose();
                  }}
                >
                  Tìm kiếm
                </button>
              </div>
            </div>
          </div>
          {/* search option */}
          <div className="row">
            {/* year of experience, salary */}
            <div className="col-4 pt-4 border-top border-end ">
              {/* year of experience */}
              <div className="wrapper">
                <div className="wrapper-1">
                  <p>Số năm kinh nghiệm</p>
                </div>
                <div className="wrapper-1">
                  <Slider
                    value={[
                      searchOption.min_years_of_experience,
                      searchOption.max_years_of_experience
                        ? searchOption.max_years_of_experience
                        : 5,
                    ]}
                    step={1}
                    min={0}
                    max={5}
                    marks={[
                      {
                        value: 0,
                        label: '0',
                      },
                      {
                        value: 1,
                        label: '1 ',
                      },
                      {
                        value: 2,
                        label: '2 ',
                      },
                      {
                        value: 3,
                        label: '3 ',
                      },
                      {
                        value: 4,
                        label: '4 ',
                      },
                      {
                        value: 5,
                        label: '4 +',
                      },
                    ]}
                    onChange={(e) => {
                      setSearchOption({
                        ...searchOption,
                        min_years_of_experience: e.target.value[0],
                        max_years_of_experience:
                          e.target.value[1] <= 4
                            ? e.target.value[1]
                            : undefined,
                      });
                    }}
                  />
                </div>
              </div>
              {/* salary */}
              <div className="wrapper">
                <div className="wrapper-1">
                  <p>Lương (triệu VNĐ)</p>
                </div>
                <div className="wrapper-1">
                  <Slider
                    value={[
                      searchOption.min_salary,
                      searchOption.max_salary ? searchOption.max_salary : 50,
                    ]}
                    step={5}
                    marks={[
                      {
                        value: 0,
                        label: '0',
                      },
                      {
                        value: 10,
                        label: '10Tr',
                      },
                      {
                        value: 20,
                        label: '20Tr',
                      },
                      {
                        value: 30,
                        label: '30Tr',
                      },
                      {
                        value: 40,
                        label: '40Tr',
                      },
                      {
                        value: 50,
                        label: '> 40Tr',
                      },
                    ]}
                    min={0}
                    max={50}
                    onChange={(e) => {
                      setSearchOption({
                        ...searchOption,
                        min_salary: e.target.value[0],
                        max_salary:
                          e.target.value[1] <= 40
                            ? e.target.value[1]
                            : undefined,
                      });
                    }}
                  />
                </div>
              </div>
            </div>
            {/* job type */}
            <div className="col pt-4 border-top border-end ">
              <div className="wrapper">
                <div className="wrapper-1">
                  <p>Loại công việc</p>
                </div>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Bán thời gian"
                    name="type"
                    value={1}
                    onChange={handleChangeType}
                    checked={searchOption.type.includes('1')}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Toàn thời gian"
                    name="type"
                    value={2}
                    onChange={handleChangeType}
                    checked={searchOption.type.includes('2')}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Thực tập"
                    name="type"
                    value={3}
                    onChange={handleChangeType}
                    checked={searchOption.type.includes('3')}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Làm từ xa"
                    name="type"
                    value={4}
                    onChange={handleChangeType}
                    checked={searchOption.type.includes('4')}
                  />
                </FormGroup>
              </div>
            </div>
            {/* company */}
            <div className="col pt-4 border-top border-end ">
              <div className="wrapper mt-2">
                <FormControl>
                  <p className="mb-4">Doanh nghiệp</p>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    onChange={handleChangeCompany}
                  >
                    <FormControlLabel
                      value="vietnam"
                      control={<Radio />}
                      label="Việt Nam"
                      checked={searchOption.company === 'vietnam'}
                    />
                    <FormControlLabel
                      value="nuocngoai"
                      control={<Radio />}
                      label="Nước ngoài"
                      checked={searchOption.company === 'nuocngoai'}
                    />
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
            {/* field, major */}
            <div className="col pt-4 border-top ">
              {/* field */}
              <div className="wrapper">
                <div className="wrapper-1">
                  <p>Lĩnh vực</p>
                </div>
                <div className="wrapper-1">
                  <select
                    ref={refFieldSelection}
                    className="form-select"
                    aria-label="Default select example"
                    onChange={handleChangeField}
                    value={searchOption.field}
                  >
                    <option selected value={DEFAULT_FIELD_VALUE}>
                      Tất cả
                    </option>
                    {fieldData?.map((field) => (
                      <option key={field.id} value={field.name}>
                        {field.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              {/* major */}
              <div className="wrapper">
                <div className="wrapper-1">
                  <p>Chuyên ngành</p>
                </div>
                <div className="wrapper-1">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    onChange={handleChangeMajor}
                    ref={refMajorSelection}
                    value={searchOption.major}
                  >
                    <option selected value={DEFAULT_FIELD_VALUE}>
                      Tất cả
                    </option>
                    {majorsList?.map((major, index) => (
                      <option key={index} value={major.id}>
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
