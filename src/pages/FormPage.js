import '../App.css';

import Header from '../components/HeaderFooter/Header';
import Footer from '../components/HeaderFooter/Footer';
import FormModal from '../components/FormModal/FormModal';
function FormPage() {
  return (
    <div className="App">
      <div className="body">
        <Header />
        <FormModal />
        <Footer />
      </div>
    </div>
  );
}

export default FormPage;
