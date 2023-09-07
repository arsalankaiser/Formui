import './App.css';
import Login1 from './compnent/account/Login1';
import OtpForm from './compnent/account/OtpForm';
// import OtpForm from './compnent/account/OtpForm';
import Register from './compnent/account/Register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <div>
  <Router>
        <Routes>
          <Route path="/" element={<Login1/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/OtpForm" element={<OtpForm/>} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
