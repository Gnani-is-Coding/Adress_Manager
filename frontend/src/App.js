import './App.css';
import Login from './components/Login';
import {Route, Routes} from 'react-router-dom' 
import AddressForm from './components/AddressForm'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
   <div className="container app">
    <h1>Address Manager</h1>
    
    <Routes>
      <Route path="/login" element={<Login/>} />
      
      <Route path="/" element={<ProtectedRoute><AddressForm/> </ProtectedRoute>} />
    </Routes>
   </div>
  );
}

export default App;
