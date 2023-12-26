import Header from '../components/HeaderFooter/Header';
import Footer from '../components/HeaderFooter/Footer';
import AppliedJob from '../components/appliedJob/appliedJob'

export default function Result() {
    return (
      <div>
        <Header />
        <AppliedJob/>
        <Footer marginTop={20}/>
      </div>
    );
  }