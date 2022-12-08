import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Authentication from './pages/Authentication/Authentication';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/authentication/*' element={<Authentication  />} />
          <Route path='*' element={<h1><Link to='/authentication'> No Page</Link></h1>} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
