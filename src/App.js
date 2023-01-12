import Header from './components/Header';
import Navbar from './components/Navbar';
import Image from './components/Image';
import SectionOne from './components/SectionOne';
import Stories from './components/Stories';
import Footer from './components/Footer';

function App() {
  return (
    <div className='pl-4 pr-4'>
    <Header/>
    <Navbar/>
    <Image/>
    <SectionOne/>
    <Stories/>
    <Footer/>
    </div>
  );
}

export default App;
