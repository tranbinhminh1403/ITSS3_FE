import '../App.css';
import Header from '../components/HeaderFooter/Header';
import Footer from '../components/HeaderFooter/Footer';
import errorImage from '../assets/image.png';
import { BsArrowRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

function ErrorPage() {
  const navigate = useNavigate();

  const handleGoHomePage = () => {
    navigate('/');
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="App">
      <div className="body">
        <Header />
        <div className="container">
          <div
            className="row"
            style={{ paddingTop: '10%', paddingBottom: '10%' }}
          >
            <div
              className="col-md-4 d-flex align-items-center "
              style={{ textAlign: 'left' }}
            >
              <div className="container">
                <h1 className="pb-4">Opps! Không tìm thấy trang yêu cầu</h1>
                <p className="pb-4" style={{ fontSize: '1.4em' }}>
                  Đã xảy ra lỗi. Có vẻ như liên kết bị hỏng hoặc trang bị xóa
                </p>
                <div className="back-buttons align-left">
                  <button
                    className="btn btn-primary btn-lg "
                    onClick={handleGoHomePage}
                  >
                    Trang chủ <BsArrowRight className="ms-2" />
                  </button>
                  <button
                    className="btn btn-secondary btn-lg ms-4"
                    style={{
                      backgroundColor: '#E7F0FA',
                      color: '#0A65CC',
                      border: '0',
                    }}
                    onClick={handleGoBack}
                  >
                    Trở về
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="image-container">
                <img
                  src={errorImage}
                  alt="Error Image"
                  className="img-fluid"
                  style={{ width: '1000%' }}
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default ErrorPage;
