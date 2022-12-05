import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import  SignUp from './pages/Authentication/SignUp/SignUp';
import  Login from './pages/Authentication/Login/Login';
import FactorAuth from './pages/Authentication/FactorAuth/FactorAuth';
import Password from './pages/Authentication/Password/Password';
import Cmail from './pages/Authentication/Cmail/Cmail';
import Authentication from './pages/Authentication/Authentication';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/authentication/*' element={<Authentication  />} />
          
          {/* <Login /> */}
      {/* <FactorAuth /> */}
      {/* <Password /> */}
      {/* <Cmail /> */}
      {/* <header>
      <h1 className="text-3xl font-bold text-red-600">
        hello time
      </h1>
      </header> */}
          <Route path='*' element={<h1>No Page</h1>} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
