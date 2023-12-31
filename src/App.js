import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Header from './Components/Layouts/Header';
import Heropage from './Components/Elements/Heropage';
import Business from './Components/Elements/Business';
import Transition from './Components/Elements/Transition';
import Steps from './Components/Elements/Steps';
import Aboutus from './Components/Elements/Aboutus';
import Service from './Components/Elements/Service';
import Footer from './Components/Layouts/Footer';

function App() {
  return (
    <div>
     <Header/>
     <Heropage/>
     <Business/>
     <Transition/>
     <Steps/>
     <Aboutus/>
     <Service/>
     <Footer/>
    </div>
  );
}

export default App;
