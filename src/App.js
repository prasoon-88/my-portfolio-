import './App.css'
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './component/Home'
import Contactform from './component/Contactform'
function App() {
  return (
    <div className='home'>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contactform' element={<Contactform/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
