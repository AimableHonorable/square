
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'
import AnimatedHeader from './components/AnimatedHeader';
import Welcome from './components/Welcome';
import Navbar from './components/Navbar';
import Slide1 from './components/Slide1';
import SecondText from './components/SecondText';
import Tips from './components/Tips';
import ThirdText from './components/ThirdText';
import FourthText from './components/FourthText';
import RowColumn from './components/RowColumn';
import QuikLinks from './components/QuikLinks';
import Form from './components/Form';
import Footer from './components/Footer';


function App() {
  useEffect(() => {
    Aos.init();
  },[])

  return (
    <div className="App">
      <Navbar className="zi-1"/>
      <AnimatedHeader/>
      <Welcome/>
      <Slide1></Slide1>
      <SecondText/>
      <Tips/>
      <ThirdText/>
      <FourthText/>
      <RowColumn data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className="grow" />
      <QuikLinks />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
