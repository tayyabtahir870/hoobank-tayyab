import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Layouts/Header';
import Heropage from './Components/Elements/Heropage';
import Business from './Components/Elements/Business';

function App() {
  return (
    <div>
     <Header/>
     <Heropage/>
     <Business/>
    </div>
  );
}

export default App;
