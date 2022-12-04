import logo from './logo.svg';
import './App.css';
import  SignUp from './pages/Authentication/SignUp/SignUp';
import  Login from './pages/Authentication/Login/Login';
import FactorAuth from './pages/Authentication/FactorAuth/FactorAuth';
import Password from './pages/Authentication/Password/Password';
import Cmail from './pages/Authentication/Cmail/Cmail';

function App() {
  return (
    <div className="App">
      <SignUp />
      {/* <Login /> */}
      {/* <FactorAuth /> */}
      {/* <Password /> */}
      {/* <Cmail /> */}
      {/* <header>
      <h1 className="text-3xl font-bold text-red-600">
        hello time
      </h1>
      </header> */}
    </div>
  );
}

export default App;
