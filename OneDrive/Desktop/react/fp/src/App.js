import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; 
import logo1 from './images/logo1.svg';
import logo2 from './images/logo2.svg';

import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

const App = ()=> {
  return (
    <div className="App">
      <div className='image-container'>
      <div className="top-left"><img src={logo2} alt="Logo" /></div>
      <div className="center"><img src={logo1} alt="Logo" /></div>
      </div>
      <div className='page'>
        <Link to="/signin">SignIn</Link>
        <Link to="/signup">SignUp</Link>
      </div>
      <Router>
        
          <Routes>
              <Route path="/signin" Component={SignIn} />
              <Route path="/signup" Component={SignUp} />
          </Routes>
      </Router> 
     
    </div>
  );
}

export default App;
