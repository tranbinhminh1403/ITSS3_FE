import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { BsArrowRight } from 'react-icons/bs';
import { ReactComponent as UploadIcon } from '../../assets/upload.svg';
import axios from 'axios';
import { baseURL } from '../../utils/baseUrl';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initValue =
  '<p><span>Chào [Tên Người Nhận],</span></p><p><span>Tôi là [Họ và Tên của Bạn], và tôi rất hứng thú với vị trí [Tên Vị Trí] mà công ty đang tuyển dụng, như đã được đăng tải trên trang web của bạn. Tôi tin rằng kinh nghiệm và kỹ năng của mình có thể làm cho tôi trở thành một người đóng góp có ý nghĩa cho đội ngũ của [Tên Công Ty].</span></p><p><span>Trân trọng,</span></p><p><span>[Họ và Tên của Bạn]</span></p><p><span>[Số Điện Thoại của Bạn]</span></p><p><span>[Địa chỉ Email của Bạn]</span></p>';
const FormModal = ({ isOpen, onClose, propData }) => {
  const { jobId, jobTitle, companyEmail } = propData;
  const [editorValue, setEditorValue] = useState(initValue);
  const [file, setFile] = useState(null);
  const [quillHeight, setQuillHeight] = useState(200);

  useEffect(() => {
    const editor = document.querySelector('.react-quill .ql-editor');
    if (editor) {
      setQuillHeight(editor.scrollHeight);
    }
  }, [editorValue]);

  const updateModalHeight = () => {
    if (quillHeight) {
      const totalHeight = quillHeight + 315;
      return {
        content: {
          height: totalHeight,
        },
      };
    }
    return {};
  };

  const user = {
    id: 1,
  };

  const closeModal = () => {
    onClose();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const subject = `Ứng tuyển vị trí ${jobTitle}`;

  const handleApply = () => {
    const formData = new FormData();
    formData.append('userId', user.id);
    formData.append('subject', subject);
    formData.append('jobId', jobId);
    formData.append('mailContent', editorValue);
    formData.append('companyEmail', companyEmail);

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
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={{
          content: {
            width: '50%',
            margin: 'auto',
            maxHeight: '90%',
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
            ...updateModalHeight().content,
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
          <h3>{subject}</h3>
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
          className="react-quill"
          value={editorValue}
          onChange={(value) => setEditorValue(value)}
          style={{
            marginBottom: '30px',
          }}
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
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
