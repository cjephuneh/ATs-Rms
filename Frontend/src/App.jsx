import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Orders from './components/Orders';
import Tables from './components/Tables';
import Delivery from './components/Delivery';
import Reservations from './components/Reservations';
import Accounting from './components/Accounting';
import Staff from './components/Staff';
import Reports from './components/Reports';
import Settings from './components/Settings';
import MenuManagement from './components/Menu';
import LoginPage from './components/Login';
import SignupPage from './components/Signup';
function App() {

  return (
    <>
      
      <Router>
        <Routes>
          <Route path="/menu" element={<MenuManagement />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/accounting" element={<Accounting />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
    </Router>
    </>
  )
}

export default App
