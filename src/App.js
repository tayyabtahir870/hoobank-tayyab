import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Layouts/Header';
import Heropage from './Components/Elements/Heropage';
import Business from './Components/Elements/Business';
import Transition from './Components/Elements/Transition';

function App() {
  return (
    <div>
     <Header/>
     <Heropage/>
     <Business/>
     <Transition/>
    </div>
  );
}

export default App;
