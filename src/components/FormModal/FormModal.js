import React, { useState } from 'react';
import Modal from 'react-modal';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { BsArrowRight } from 'react-icons/bs';
import { ReactComponent as UploadIcon } from '../../assets/upload.svg';
import axios from 'axios';
import { baseURL } from '../../utils/baseUrl';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const companyData = {
  email: 'itss2.hedspi@gmail.com',
};

const initValue =
  '<p><span>Chào [Tên Người Nhận],</span></p><p><span>Tôi là [Họ và Tên của Bạn], và tôi rất hứng thú với vị trí [Tên Vị Trí] mà công ty đang tuyển dụng, như đã được đăng tải trên trang web của bạn. Tôi tin rằng kinh nghiệm và kỹ năng của mình có thể làm cho tôi trở thành một người đóng góp có ý nghĩa cho đội ngũ của [Tên Công Ty].</span></p><p><span>Trân trọng,</span></p><p><span>[Họ và Tên của Bạn]</span></p><p><span>[Số Điện Thoại của Bạn]</span></p><p><span>[Địa chỉ Email của Bạn]</span></p>';
const FormModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [editorValue, setEditorValue] = useState(initValue);
  const [file, setFile] = useState(null);

  const job = {
    title: 'Ứng tuyển vị trí thực tập sinh Nodejs',
    id: 1,
  };

  const user = {
    id: 1,
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleApply = () => {
    const formData = new FormData();
    formData.append('userId', user.id);
    formData.append('subject', job.title);
    formData.append('jobId', job.id);
    formData.append('mailContent', editorValue);
    formData.append('companyEmail', companyData.email);

    if (file) {
      formData.append('file', file);
    }

    axios
      .post(`${baseURL}apply`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        toast.success(`${response.data}`);
      })
      .catch((error) => {
        toast.error('Error submitting application.');
      });
  };

  return (
    <div>
      <ToastContainer />
      <button onClick={openModal}>Mở Modal</button>

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={{
          content: {
            width: '40%',
            margin: 'auto',
            height: '60%',
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
            display: 'flex',
            flexDirection: 'column', // To make child elements stack vertically
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
        }}
        ariaHideApp={false}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <h2>Ứng tuyển công việc: XXXX</h2>
          <button
            onClick={closeModal}
            style={{
              cursor: 'pointer',
              background: 'none',
              border: 'none',
              fontSize: '3em',
              color: 'blue',
            }}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <p
          style={{
            fontSize: 14,
            fontWeight: 400,
          }}
        >
          Nộp CV
        </p>
        <div className="input-group mb-3">
          <input
            type="file"
            className="form-control"
            id="uploadcv"
            style={{ visibility: 'hidden', width: '90px', display: 'none' }} // Corrected style attribute
            onChange={handleFileChange}
          />
          <label
            className="input-group-text"
            htmlFor="uploadcv"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: 14,
                fontWeight: 400,
                color: '#767F8C',
              }}
            >
              {file ? file.name : 'Tải lên CV'}
            </p>
            <UploadIcon />
          </label>
        </div>
        <p
          style={{
            fontSize: 14,
            fontWeight: 400,
          }}
        >
          Lời nhắn đến nhà tuyển dụng
        </p>
        <ReactQuill
          value={editorValue}
          onChange={(value) => setEditorValue(value)}
          style={{ marginBottom: '60px' }}
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '10px',
          }}
        >
          <button
            onClick={closeModal}
            className="btn btn-secondary"
            style={{
              width: '15%',
              height: '40px',
              backgroundColor: '#E7F0FA',
              color: '#007BFF',
              border: '0',
            }}
          >
            Hủy
          </button>
          <button
            className="btn btn-primary"
            style={{ width: '15%', height: '40px' }}
            onClick={handleApply}
          >
            Gửi <BsArrowRight className="ms-2" />
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default FormModal;
