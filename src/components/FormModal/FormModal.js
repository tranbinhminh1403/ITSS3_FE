import React, { useState } from 'react';
import Modal from 'react-modal';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 
import { BsArrowRight } from 'react-icons/bs'; 

const FormModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [editorValue, setEditorValue] = useState('Viết tiểu sử của bạn ở đây. Hãy để nhà tuyển dụng biết bạn là ai...');
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Mở Modal</button>

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={{
          content: {
            width: '40%',
            margin: 'auto',
            height: '45%',
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
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2>Ứng tuyển công việc:  XXXX</h2>
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
            <span aria-hidden="true" >&times;</span>
          </button>
        </div>
        <p>Nộp CV</p>
        <div class="input-group mb-3">
          <input type="file" class="form-control" id="uploadcv" />
          <label class="input-group-text" for="uploadcv">Tải lên bản CV</label>
        </div>
        <p >Lời nhắn đến nhà tuyển dụng</p>
        <ReactQuill
          value={editorValue}
          onChange={(value) => setEditorValue(value)}
          style={{ marginBottom: '60px' }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
          <button
            onClick={closeModal}
            className="btn btn-secondary"
            style={{
                width: '15%',
                height: '40px',
                backgroundColor: '#E7F0FA', 
                color: '#007BFF', 
                border: '0'
            }}>
            Hủy
          </button>
          <button className="btn btn-primary" style={{ width: '15%', height: '40px'}}>
            Gửi <BsArrowRight className="ms-2" />
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default FormModal;
